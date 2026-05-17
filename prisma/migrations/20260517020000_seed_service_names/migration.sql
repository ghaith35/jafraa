-- Backfill missing EN/AR names for demo services
UPDATE "services" SET "nameEn" = 'Diagnostic',                  "nameAr" = 'تشخيص'                    WHERE "sku" = 'SRV-DEMO-DIAG'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Screen replacement (labor)',  "nameAr" = 'تغيير الشاشة (أجرة)'      WHERE "sku" = 'SRV-DEMO-ECRAN' AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Battery replacement (labor)', "nameAr" = 'تغيير البطارية (أجرة)'    WHERE "sku" = 'SRV-DEMO-BATT'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Charging port repair',        "nameAr" = 'إصلاح منفذ الشحن'         WHERE "sku" = 'SRV-DEMO-PORT'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Software installation',       "nameAr" = 'تثبيت البرامج'             WHERE "sku" = 'SRV-DEMO-SOFT'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Cleaning / dust removal',     "nameAr" = 'تنظيف / إزالة الغبار'     WHERE "sku" = 'SRV-DEMO-NETT'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Data backup',                 "nameAr" = 'نسخ احتياطي للبيانات'     WHERE "sku" = 'SRV-DEMO-SAVE'  AND ("nameEn" IS NULL OR "nameAr" IS NULL);
UPDATE "services" SET "nameEn" = 'Printer maintenance',         "nameAr" = 'صيانة الطابعة'            WHERE "sku" = 'SRV-DEMO-PRINT' AND ("nameEn" IS NULL OR "nameAr" IS NULL);
