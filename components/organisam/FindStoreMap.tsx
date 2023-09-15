"use client";
import {
  Marker,
  NaverMap,
  NavermapsProvider,
  useNavermaps,
  Container as MapDiv,
} from "react-naver-maps";

export default function FindStoreMap() {
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <NaverMap
        defaultCenter={
          new navermaps.LatLng(35.165925058960156, 129.13201471874677)
        }
        defaultZoom={15}
      >
        {/* ------------ fetch by api or data ------------ */}
        <Marker
          defaultPosition={
            new navermaps.LatLng(35.165925058960156, 129.13201471874677)
          }
          icon={{
            content: `<a class="map_marker"><img src="${"/images/marker_shinsegae.png"}" /></a>`,
          }}
        />
      </NaverMap>
    </MapDiv>
  );
}
