"use client";

import { useTransition } from "react";
import { Cpu, Archive } from "lucide-react";
import { DEVICE_TYPES } from "../schemas/asset.schema";
import { archiveAsset } from "../actions/asset.actions";

interface Asset {
  id: string;
  deviceTypeName: string | null;
  deviceCategoryId: string | null;
  deviceBrandId: string | null;
  deviceModelFamilyId: string | null;
  customBrand: string | null;
  customModel: string | null;
  color: string | null;
  storage: string | null;
  imeiSerial: string | null;
  notes: string | null;
  // Joined catalog names for display
  categoryName?: string | null;
  brandName?: string | null;
  familyName?: string | null;
}

interface Props {
  asset: Asset;
  customerId: string;
  canManage: boolean;
}

function typeLabel(v: string | null): string {
  if (!v) return "";
  return DEVICE_TYPES.find((t) => t.value === v)?.label ?? v;
}

export function AssetCard({ asset, customerId, canManage }: Props) {
  const [isPending, startTransition] = useTransition();

  // Build title from catalog names first, then fall back to free-text
  const categoryDisplay = asset.categoryName || typeLabel(asset.deviceTypeName);
  const brandDisplay = asset.brandName || asset.customBrand;
  const modelDisplay = asset.familyName || asset.customModel;

  const title = [categoryDisplay, brandDisplay, modelDisplay]
    .filter(Boolean)
    .join(" · ");

  function handleArchive() {
    startTransition(async () => {
      await archiveAsset(asset.id, customerId);
    });
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4 flex items-start gap-3">
      <div className="rounded-md bg-muted p-2 shrink-0 mt-0.5">
        <Cpu className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <p className="text-sm font-medium text-foreground truncate">
          {title || "Appareil sans nom"}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-muted-foreground">
          {asset.color && <span>Couleur : {asset.color}</span>}
          {asset.storage && <span>Stockage : {asset.storage}</span>}
          {asset.imeiSerial && (
            <span className="font-mono">IMEI : {asset.imeiSerial}</span>
          )}
        </div>
        {asset.notes && (
          <p className="text-xs text-muted-foreground line-clamp-2">{asset.notes}</p>
        )}
      </div>

      {canManage && (
        <button
          type="button"
          onClick={handleArchive}
          disabled={isPending}
          title="Archiver cet appareil"
          className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
        >
          <Archive className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
