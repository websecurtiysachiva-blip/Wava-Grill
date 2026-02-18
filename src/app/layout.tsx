import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
  
export const metadata = {
  title: "WaBa Grill",
  description: "Authentic New York Style Halal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black m-0 p-0">
        <Navbar />
        <main className="m-0 p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
