import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. تفعيل الوضع الصارم لضمان جودة الكود
  reactStrictMode: true,

  // 2. تحسين استيراد المكتبات الثقيلة (يقلل حجم الـ JS)
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // 3. إعدادات الصور
  images: {
    formats: ['image/avif', 'image/webp'],
    // إذا كنت ستستخدم صوراً من روابط خارجية، أضف النطاقات هنا
    // remotePatterns: [{ protocol: 'https', hostname: 'example.com' }],
  },

  // 4. إعدادات الأمان (Headers) - هذا الجزء الجديد لرفع تقييم Lighthouse
  async headers() {
    return [
      {
        source: '/:path*', // تطبيق هذه القواعد على جميع الصفحات
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // يمنع عرض موقعك داخل iframe في مواقع أخرى (حماية من Clickjacking)
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block' // حماية إضافية من هجمات XSS
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;