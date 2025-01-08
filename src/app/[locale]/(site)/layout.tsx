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
    <main className="fluid gridContainer mb-4 h-full min-h-dvh w-full overflow-x-hidden font-tajaval">
      <div className="fluid absolute inset-0 z-[-1] bg-mainLayoutImage bg-cover bg-center bg-no-repeat opacity-45"></div>
      <div className="fluid absolute inset-0 -z-10 bg-mainLayoutBg bg-cover bg-center bg-no-repeat"></div>
      <Toaster position="top-center" />
      <Particles
        className="fluid absolute inset-0 z-0"
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
