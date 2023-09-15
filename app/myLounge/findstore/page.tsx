import Button from "@/components/atom/Button";
import Dropdown from "@/components/atom/Dropdown";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import FindStoreMap from "@/components/organisam/FindStoreMap";
import SsgStoreMap from "@/components/organisam/SsgStoreMap";
import { NavermapsProvider } from "react-naver-maps";

export default function FindstorePage() {
  return (
    <>
      <Tabs className="mt-[36px]">
        <Tab id="findstoreTab" label="byMap" activeColor="benefits" initValue>
          지도로 찾기
        </Tab>
        <Tab id="findstoreTab" label="byLoc" activeColor="benefits">
          지역으로 찾기
        </Tab>
      </Tabs>

      <TabPannel id="findstoreTab" label="byMap">
        <SsgStoreMap />
      </TabPannel>

      <TabPannel className="mt-4" id="findstoreTab" label="byLoc">
        {/* --- Form --- */}
        <Dropdown
          className="h-12 w-full mb-2"
          border
          id="affili"
          options={[]}
        />
        <div className="flex gap-x-2 justify-between w-full">
          <Dropdown
            className="flex-1 h-12 w-full"
            wrapper="flex-1"
            border
            id="city"
            options={[]}
          />
          <Dropdown
            className="flex-1 h-12 w-full"
            wrapper="flex-1"
            border
            id="loc"
            options={[]}
          />
        </div>

        <Button className="mt-6s" bgColor="black">
          검색
        </Button>
      </TabPannel>
    </>
  );
}
