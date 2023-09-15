"use client";
import { NavermapsProvider } from "react-naver-maps";
import FindStoreMap from "./FindStoreMap";

export default function SsgStoreMap() {
  return (
    <NavermapsProvider ncpClientId="qaj1cxrqrq">
      <FindStoreMap />
    </NavermapsProvider>
  );
}
