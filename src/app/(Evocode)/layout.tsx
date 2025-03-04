// import { HeaderComponent } from "@/Components/header/HeaderComponent";
import { FooterComponent } from "@/Components/footer/FooterComponent";
import NavbarComponent from "@/Components/navbar/NavbarComponent";

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
        <NavbarComponent/>
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
