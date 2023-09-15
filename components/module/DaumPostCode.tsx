import DaumPostcode, { useDaumPostcodePopup } from "react-daum-postcode";
import Button from "../atom/Button";
export default function DaumPostCode({
  isView,
  setIsView,
  setAddress,
  children,
}: {
  isView: boolean;
  setIsView: any;
  setAddress: React.Dispatch<React.SetStateAction<any>>;
  children: React.ReactNode;
}) {
  const open = useDaumPostcodePopup();
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // setAddress(data)
    setAddress([data.zonecode, fullAddress]);
  };

  const handleClick = () => {
    open({ onComplete: complete });
  };

  return (
    <div>
      {isView && (
        <DaumPostcode className="postmodal" autoClose onComplete={complete} />
      )}
      <Button className="w-1/4 min-w-[110px]" onClick={handleClick}>
        {children}
      </Button>
    </div>
  );
}
