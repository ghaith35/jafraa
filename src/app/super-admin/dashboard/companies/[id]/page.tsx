import { notFound } from "next/navigation";
import { getCompany } from "@/features/super-admin/actions/companies.actions";
import { CompanyDetail } from "@/features/super-admin/components/CompanyDetail";

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const company = await getCompany(id);
  if (!company) notFound();

  return <CompanyDetail company={company} />;
}
