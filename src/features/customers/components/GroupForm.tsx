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
  group?: { id: string; name: string };
  onSaved?: () => void;
}

export function GroupForm({ group, onSaved }: GroupFormProps) {
  const { t } = useAppI18n();
  const router = useRouter();
  const isEdit = !!group;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCustomerGroupInput>({
    resolver: zodResolver(createCustomerGroupSchema),
    defaultValues: { name: group?.name ?? "" },
  });

  async function onSubmit(data: CreateCustomerGroupInput) {
    if (isEdit) {
      const result = await updateCustomerGroup(group!.id, data);
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
    onSaved?.();
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          {t("customers.groupName") || "Nom du groupe"}
        </label>
        <input
          {...register("name")}
          autoFocus
          placeholder={t("customers.groupNamePlaceholder") || "Ex: Professionnels, Particuliers..."}
          className={cn(
            "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-all duration-200",
            "placeholder:text-muted-foreground/60",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            errors.name && "border-destructive"
          )}
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="flex items-center gap-2 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-xs)] hover:brightness-110 active:scale-95 disabled:opacity-50 transition-all duration-200"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isEdit ? (t("common.save") || "Enregistrer") : (t("common.create") || "Créer")}
        </button>
      </div>
    </form>
  );
}
