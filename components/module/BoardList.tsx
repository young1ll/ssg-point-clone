import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function BoardList({
  title,
  url,
  date,
  children,
}: {
  title?: React.ReactNode;
  url?: Url;
  date?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <li className="flex justify-between gap-x-2 py-4 px-5 border-b hover:bg-slate-50 hover:font-medium transition-all duration-100">
      <Link
        className="w-full text-ellipsis overflow-hidden whitespace-nowrap"
        href={url ?? ""}
      >
        <p className="text-sm">{title}</p>
        {children}
        <p className="text-[11px] text-gray-500 pt-1">{date}</p>
      </Link>
    </li>
  );
}
