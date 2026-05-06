export const dynamic = "force-dynamic";

import { getCompanyDetail } from "@/features/super-admin/actions/companies.actions";
import { notFound } from "next/navigation";
import { CompanyDetailView } from "./CompanyDetailView";

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = await getCompanyDetail(id);
  if (!company) notFound();

  return <CompanyDetailView company={company} />;
}
