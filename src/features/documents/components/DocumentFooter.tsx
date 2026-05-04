interface DocumentFooterProps {
  note?: string | null;
  warrantyInfo?: string | null;
  showBranding?: boolean;
}

export function DocumentFooter({ note, warrantyInfo, showBranding = true }: DocumentFooterProps) {
  return (
    <div className="mt-12 space-y-8 border-t pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Notes/Warranty */}
        <div className="space-y-4">
          {note && (
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Notes</p>
              <p className="text-sm text-foreground whitespace-pre-wrap">{note}</p>
            </div>
          )}
          {warrantyInfo && (
            <div className="rounded-lg bg-muted/50 p-3 border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Garantie</p>
              <p className="text-xs text-foreground italic">{warrantyInfo}</p>
            </div>
          )}
        </div>

        {/* Signature Area */}
        <div className="flex flex-col items-end justify-end space-y-12">
          <div className="w-48 border-b border-muted-foreground/30 text-center pb-1">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Cachet et Signature</p>
          </div>
        </div>
      </div>

      {/* App Branding */}
      {showBranding && (
        <div className="text-center pt-8">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            Document généré par <span className="font-bold text-primary">REPAIRE</span>
          </p>
        </div>
      )}
    </div>
  );
}
