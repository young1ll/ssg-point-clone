export default function Subtitle({
  className,
  type = "small",
  children,
}: {
  className?: string;
  type?: "small" | "__html";
  children: React.ReactNode;
}) {
  switch (type) {
    case "small": {
      return (
        <p
          className={`${className ?? ""} ${
            type == "small" && "text-xs"
          } text-gray-500 pt-5`}
        >
          {children}
        </p>
      );
    }
    case "__html": {
      return (
        <p
          className={`${className ?? ""} text-xs"
          text-gray-500 pt-5`}
          dangerouslySetInnerHTML={{ __html: children as string }}
        />
      );
    }
  }
}
