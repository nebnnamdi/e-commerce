import { categories } from "@/lib/items";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="p-5 mb-[1.25rem]">
      <div className="flex">
        {categories.map((e, idx) => (
          <div key={idx}>
            <imgg src={e.product} alt={e.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
