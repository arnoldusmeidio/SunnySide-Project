import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full">
        <Image
          src="/desktop/image-header.jpg"
          alt=""
          className="h-screen w-full object-cover object-bottom"
          width={2880}
          height={1600}
        />
      </div>
      <div className="flex h-full flex-col items-center gap-44 pt-52">
        <span className="font-fraunces text-[5rem] font-black tracking-[1rem] text-white">
          WE ARE CREATIVES
        </span>
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
    </header>
  );
}
