export default function Grid({
  className,
  children,
  cols = 3,
}: {
  className?: string;
  children: React.ReactNode;
  cols?: number;
}) {
  const getCols = () => {
    switch (cols) {
      case 2: {
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      }
      case 3: {
        return "grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
      }
      case 4: {
        return "grid-cols-4 md:grid-cols-5 lg:grid-cols-6";
      }
      case 5: {
        return "grid-cols-5 md:grid-cols-6 lg:grid-cols-7";
      }
    }
  };
  return (
    <ul className={`${className ?? ""} grid ${getCols()} gap-3`}>{children}</ul>
  );
}
