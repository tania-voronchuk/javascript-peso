import { FC } from "react";
import ThreeVertDots from "../ThreeVertDots/ThreeVertDots";

interface MainBtn {
  text: string;
}

const ButtonMain: FC<MainBtn> = ({ text }) => {
  return (
    <button className=" w-fit h-fit bg-transparent pt-1 pb-1 pr-[5px] pl-[5px] border border-solid border-accent-element-color ">
      <div className=" flex items-center pt-4 pb-4 pr-6 pl-6 bg-accent-color justify-center">
        <p className=" text-2xl leading-6 mr-2.5 md:mr-4">{text}</p>
        <ThreeVertDots />
      </div>
    </button>
  );
};
export default ButtonMain;
