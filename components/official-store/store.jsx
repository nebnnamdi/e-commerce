import { storeBrands } from "@/lib/items";
import Link from "next/link";

export default function Store() {
    return <section className="p-[1.25rem]">
        <div className="bg-[#f5a623] text-center p-[.625rem]">Official Store</div>
        <div className="flex flex-wrap">
           {storeBrands.map((e, idx) => (
             <Link href='#' key={idx} className="p-[.25rem]">
             <img src={e.imageUrl} alt={e.title} width="195px" height="100px" className="pb"/>
         </Link>
           ))}
        </div>
    </section>;
}