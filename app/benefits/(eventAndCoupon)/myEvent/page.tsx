import TabPannel from "@/components/atom/TabPannel";
import MyEvent from "@/components/organisam/MyEvent";

export default function MyEventPages() {
  return (
    <TabPannel id="pntPlusPage" label="attend">
      <MyEvent />
    </TabPannel>
  );
}
