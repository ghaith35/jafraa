"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageSquare, RefreshCw, QrCode, Power, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  getWhatsAppConnectionInfo, 
  connectWhatsApp, 
  disconnectWhatsApp,
  testWhatsAppMessage
} from "../actions/whatsapp.actions";

export function WhatsAppManager() {
  const [status, setStatus] = useState<string>("disconnected");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPolling, setIsPolling] = useState(false);
  const [testPhone, setTestPhone] = useState("");
  const [testStatus, setTestStatus] = useState<{ success?: boolean; error?: string } | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const info = await getWhatsAppConnectionInfo();
      setStatus(info.status);
      setQrCode(info.qrCode);
      
      // Stop polling if connected
      if (info.status === "connected") {
        setIsPolling(false);
      }
    } catch (err) {
      console.error("Failed to fetch WhatsApp status", err);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await fetchStatus();
    };
    init();
    
    let interval: NodeJS.Timeout;
    if (isPolling || status === "pairing") {
      interval = setInterval(fetchStatus, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPolling, status, fetchStatus]);

  const handleConnect = async () => {
    setIsLoading(true);
    await connectWhatsApp();
    setIsPolling(true);
    setIsLoading(false);
  };

  const handleDisconnect = async () => {
    if (!confirm("Êtes-vous sûr de vouloir déconnecter WhatsApp ?")) return;
    setIsLoading(true);
    await disconnectWhatsApp();
    setStatus("disconnected");
    setQrCode(null);
    setIsLoading(false);
  };

  const handleTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setTestStatus(null);
    const res = await testWhatsAppMessage(testPhone);
    setTestStatus(res);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Status Card */}
        <div className="md:col-span-1 rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center">
          <div className={cn(
            "h-16 w-16 rounded-full flex items-center justify-center mb-4 transition-all",
            status === "connected" ? "bg-emerald-100 text-emerald-600 scale-110" : 
            status === "pairing" ? "bg-amber-100 text-amber-600 animate-pulse" :
            "bg-muted text-muted-foreground"
          )}>
            <MessageSquare className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg">Statut</h3>
          <p className={cn(
            "text-sm font-medium mt-1 uppercase tracking-wider",
            status === "connected" ? "text-emerald-600" : 
            status === "pairing" ? "text-amber-600" :
            "text-muted-foreground"
          )}>
            {status === "connected" ? "Connecté" : 
             status === "pairing" ? "En attente du scan..." : 
             "Déconnecté"}
          </p>
          
          <button 
            onClick={status === "connected" ? handleDisconnect : handleConnect}
            disabled={isLoading}
            className={cn(
              "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors shadow-sm",
              status === "connected" 
                ? "bg-muted text-foreground hover:bg-destructive hover:text-destructive-foreground" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : status === "connected" ? (
              <><Power className="h-4 w-4" /> Déconnecter</>
            ) : (
              <><RefreshCw className="h-4 w-4" /> {status === "pairing" ? "Actualiser" : "Connecter"}</>
            )}
          </button>
        </div>

        {/* Action/QR Area */}
        <div className="md:col-span-2 rounded-xl border border-border bg-card p-8 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          {status === "disconnected" && (
            <div className="text-center space-y-4">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <QrCode className="h-6 w-6" />
              </div>
              <h4 className="font-bold">Pairage Requis</h4>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                Cliquez sur le bouton pour générer un code QR et scanner avec votre application WhatsApp.
              </p>
            </div>
          )}

          {status === "pairing" && qrCode ? (
            <div className="text-center space-y-6">
              <h4 className="font-bold">Scannez le code QR</h4>
              <div className="bg-white p-4 rounded-lg shadow-md border border-border inline-block transition-transform hover:scale-105">
                <img src={qrCode} alt="WhatsApp QR Code" className="h-48 w-48" />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Ouvrez WhatsApp sur votre téléphone, allez dans Réglages {">"} Appareils connectés, et scannez ce code.
                </p>
                <div className="flex items-center justify-center gap-2 text-[10px] text-amber-600 font-bold uppercase tracking-tighter">
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  Mise à jour en temps réel...
                </div>
              </div>
            </div>
          ) : status === "pairing" && (
             <div className="flex flex-col items-center gap-4">
               <Loader2 className="h-12 w-12 animate-spin text-primary opacity-20" />
               <p className="text-sm text-muted-foreground animate-pulse">Initialisation de la session...</p>
             </div>
          )}

          {status === "connected" && (
            <div className="w-full max-w-sm space-y-6">
              <div className="text-center space-y-4">
                <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-emerald-600">Session Active</h4>
                <p className="text-sm text-muted-foreground">
                  Votre boutique est connectée et prête à envoyer des messages.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h5 className="text-xs font-bold uppercase text-muted-foreground mb-4">Envoyer un test</h5>
                <form onSubmit={handleTest} className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="N° de téléphone (ex: 0550...)" 
                    value={testPhone}
                    onChange={(e) => setTestPhone(e.target.value)}
                    className="flex-1 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button 
                    type="submit"
                    className="bg-primary text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
                {testStatus?.success && (
                  <p className="text-[10px] text-emerald-600 mt-2 font-medium italic">Message envoyé avec succès !</p>
                )}
                {testStatus?.error && (
                  <p className="text-[10px] text-destructive mt-2 font-medium italic">{testStatus.error}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
