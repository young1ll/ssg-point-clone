/**
 * @param type "collapse"를 사용하기 전 CollapseBox를 고려하시요.
 */
export default function Button({
  id,
  className,
  type = "basic",
  bgColor = "white",
  open,
  onClick,
  children,
  disabled = false,
}: {
  id?: string;
  className?: string;
  type?: "basic" | "simple";
  bgColor?: "primary" | "pink" | "black" | "white";
  open?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const bgProvider = () => {
    switch (bgColor) {
      case "primary":
        return "bg-gradient-primary";
      case "pink":
        return "bg-[#ea035c] text-white";
      case "black":
        return "bg-black text-white";
      case "white":
        return "bg-white border border-[#bcbcbc]";
    }
  };

  switch (type) {
    case "simple": {
      return (
        <button
          id={id}
          className={`${
            bgProvider() + " " + className
          } flex gap-x-1 items-center border-0`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }

    case "basic": {
      return (
        <button
          id={id}
          className={`${
            bgProvider() + " " + className
          } block text-center text-sm leading-6 font-bold box-border rounded-lg
      w-full h-12`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
    }
  }
}
