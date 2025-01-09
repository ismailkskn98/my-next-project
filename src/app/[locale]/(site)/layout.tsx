import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Particles from "@/components/ui/particles";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fluid absolute inset-0 -z-20 bg-[#000] bg-cover bg-center bg-no-repeat"></div>
      <Toaster position="top-center" />
      <Particles
        className="fluid absolute inset-0 -z-10"
        quantity={200}
        ease={40}
        color="#FFD700"
        refresh
        staticity={50}
      />
      <main className="fluid gridContainer mb-4 h-full w-full font-tajaval">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
