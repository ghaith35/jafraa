"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import {
  createCustomerGroupSchema,
  type CreateCustomerGroupInput,
} from "../schemas/customer-group.schema";
import { createCustomerGroup, updateCustomerGroup } from "../actions/customer-group.actions";

interface GroupFormProps {
  defaultValues?: {
    id: string;
    name: string;
    debtAlertLimit: number | null;
    defaultDiscountPercent: number;
    sellingPrice: number | null;
  };
}

export function GroupForm({ defaultValues }: GroupFormProps) {
  const { t } = useAppI18n();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCustomerGroupInput>({
    resolver: zodResolver(createCustomerGroupSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      debtAlertLimit: defaultValues?.debtAlertLimit ?? undefined,
      defaultDiscountPercent: defaultValues?.defaultDiscountPercent ?? 0,
      sellingPrice: defaultValues?.sellingPrice ?? undefined,
    },
  });

  async function onSubmit(data: CreateCustomerGroupInput) {
    if (defaultValues) {
      const result = await updateCustomerGroup(defaultValues.id, data);
      if (result && "error" in result) {
        alert(result.error);
        return;
      }
    } else {
      const result = await createCustomerGroup(data);
      if (result && "error" in result) {
        alert(result.error);
        return;
      }
    }
    router.push("/dashboard/customers/groups");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium">{t("customers.groupName")}</label>
        <input
          {...register("name")}
          className={cn(
            "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors",
            "focus:border-primary focus:ring-1 focus:ring-primary",
            errors.name && "border-destructive"
          )}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">{t("customers.groupSellingPrice")}</label>
        <input
          {...register("sellingPrice", { valueAsNumber: true })}
          type="number"
          min={0}
          step={1}
          className={cn(
            "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors",
            "focus:border-primary focus:ring-1 focus:ring-primary"
          )}
        />
        <p className="mt-1 text-[11px] text-muted-foreground">{t("customers.groupSellingPriceHint")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">{t("customers.debtAlertLimit")}</label>
          <input
            {...register("debtAlertLimit", { valueAsNumber: true })}
            type="number"
            min={0}
            step={1}
            className={cn(
              "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors",
              "focus:border-primary focus:ring-1 focus:ring-primary"
            )}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">{t("customers.defaultDiscountPercent")}</label>
          <input
            {...register("defaultDiscountPercent", { valueAsNumber: true })}
            type="number"
            min={0}
            max={100}
            step={0.5}
            className={cn(
              "w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition-colors",
              "focus:border-primary focus:ring-1 focus:ring-primary"
            )}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {defaultValues ? t("customers.editGroup") : t("customers.newGroup")}
        </button>
        <button
          type="button"
          onClick={() => router.push("/dashboard/customers/groups")}
          className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("customers.cancel")}
        </button>
      </div>
    </form>
  );
}
