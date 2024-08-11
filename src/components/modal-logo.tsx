import CarouselLogo from "./carousel-logo";

export default function ModalLogo({
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
      <div className="flex w-[80vw] flex-col items-center justify-center max-md:w-[90vw] max-sm:w-[100vw]">
        <CarouselLogo />
      </div>
    </button>
  );
}
