import Image from "next/image";

export default function About() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/broken-white.jpg"
          alt="Three tube with broken white color on a cream background"
          width={3750}
          height={3000}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-28 pt-52 max-[1920px]:gap-20 max-2xl:pt-36">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-desaturated-blue max-sm:text-[4rem] max-[550px]:text-[3rem] max-[400px]:text-[2.5rem] max-[350px]:tracking-[0.25rem]">
          ABOUT US
        </h2>
        <div className="rounded-3xl bg-[#dbc7a7]/50 max-md:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] 2xl:w-1/2">
          <p className="rounded-2xl border-4 border-desaturated-blue p-8 font-montserrat text-[2.5rem] font-medium leading-relaxed text-desaturated-blue max-md:leading-normal max-sm:text-[2rem] max-[550px]:text-[1.5rem]">
            Founded 15 years ago on the simple idea of creating innovative
            full-service creative agency that can elevate everybody's business
            through extra ordinary visuals.
          </p>
        </div>
      </div>
    </main>
  );
}
