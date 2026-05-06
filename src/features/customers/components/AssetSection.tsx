"use client";

import { useState } from "react";
import { Plus, Cpu } from "lucide-react";
import { AssetCard } from "./AssetCard";
import { AssetForm } from "./AssetForm";
import { useAppI18n } from "@/lib/i18n/ui";

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

interface Category {
  id: string;
  key: string;
  nameFr: string;
}

interface Props {
  customerId: string;
  initialAssets: Asset[];
  canManage: boolean;
  categories: Category[];
  companyId: string;
  storeId: string | undefined;
}

export function AssetSection({
  customerId,
  initialAssets,
  canManage,
  categories,
  companyId,
  storeId,
}: Props) {
  const { t } = useAppI18n();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">
            {t("customers.asset.devices")} ({initialAssets.length})
          </h2>
        </div>
        {canManage && !showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-primary border border-primary/40 hover:bg-primary/10 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            {t("customers.asset.add")}
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <AssetForm
          customerId={customerId}
          categories={categories}
          companyId={companyId}
          storeId={storeId}
          onSuccess={() => setShowForm(false)}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Asset list */}
      {initialAssets.length === 0 && !showForm ? (
        <div className="rounded-lg border border-dashed border-border p-6 text-center">
          <Cpu className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">{t("customers.asset.noAsset")}</p>
          {canManage && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 text-sm text-primary hover:underline"
            >
              {t("customers.asset.add")}
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {initialAssets.map((asset) => (
            <AssetCard
              key={asset.id}
              asset={asset}
              customerId={customerId}
              canManage={canManage}
            />
          ))}
        </div>
      )}
    </div>
  );
}
