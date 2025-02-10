
import TopBar from "@/components/header/TopBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <TopBar />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
  );
}
