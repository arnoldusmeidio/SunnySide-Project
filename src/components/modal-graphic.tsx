import CarouselGraphic from "./carousel-graphic";

export default function ModalGraphic({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target.id === "wrapper") onClose();
  };

  return (
    <button
      className="fixed inset-0 z-20 flex h-screen items-center justify-center bg-black/80 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex w-[50vw] flex-col items-center justify-center object-contain sm:w-[90vw] lg:w-[50vw]">
        <CarouselGraphic />
      </div>
    </button>
  );
}
