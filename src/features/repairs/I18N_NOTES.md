# Repairs i18n notes

This feature now reads the locale from the app-level `next-intl` provider.

- The single source of truth is the global language selector in `src/components/layout/LanguageSwitcher.tsx`.
- The old repair-level language selector is kept as a no-op compatibility component, so it does not render a second selector or write to `localStorage`.
- French, English, and Arabic translations live in `src/features/repairs/i18n.ts`.
- Arabic uses RTL through the global `<html dir="rtl">` and the hook-provided `dir` value.

If you add new repair UI strings, add them to all three dictionaries in `i18n.ts`.
