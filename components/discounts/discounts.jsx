import Image from "next/image";
import { flashSales } from "@/images";

export default function Discounts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-1">
      {flashSales.map((e, idx) => (
        <Image src={e} alt={e} key={idx} />
      ))}
    </div>
  );
}
