import { redirect } from "next/navigation";

export default function EditGroupRedirect() {
  redirect("/dashboard/customers");
}
