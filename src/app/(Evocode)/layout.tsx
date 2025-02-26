import { HeaderComponent } from "@/Components/header/HeaderComponent";
import { FooterComponent } from "@/Components/footer/FooterComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` `}
      >
        <HeaderComponent/>
        {children}
        <footer
        className={` `}
        >
          <FooterComponent/>
        </footer>
      </body>
    </html>
  );
}
