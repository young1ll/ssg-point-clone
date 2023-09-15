import Input from "../atom/Input";

export default function InputCard({ id, name }: { id: string; name?: string }) {
  return (
    <div className="pb-4">
      <p className="text-[13px] pb-2 leading-[21px]">{name ?? "카드번호"}</p>
      <div className="flex justify-between items-center border rounded-lg">
        <Input
          type="cardNumber"
          className="border-0 text-center rounded-lg"
          id={`${id}_1`}
        />
        -
        <Input
          type="cardNumber"
          className="border-0 text-center rounded-lg"
          id={`${id}_2`}
        />
        -
        <Input
          type="cardNumber"
          className="border-0 text-center rounded-lg"
          id={`${id}_3`}
        />
        -
        <Input
          type="cardNumber"
          className="border-0 text-center rounded-lg"
          id={`${id}_4`}
        />
      </div>
    </div>
  );
}
