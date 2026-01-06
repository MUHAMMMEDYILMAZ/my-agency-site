import { redirect } from "next/navigation";
import { i18n } from "@/i18n-config"; // استدعي إعدادات اللغة

export default function RootPage() {
  // يوجه المستخدم للغة الافتراضية المحددة في ملف الإعدادات
  // هذا الكود يشتغل فقط إذا الميدلويير سمح للطلب بالوصول لهنا
  redirect(`/${i18n.defaultLocale}`);
}