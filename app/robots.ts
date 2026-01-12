import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.codeauraweb.com';

  return {
    rules: {
      userAgent: '*', // السماح لجميع عناكب البحث (Google, Bing, etc)
      allow: '/',     // السماح بأرشفة جميع الصفحات
      disallow: [
        '/api/',      // ❌ منع أرشفة روابط الـ API
        '/admin/',    // ❌ منع أرشفة لوحة التحكم (إذا وجدت)
        '/dashboard/',// ❌ منع أرشفة لوحة المستخدمين
        '/_next/',    // ❌ منع ملفات النظام الداخلية
        '/private/',  // ❌ أي مجلد خاص
      ],
    },
    // رابط خريطة الموقع (مهم جداً للـ SEO)
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}