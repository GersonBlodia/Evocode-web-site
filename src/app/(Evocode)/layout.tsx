import { HeaderComponent } from "@/Components/header/HeaderComponent";

 
 
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
        <footer>desde footer</footer>
      </body>
    </html>
  );
}
