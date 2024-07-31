import Link from "next/link";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="grid auto-cols-fr grid-cols-2">
      <div className="card-style card-text">
        <h3 className="font-fraunces text-[3rem] font-bold leading-[4rem]">
          Transform your brand
        </h3>
        <p className="text-xl font-medium text-dark-grayish-blue">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link
          href={"/"}
          className="w-fit border-b-8 border-dashed border-yellow font-fraunces font-bold"
        >
          LEARN MORE
        </Link>
      </div>

      <div className="card-style overflow-hidden">
        <Image
          src="/desktop/image-transform.jpg"
          alt="White egg on a yellow background."
          className="relative top-[50%] w-full translate-y-[-50%] object-contain"
          width={720}
          height={600}
        />
      </div>

      <div className="card-style overflow-hidden">
        <Image
          src="/desktop/image-stand-out.jpg"
          alt="Pink glass on a pink background."
          className="relative top-[50%] w-full translate-y-[-50%] object-contain"
          width={720}
          height={600}
        />
      </div>

      <div className="card-style card-text">
        <h3 className="font-fraunces text-[3rem] font-bold leading-[4rem]">
          Stand out to the right audience
        </h3>
        <p className="text-xl font-medium text-dark-grayish-blue">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, We'll build and extend
          your brand in digital places.
        </p>
        <Link
          href={"/"}
          className="w-fit border-b-8 border-dashed border-soft-red font-fraunces font-bold"
        >
          LEARN MORE
        </Link>
      </div>

      <div className="card-style relative">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/desktop/image-graphic-design.jpg"
            alt="Two cherries on a light blue background"
            className="relative top-[50%] w-full translate-y-[-50%] object-contain"
            width={720}
            height={600}
          />
        </div>
        <div className="flex h-full flex-col items-center justify-end gap-5 px-64 pb-32">
          <h4 className="font-fraunces text-[2.5rem] font-bold leading-[4rem] text-desaturated-cyan">
            Graphic Design
          </h4>
          <p className="text-center text-xl font-medium text-desaturated-cyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className="card-style relative">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
          <Image
            src="/desktop/image-photography.jpg"
            alt="Orange on a blue background"
            className="relative top-[50%] w-full translate-y-[-50%] object-contain"
            width={720}
            height={600}
          />
        </div>
        <div className="flex h-full flex-col items-center justify-end gap-5 px-64 pb-32">
          <h4 className="text-dark-blue font-fraunces text-[2.5rem] font-bold leading-[4rem]">
            Photography
          </h4>
          <p className="text-dark-blue text-center text-xl font-medium">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}
