import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Particles from "@/components/ui/particles";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-full min-h-screen space-y-5 fluid gridContainer bg-mainLayoutBg overflow-x-hidden align-center">
      <Particles className="absolute inset-0 z-0 fluid" quantity={200} ease={40} color="#fff" refresh staticity={50} />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
