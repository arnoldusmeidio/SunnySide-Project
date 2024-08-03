import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-hidden">
        <Image
          src="/desktop/image-header.jpg"
          alt="Half cut orange on a blue background"
          className="relative h-full w-full object-cover object-bottom"
          width={2880}
          height={1600}
        />
      </div>

      <div className="flex h-full flex-col items-center gap-44 pt-52">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-white">
          WE ARE CREATIVES
        </h2>
        <div className="w-14">
          <Image
            src="/icon-arrow-down.svg"
            alt=""
            className="w-full animate-bounce object-contain"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
