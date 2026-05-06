import { PublicRepairTracker } from "@/features/repairs/components/PublicRepairTracker";

export const metadata = { title: "Suivi réparation" };

export default function TrackRepairPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <PublicRepairTracker />
    </main>
  );
}
