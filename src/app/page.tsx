import Hero from "@/components/hero";
import ImageList from "@/components/image-list";
import Overview from "@/components/overview";
import Testimony from "@/components/testimony";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <Testimony />
        <ImageList />
      </main>
    </>
  );
}
