"use client";

import { useState } from "react";
import { Plus, Cpu } from "lucide-react";
import { AssetCard } from "./AssetCard";
import { AssetForm } from "./AssetForm";

interface Asset {
  id: string;
  deviceTypeName: string | null;
  customBrand: string | null;
  customModel: string | null;
  color: string | null;
  storage: string | null;
  imeiSerial: string | null;
  notes: string | null;
}

interface Props {
  customerId: string;
  initialAssets: Asset[];
  canManage: boolean;
}

export function AssetSection({ customerId, initialAssets, canManage }: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-semibold text-foreground">
            Appareils ({initialAssets.length})
          </h2>
        </div>
        {canManage && !showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-primary border border-primary/40 hover:bg-primary/10 transition-colors"
          >
            <Plus className="h-3.5 w-3.5" />
            Ajouter un appareil
          </button>
        )}
      </div>

      {/* Form */}
      {showForm && (
        <AssetForm
          customerId={customerId}
          onSuccess={() => setShowForm(false)}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Asset list */}
      {initialAssets.length === 0 && !showForm ? (
        <div className="rounded-lg border border-dashed border-border p-6 text-center">
          <Cpu className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Aucun appareil enregistré</p>
          {canManage && (
            <button
              onClick={() => setShowForm(true)}
              className="mt-3 text-sm text-primary hover:underline"
            >
              Ajouter un appareil
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
