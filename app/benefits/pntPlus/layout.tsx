import Tab from "@/components/atom/Tab";
import Tabs from "@/components/atom/Tabs";

export default function AttendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Tabs className="mt-[36px]">
        <Tab
          id="pntPlusPage"
          label="attend"
          activeColor="benefits"
          urlBased="/benefits/pntPlus/attend"
        >
          출석체크
        </Tab>
        <Tab
          id="pntPlusPage"
          label="roulette"
          activeColor="benefits"
          urlBased="/benefits/pntPlus/roulette"
        >
          럭키룰렛
        </Tab>
      </Tabs>
      {children}
    </>
  );
}
