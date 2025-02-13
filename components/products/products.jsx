import Link from "next/link";
import styles from "./products.module.css";
import { todayDeals, sponsoredProducts } from "@/lib/items";

export default function Products() {
  return (
    <div className="p-2 md:p-5">
      <TodayDeal />
      <SponsoredProducts />
    </div>
  );
}

export function ProductItem({
  image,
  productName,
  price,
  oldPrice,
  discount,
  discounted,
}) {
  return (
    <div className={`${styles.product} ${styles.shadow}`}>
      <section className={styles.img} width="100px" height="100px">
        <img src={image} alt={image.alt} height={100} width={100} />
      </section>
      <section>
        <div className={styles.productTitle}>
          <p>{productName}</p>
        </div>
        <div>
          <span className={styles.price}>₦{price}</span>
          {oldPrice && <span className={styles.oldPrice}>₦{oldPrice}</span>}
          {discount && (
            <span className={styles.discount}>-{discount}&#37;</span>
          )}
        </div>
        <div>
          {discounted && <p className={styles.save}>You save ₦{discounted}</p>}
        </div>
      </section>
    </div>
  );
}

export function TodayDeal() {
  return (
    <div>
      <section className={styles.title}>
        <div className="flex gap-3 md:gap-11 p-1 md:p-3">
          <span className="text-2xl md:text-3xl font-bold">Today's Deals</span>

          <span className="text-[.6875rem] md:text-[.8125rem] pt-2 hover:underline">
            <Link href="/#">See all Items</Link>
          </span>
        </div>
      </section>

      <section className="md:grid md:grid-cols-3 mt-2 gap-3 pb-2 overflow-x-auto whitespace-nowrap">
        {todayDeals.map((e, idx) => (
          <div className="inline-block m-2 md:m-0" key={idx}>
            <ProductItem
              image={e.image.src}
              productName={e.name}
              price={e.price}
              oldPrice={e.oldPrice}
              discount={e.discount}
              discounted={e.discounted}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export function Sponsored({
  image,
  name,
  oldPrice,
  price,
  discount,
  discounted,
}) {
  return (
    <div className="w-40 md:w-[200px] cursor-pointer">
      <img src={image} alt={name} />
      <p className="text-[.8125rem] md:text-[.9375rem]">{name}</p>
      <p className="text-[1rem] md:text-[1.25rem] font-bold">₦{price}</p>
      {discount && (
        <div className="flex justify-between">
          <span className={styles.oldPrice}>₦{oldPrice}</span>
          <span className={styles.discount}>-{discount}&#37;</span>
        </div>
      )}
      {discounted && <span className={styles.save} >You save {discounted}</span>}
    </div>
  );
}

export function SponsoredProducts() {
  return (
    <section>
      <div className="border-b-[.0625rem] border-[#e5e5e5] p-[.9375rem]">
        <h2 className="text-xl tracking-[.03125rem] font-bold">
          Sponsored Products
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto p-[.46875rem]">
        {sponsoredProducts.map((e, idx) => (
          <div className={`${styles.shadow} p-3 relative`} key={idx}>
            <Sponsored key={idx} {...e} />
          </div>
        ))}
      </div>
    </section>
  );
}
