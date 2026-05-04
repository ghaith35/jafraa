import { cn } from "@/lib/utils";

interface DocumentTableProps {
  columns: {
    header: string;
    key: string;
    align?: "left" | "center" | "right";
    className?: string;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  className?: string;
}

export function DocumentTable({ columns, data, className }: DocumentTableProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/20">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-4 py-3 font-bold uppercase tracking-wider text-muted-foreground",
                  col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left",
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr key={idx} className="print:break-inside-avoid">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-4 py-4",
                    col.align === "center" ? "text-center" : col.align === "right" ? "text-right" : "text-left",
                    col.className
                  )}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface MoneySummaryProps {
  rows: {
    label: string;
    value: number | string;
    bold?: boolean;
    className?: string;
  }[];
}

export function MoneySummary({ rows }: MoneySummaryProps) {
  return (
    <div className="flex justify-end pt-8">
      <div className="w-full max-w-[300px] space-y-2">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={cn(
              "flex justify-between text-sm",
              row.bold ? "text-lg font-black pt-2 border-t mt-2" : "text-muted-foreground",
              row.className
            )}
          >
            <span>{row.label}</span>
            <span>
              {typeof row.value === "number" ? `${row.value.toFixed(2)} DZD` : row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
