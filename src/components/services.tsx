import Image from "next/image";

export default function Services() {
  return (
    <main className="relative h-screen w-full">
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
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-cyan-800">
          SERVICES
        </h2>

        <div className="w-1/2 rounded-3xl border-4 border-[#455831] bg-[#f9bac4]/70">
          <p className="p-4 font-fraunces text-[2rem] font-medium leading-relaxed text-cyan-800">
            We offers a range of services from logo design, graphic design, to
            web design, in order to help your brands grow fast, and at a price
            that fits your budget.
          </p>
        </div>

        {/* Portfolio */}
        <div className="grid h-fit w-3/4 grid-cols-3 place-items-center content-start gap-y-8 rounded-3xl border-4 border-[#455831] bg-[#f9bac4]/60 py-8">
          {/* Our portfolio */}
          <div className="col-span-3">
            <h3 className="font-fraunces text-[2.5rem] font-black tracking-[0.5rem] text-cyan-800">
              OUR PORTFOLIO
            </h3>
          </div>

          {/* Logo Design */}
          <div className="relative flex h-[300px] w-full justify-center overflow-hidden border-r-4 border-[#455831]">
            <div className="absolute h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/logo/rocket-golf-logo.jpg"
                alt="Thumbnail of Rocket Golf logo."
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={800}
                height={245}
              />
            </div>

            <div className="z-10 mt-3 flex h-fit flex-col rounded-xl border bg-slate-300/50 p-3">
              <h4 className="font-fraunces text-[2.5rem] font-bold text-cyan-800">
                Logo Design
              </h4>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="relative flex h-[300px] w-full justify-center overflow-hidden border-[#455831]">
            <div className="absolute h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/poster/palm-tree-poster.jpg"
                alt="Thumbnail of a poster of palm trees"
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={4268}
                height={5136}
              />
            </div>

            <div className="z-10 mt-3 flex h-fit flex-col rounded-xl border bg-slate-300/50 p-3">
              <h4 className="font-fraunces text-[2.5rem] font-bold text-cyan-800">
                Graphic Design
              </h4>
            </div>
          </div>

          {/* Web Design */}
          <div className="relative flex h-[300px] w-full justify-center overflow-hidden border-l-4 border-[#455831]">
            <div className="absolute h-full w-3/4 overflow-hidden rounded-xl border-4 border-[#455831]">
              <Image
                src="/web-design/shortly-design.jpg"
                alt="Thumbnail of shortly web design."
                className="relative top-[50%] h-full w-full translate-y-[-50%] object-cover"
                width={900}
                height={660}
              />
            </div>

            <div className="z-10 mt-3 flex h-fit flex-col rounded-xl border bg-slate-300/50 p-3">
              <h4 className="font-fraunces text-[2.5rem] font-bold text-cyan-800">
                Web Design
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
