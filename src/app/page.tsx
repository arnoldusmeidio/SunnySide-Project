import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import Overview from "@/components/overview";
import Testimony from "@/components/testimony";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Overview />
      <Testimony />
      <Footer />
    </main>
  );
}
