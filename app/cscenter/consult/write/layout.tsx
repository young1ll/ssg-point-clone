import Tab from "@/components/atom/Tab";
import Tabs from "@/components/atom/Tabs";

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Tabs className="mt-9">
        <Tab
          id="ConsultTab"
          label="consultWrite"
          urlBased="/cscenter/consult/write"
          activeColor="cscenter"
        >
          1:1 상담 작성
        </Tab>
        <Tab
          id="ConsultTab"
          label="consultHistory"
          urlBased=""
          activeColor="cscenter"
        >
          1:1 상담 내역
        </Tab>
      </Tabs>

      {children}
    </>
  );
}
