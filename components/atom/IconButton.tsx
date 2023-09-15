import Image from "next/image";

export default function IconButton({
  className,
  name,
  src,
  onClick,
}: {
  className?: string;
  name?: string;
  src: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`${className ?? ""} relative w-full h-full`}
      onClick={onClick}
    >
      <Image src={src} alt={`${name}_icon`} fill />
      <span className="hidden">{name}</span>
    </button>
  );
}
