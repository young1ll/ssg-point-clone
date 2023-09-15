import Image from "next/image";
import Button from "../atom/Button";

export default function PageNavigator() {
  return (
    <div className="relative flex justify-center gap-x-2 w-full mt-10 pb-20">
      <Button className="relative inline-block !w-9 h-9">
        <Image
          className="mx-auto"
          src={"/images/arrow_left_double.png"}
          width={10}
          height={10}
          alt=""
        />
      </Button>
      <Button className="relative inline-block !w-9 h-9">
        <Image
          className="mx-auto"
          src={"/images/arrow_left_one.png"}
          width={5.5}
          height={5.5}
          alt=""
        />
      </Button>
      <ul className="flex gap-x-4 px-2">
        <li>
          <Button className="!border-0 w-8 h-9 font-normal">
            <span>1</span>
          </Button>
        </li>
        <li>
          <Button className="!border-0 w-8 h-9 font-normal">
            <span>2</span>
          </Button>
        </li>
        <li>
          <Button className="!border-0 w-8 h-9 font-normal">
            <span>3</span>
          </Button>
        </li>
        <li>
          <Button className="!border-0 w-8 h-9 font-normal">
            <span>4</span>
          </Button>
        </li>
        <li>
          <Button className="!border-0 w-8 h-9 font-normal">
            <span>5</span>
          </Button>
        </li>
      </ul>
      <Button className="relative inline-block !w-9 h-9">
        <Image
          className="mx-auto rotate-180"
          src={"/images/arrow_left_one.png"}
          width={5.5}
          height={5.5}
          alt=""
        />
      </Button>
      <Button className="relative inline-block !w-9 h-9">
        <Image
          className="mx-auto rotate-180"
          src={"/images/arrow_left_double.png"}
          width={10}
          height={10}
          alt=""
        />
      </Button>
    </div>
  );
}
