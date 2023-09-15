import TabPannel from "@/components/atom/TabPannel";
import MyEvent from "@/components/organisam/MyEvent";

export default function WinEventPages() {
  return (
    <TabPannel id="pntPlusPage" label="roulette">
      <MyEvent />
    </TabPannel>
  );
}
