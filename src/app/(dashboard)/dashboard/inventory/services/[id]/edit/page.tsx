import { redirect } from "next/navigation";
export default async function OldInventoryEditServicePage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; redirect(`/dashboard/services/${id}/edit`); }
