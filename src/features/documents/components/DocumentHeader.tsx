interface DocumentHeaderProps {
  store: {
    name: string;
    address: string | null;
    phone: string | null;
    email: string | null;
    logoUrl: string | null;
  };
  documentTitle: string;
  documentNumber: string;
  date: Date;
  customer?: {
    name: string;
    phone?: string | null;
  } | null;
}

export function DocumentHeader({
  store,
  documentTitle,
  documentNumber,
  date,
  customer,
}: DocumentHeaderProps) {
  return (
    <div className="space-y-6 border-b pb-8">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Store Info */}
        <div className="space-y-1">
          <h2 className="text-2xl font-black uppercase tracking-tight text-primary">
            {store.name}
          </h2>
          <div className="text-sm text-muted-foreground space-y-0.5">
            {store.address && <p>{store.address}</p>}
            {store.phone && <p>Tél : {store.phone}</p>}
            {store.email && <p>{store.email}</p>}
          </div>
        </div>

        {/* Document Meta */}
        <div className="text-left md:text-right space-y-1">
          <h1 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
            {documentTitle}
          </h1>
          <p className="text-2xl font-black font-mono">{documentNumber}</p>
          <p className="text-sm text-muted-foreground">
            Date : {new Date(date).toLocaleDateString("fr-FR", {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>

      {/* Customer Info if present */}
      {customer && (
        <div className="mt-8 pt-8 border-t border-dashed">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Facturé à</p>
          <p className="text-lg font-bold">{customer.name}</p>
          {customer.phone && <p className="text-sm text-muted-foreground">{customer.phone}</p>}
        </div>
      )}
    </div>
  );
}
