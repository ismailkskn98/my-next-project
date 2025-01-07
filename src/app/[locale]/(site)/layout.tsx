import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Particles from "@/components/ui/particles";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="gridContainer align-center font-tajaval relative z-0 h-full min-h-screen w-full space-y-5 overflow-x-hidden bg-mainLayoutBg">
      <Particles
        className="fluid absolute inset-0 z-10"
        quantity={200}
        ease={40}
        color="#fff"
        refresh
        staticity={50}
      />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
