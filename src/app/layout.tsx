import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.scss";

export const metadata = {
  title: "Carlos Estrada",
  description: "Carlos Estrada's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="root-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
