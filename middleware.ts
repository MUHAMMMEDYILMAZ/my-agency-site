// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. استثناء الملفات
  if (pathname.startsWith('/_next') || pathname.includes('/api/') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // 2. التحقق من اللغة في الرابط
  const localeInUrl = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 🔥 المنطق الجديد: فرض لغة الكوكيز
  // إذا في لغة في الرابط، وفي لغة في الكوكيز، وهم مختلفين
  if (localeInUrl && cookieLocale && localeInUrl !== cookieLocale) {
    // تأكد إن لغة الكوكيز صحيحة ومسموحة
    if ((i18n.locales as readonly string[]).includes(cookieLocale)) {
      const newUrl = request.nextUrl.clone();
      // استبدل لغة الرابط بلغة الكوكيز
      newUrl.pathname = pathname.replace(`/${localeInUrl}`, `/${cookieLocale}`);
      return NextResponse.redirect(newUrl);
    }
  }

  // 3. إذا ما في لغة بالرابط أصلاً
  if (!localeInUrl) {
    const locale = cookieLocale || i18n.defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};