import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 👇 ضع رابط موقعك الحقيقي هنا (أو استخدم متغير البيئة كما في الكود)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://my-agency-site-red.vercel.app';

  // 1. قائمة اللغات المدعومة في موقعك
  const languages = ['ar', 'en'];

  // 2. قائمة الصفحات الموجودة في الموقع
  const routes = [
    '',          // الصفحة الرئيسية
    '/about',    // من نحن
    '/services', // خدماتنا
    '/contact',  // تواصل معنا
    // أضف أي صفحة أخرى هنا، مثلاً: '/portfolio'
  ];

  // 3. دالة لدمج اللغات مع الصفحات وتوليد الروابط
  const sitemapEntries = languages.flatMap((lang) => {
    return routes.map((route) => {
      // تحديد الأولوية: الصفحة الرئيسية 1.0، الباقي 0.8
      const priority = route === '' ? 1 : 0.8;
      
      return {
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const, // جوجل سيفهم أن المحتوى يتغير أسبوعياً
        priority: priority,
      };
    });
  });

  // 4. (اختياري) إضافة الرابط الرئيسي Domain Root
  // مفيد إذا كان موقعك يقوم بالتحويل التلقائي للغة
  const rootEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1,
  };

  return [rootEntry, ...sitemapEntries];
}