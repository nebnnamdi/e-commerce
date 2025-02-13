import Services from "@/components/services/services";
import styles from "./page.module.css";
import Hero from "@/components/hero-section/hero";
import Products from "@/components/products/products";
import Categories from "@/components/categories/categories";
import Store from "@/components/official-store/store";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Categories />
      <Store />
    </main>
  );
}
