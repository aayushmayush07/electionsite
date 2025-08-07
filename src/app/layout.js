import "./globals.css";
import AuthProvider from "../../components/AuthProvider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export const metadata = {
  title: 'Politician Name',
  description: 'Official website of …'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
         <Navbar/>
          <main className="flex-grow">{children}</main>
      <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
