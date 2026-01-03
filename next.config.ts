import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 👇 هذا السطر يحل مشكلة التحذير (Allows quality={60})
    // نضيف 60 (للخلفيات)، 75 (الافتراضي)، و 80-90 (للصور عالية الوضوح)
    qualities: [60, 75, 85, 90],
    
    // (اختياري) لضمان أفضل ضغط ممكن للصور
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;