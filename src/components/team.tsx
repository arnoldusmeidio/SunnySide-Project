import Image from "next/image";

export default function Team() {
  const testimony = [
    {
      profilePicture: "/teams/1.png",
      name: "John D.",
      position: "Product Executive",
    },
    {
      profilePicture: "/teams/2.png",
      name: "Angelie S.",
      position: "Designer",
    },
    {
      profilePicture: "/teams/3.png",
      name: "Jennie F.",
      position: "Copywriter",
    },
    {
      profilePicture: "/teams/4.png",
      name: "David K.",
      position: "Web Developer",
    },
  ];

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-visible">
        <Image
          src="/yellow.jpg"
          alt="Yellow disk on a yellow background."
          width={3000}
          height={2250}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-20 pt-36">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-[#0948c7] max-sm:text-[4rem] max-sm:tracking-[0.5rem] max-[550px]:text-[3rem] max-[400px]:text-[2.5rem] max-[350px]:tracking-[0.25rem]">
          OUR TEAM
        </h2>

        <div className="h-fit w-3/4 rounded-3xl bg-[#04bf6e]/80 p-4 max-[1920px]:mb-16">
          <div className="px-6 max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 lg:flex 2xl:px-20">
            {testimony.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-8 p-8">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={data.profilePicture}
                    alt="Profile picture"
                    width={500}
                    height={499}
                    className="width-auto height-auto"
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-fraunces font-bold text-[#bf0455] max-lg:text-3xl max-[400px]:text-lg lg:text-xl xl:text-3xl">
                    {data.name}
                  </span>
                  <span className="text- text-center font-semibold text-[#bf0455] max-lg:text-xl max-[400px]:text-base lg:text-xl xl:text-lg">
                    {data.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
