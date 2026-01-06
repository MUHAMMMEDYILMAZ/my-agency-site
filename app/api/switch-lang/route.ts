// app/api/switch-lang/route.ts
import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetLocale = searchParams.get('locale');
  const targetPath = searchParams.get('path');

  // إذا البيانات ناقصة، ارجع للصفحة الرئيسية
  if (!targetLocale || !targetPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 1. تحديث الكوكيز فوراً
  const cookieStore = await cookies(); // Next.js 15 needs await here
  cookieStore.set('NEXT_LOCALE', targetLocale);

  // 2. توجيه المستخدم للرابط الجديد باللغة الجديدة
  // نستبدل اللغة القديمة في الرابط بالجديدة
  // (هنا نفترض أن path يحتوي اللغة القديمة، سنقوم بذكاء باستبدالها)
  
  // طريقة بسيطة: إزالة أول جزء (اللغة القديمة) وإضافة الجديدة
  const segments = targetPath.split('/');
  // segments[0] is empty, segments[1] is the old locale (e.g., 'en')
  segments[1] = targetLocale; 
  const newPath = segments.join('/');

  return NextResponse.redirect(new URL(newPath, request.url));
}