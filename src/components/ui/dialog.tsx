"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onClose, title, description, children, className }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = useCallback(() => {
    dialogRef.current?.close();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (open && !el.open) {
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    el.addEventListener("cancel", handleCancel);
    el.addEventListener("keydown", handleKeyDown);
    return () => {
      el.removeEventListener("cancel", handleCancel);
      el.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "backdrop:bg-black/40 backdrop:backdrop-blur-sm",
        "m-auto w-full max-w-md rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl p-0 shadow-[var(--shadow-lg)]",
        "open:animate-in open:fade-in-0 open:zoom-in-95",
        "max-h-[85vh] overflow-y-auto",
        className
      )}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
    >
      {(title || description) && (
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div className="flex flex-col gap-1">
            {title && (
              <h2 className="text-[15px] font-semibold text-foreground">{title}</h2>
            )}
            {description && (
              <p className="text-[13px] text-muted-foreground">{description}</p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
    </dialog>
  );
}
