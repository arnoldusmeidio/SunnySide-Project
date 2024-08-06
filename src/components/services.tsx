import Image from "next/image";

export default function Services() {
  return (
    <main className="relative min-h-screen w-full">
      {/* background image */}
      <div className="overflow-hide absolute -z-10 h-full w-full">
        <Image
          src="/banana-pink.jpg"
          alt="Yellow short tube with orange circle background"
          width={3000}
          height={2000}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-8 pt-20">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-cyan-800 max-sm:text-[4rem] max-[550px]:text-[3rem] max-[400px]:text-[2.5rem] max-[350px]:tracking-[0.25rem]">
          SERVICES
        </h2>

        <div className="rounded-3xl border-4 border-[#455831] bg-[#f9bac4]/70 max-md:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] 2xl:w-1/2">
          <p className="p-4 font-fraunces text-[2rem] font-medium leading-relaxed text-cyan-800 max-md:leading-normal max-[550px]:text-[1.5rem]">
            We offers a range of services from logo design, graphic design, to
            web design, in order to help your brands grow fast, and at a price
            that fits your budget.
          </p>
        </div>

        {/* Portfolio */}
        <div className="grid h-fit grid-cols-3 place-items-center content-start gap-y-8 rounded-3xl border-4 border-[#455831] bg-[#f9bac4]/60 py-8 max-[1920px]:mb-16 max-lg:grid-cols-1 max-md:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] 2xl:w-3/4">
          {/* Our portfolio */}
          <div className="col-span-3 max-lg:col-span-1">
            <h3 className="text-center font-fraunces text-[2.5rem] font-black tracking-widest text-cyan-800 max-[400px]:text-[2rem] lg:tracking-[0.5rem]">
              OUR PORTFOLIO
            </h3>
          </div>

          {/* Logo Design */}
          <div className="services-card lg:border-r-4">
            <div className="">
              <h4 className="services-card-text">Logo Design</h4>
            </div>
            <div className="h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/logo/rocket-golf-logo.jpg"
                alt="Thumbnail of Rocket Golf logo."
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={800}
                height={245}
              />
            </div>
          </div>

          {/* Graphic Design */}
          <div className="services-card">
            <div className="">
              <h4 className="services-card-text">Graphic Design</h4>
            </div>
            <div className="h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/poster/palm-tree-poster.jpg"
                alt="Thumbnail of a poster of palm trees"
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={4268}
                height={5136}
              />
            </div>
          </div>

          {/* Web Design */}
          <div className="services-card lg:border-l-4">
            <div className="">
              <h4 className="services-card-text">Web Design</h4>
            </div>
            <div className="h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/web-design/shortly-design.jpg"
                alt="Thumbnail of shortly web design."
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={900}
                height={660}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
