import Link from "next/link";

import styles from "./header.module.css";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.logo}>STORE</h2>

        <div className={styles.headerLinks}>
          <Link href="/">Store Locator</Link>
          <Link href="/">Sell on Konga</Link>

          <input
            className={styles.search}
            type="text"
            placeholder="Search for products, brands and categories..."
          />

          <Link href="/help">Help</Link>
          <Link href="/login">Login/Signup</Link>
          <button className={styles.cartBtn}>
            <BsCart3 className={styles.cart} />
            &nbsp; My Cart &nbsp;
            <span className={styles.qty}>0</span>
          </button>
        </div>
      </header>

      <nav className={styles.navbar}>
        <Link href="/categories" className="flex font-bold">
          All Categories &nbsp; <GiHamburgerMenu className="m-auto" />
        </Link>

        <Link href='/'>Computers and Accessories</Link>
        <Link href='/'>Phones and Tablets</Link>
        <Link href='/'>Electronics</Link>
        <Link href='/'>Konga Fashion</Link>
        <Link href='/'>Home and Kitchen</Link>
        <Link href='/'>Baby, Kids and Toys</Link>
        <Link href='/'>Beauty, Health & Personal Care</Link>
      </nav>
    </>
  );
}
