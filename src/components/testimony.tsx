import Image from "next/image";

export default function Testimony() {
  const testimony = [
    {
      profilePicture: "/image-emily.jpg",
      name: "Emily R.",
      position: "Marketing Director",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
      profilePicture: "/image-thomas.jpg",
      name: "Thomas S.",
      position: "Chief Operating Officer",
      text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    },
    {
      profilePicture: "/image-jennie.jpg",
      name: "Jennie F.",
      position: "Business Owner",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    },
  ];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-24 max-lg:h-fit">
      <h4 className="font-fraunces text-2xl font-bold tracking-[0.5rem] text-grayish-blue max-lg:pt-10">
        CLIENT TESTIMONIALS
      </h4>

      <div className="flex px-20 max-lg:flex-col">
        {testimony.map((data, index) => (
          <div key={index} className="flex flex-col items-center gap-20 p-8">
            <div className="overflow-hidden rounded-full">
              <Image
                src={data.profilePicture}
                alt="Profile picture"
                width={144}
                height={144}
                className="width-auto height-auto"
              />
            </div>
            <p className="text-center text-2xl font-medium text-dark-grayish-blue">
              {data.text}
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="font-fraunces text-2xl font-bold">
                {data.name}
              </span>
              <span className="text-xl font-semibold text-grayish-blue">
                {data.position}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
