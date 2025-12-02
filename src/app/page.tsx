import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { getPreferredLocale } from "@/lib/i18n";

export default function Page() {
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value;
  const acceptLanguage = headers().get("accept-language");
  const locale = getPreferredLocale(cookieLocale, acceptLanguage);

  redirect(`/${locale}`);
}
