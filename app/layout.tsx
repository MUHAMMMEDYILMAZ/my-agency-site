import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; 
  // نحن نسمح لـ app/[lang]/layout.tsx أن يتعامل مع <html> و <body> و SEO
}
