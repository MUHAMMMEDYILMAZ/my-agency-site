import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// NEXT 13+ dynamic params = PROMISE
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // MUST AWAIT PARAMS
  const { lang } = await params;

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
