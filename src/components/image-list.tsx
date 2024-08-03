import Image from "next/image";

export default function ImageList() {
  const footerImage = [
    {
      src: "/desktop/image-gallery-milkbottles.jpg",
      alt: "3 white milk bottle with red cap on a blue background with white cloud above it.",
    },
    {
      src: "/desktop/image-gallery-orange.jpg",
      alt: "Half cut orange on top of white plate and on top of blue plate on an orange background.",
    },
    {
      src: "/desktop/image-gallery-cone.jpg",
      alt: "Waffle cone without ice cream on blue background.",
    },
    {
      src: "/desktop/image-gallery-sugarcubes.jpg",
      alt: "Sugar cubes stack on top of each other on a soft red background.",
    },
  ];

  return (
    <section className="grid auto-cols-fr grid-cols-4">
      {footerImage.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={image.src}
            width={720}
            height={894}
            className="width-auto height-auto"
          />
        </div>
      ))}
    </section>
  );
}
