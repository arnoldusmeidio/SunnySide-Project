import Image from "next/image";

export default function About() {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-visible">
        <Image
          src="/broken-white.jpg"
          alt="Three tube with broken white color on a cream background"
          width={3750}
          height={3000}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-36 pt-52">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-desaturated-blue">
          ABOUT US
        </h2>
        <div className="w-1/2 rounded-3xl bg-[#dbc7a7]/50">
          <p className="rounded-2xl border-4 border-desaturated-blue p-8 font-montserrat text-[2.5rem] font-medium leading-relaxed text-desaturated-blue">
            Founded 15 years ago on the simple idea of creating innovative
            full-service creative agency that can elevate everybody's business
            through extra ordinary visuals.
          </p>
        </div>
      </div>
    </main>
  );
}
