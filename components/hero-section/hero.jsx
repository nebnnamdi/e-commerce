import styles from "./hero.module.css";
import Carousel from "../carousel/carousel";
import Discounts from "../discounts/discounts";


export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 my-2 mx-2 lg:my-5 lg:mx-5">
      <div className="w-full lg:w-[70%] flex">
        <Carousel />
      </div>

      <div className="lg:w-[30%]">
        <Discounts />
      </div>
    </div>
  );
}
