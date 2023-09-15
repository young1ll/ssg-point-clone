import TabForBenefitsEventCoupon from "@/components/organisam/TabForBenefitsEventCoupon";

export default function AttendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabForBenefitsEventCoupon />
      {children}
    </>
  );
}
