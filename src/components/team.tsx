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
    <main className="relative h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-visible">
        <Image
          src="/yellow.jpg"
          alt="Yellow disk on a yellow background."
          width={3000}
          height={2250}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-36 pt-52">
        <h2 className="font-fraunces text-[5rem] font-black tracking-[1rem] text-[#0948c7]">
          OUR TEAM
        </h2>

        <div className="flex h-fit w-3/4 flex-col items-center justify-center rounded-3xl bg-[#04bf6e]/80 p-4">
          <div className="flex px-20">
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
                  <span className="font-fraunces text-3xl font-bold text-[#bf0455]">
                    {data.name}
                  </span>
                  <span className="text-2xl font-semibold text-[#bf0455]">
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
