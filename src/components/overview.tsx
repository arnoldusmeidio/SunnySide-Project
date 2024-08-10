import Link from "next/link";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="grid grid-cols-1 lg:auto-cols-fr lg:grid-cols-2">
      <div className="card-style card-text bg-white max-lg:order-2">
        <h3 className="font-fraunces text-[3rem] font-bold leading-[2rem] max-sm:text-[2rem] min-[400px]:leading-[4rem]">
          Transform your brand
        </h3>
        <p className="text-xl font-medium text-dark-grayish-blue">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Link
          href={"/services"}
          className="w-fit border-b-8 border-dashed border-yellow font-fraunces font-bold"
        >
          LEARN MORE
        </Link>
      </div>

      <picture className="card-style overflow-hidden max-lg:order-1">
        <source
          media="(max-width:1025px)"
          srcSet="/mobile/image-transform.jpg"
        />
        <Image
          src="/desktop/image-transform.jpg"
          alt="White egg on a yellow background."
          className="relative top-[50%] w-full translate-y-[-50%] object-contain"
          width={720}
          height={600}
        />
      </picture>

      <picture className="card-style overflow-hidden max-lg:order-3">
        <source
          media="(max-width:1025px)"
          srcSet="/mobile/image-stand-out.jpg"
        />
        <Image
          src="/desktop/image-stand-out.jpg"
          alt="Pink glass on a pink background."
          className="relative top-[50%] w-full translate-y-[-50%] object-contain"
          width={720}
          height={600}
        />
      </picture>

      <div className="card-style card-text bg-white max-lg:order-4">
        <h3 className="font-fraunces text-[3rem] font-bold leading-[4rem] max-sm:text-[2rem]">
          Stand out to the right audience
        </h3>
        <p className="text-xl font-medium text-dark-grayish-blue">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, We'll build and extend
          your brand in digital places.
        </p>
        <Link
          href={"/services"}
          className="w-fit border-b-8 border-dashed border-soft-red font-fraunces font-bold"
        >
          LEARN MORE
        </Link>
      </div>

      <div className="card-style relative max-lg:order-5">
        <picture className="absolute -z-10 h-full w-full overflow-hidden">
          <source
            media="(max-width:1025px)"
            srcSet="/mobile/image-graphic-design.jpg"
          />
          <Image
            src="/desktop/image-graphic-design.jpg"
            alt="Two cherries on a light blue background"
            className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
            width={720}
            height={600}
          />
        </picture>
        <div className="card-response flex h-full flex-col items-center gap-3">
          <h4 className="text-center font-fraunces text-[2.5rem] font-bold leading-[4rem] text-desaturated-cyan">
            Graphic Design
          </h4>
          <p className="text-center text-xl font-medium text-desaturated-cyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className="card-style relative max-lg:order-6">
        <picture className="absolute -z-10 h-full w-full overflow-hidden">
          <source
            media="(max-width:1025px)"
            srcSet="/mobile/image-photography.jpg"
          />
          <Image
            src="/desktop/image-photography.jpg"
            alt="Orange on a blue background"
            className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
            width={720}
            height={600}
          />
        </picture>

        <div className="card-response flex h-full flex-col items-center gap-3">
          <h4 className="font-fraunces text-[2.5rem] font-bold leading-[4rem] text-dark-blue">
            Photography
          </h4>
          <p className="text-center text-xl font-medium text-dark-blue">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}
