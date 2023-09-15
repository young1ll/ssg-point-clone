"use client";

import { useAppContext } from "@/provider/AppContextProvider";

export default function TabPannel({
  className,
  id,
  label,
  title,
  children,
}: {
  className?: string;
  id: string;
  label: string;
  title?: string;
  children: React.ReactNode;
}) {
  const { appValueList } = useAppContext();
  if (appValueList[id] === label)
    return (
      <div className={`${className} p-5`}>
        {title && <h3>{title}</h3>}
        {children}
      </div>
    );
}
