import Link from "next/link";
import styles from "./services.module.css";

import { TbBrandBlogger } from "react-icons/tb";
import { MdStorefront, MdOutlineLiveTv } from "react-icons/md";
import { IoWalletOutline, IoBagOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import {} from "react-icons/md";

export default function Services() {
  const services = [
    {
      name: "Konga Blog",
      icon: <TbBrandBlogger />,
    },
    {
      name: "Pay Bills",
      icon: <IoWalletOutline />,
    },
    {
      name: "Offline Store",
      icon: <MdStorefront />,
    },
    {
      name: "Brand Stores",
      icon: <IoBagOutline />,
    },
    {
      name: "Book Flights",
      icon: <SlPlane />,
    },
    {
      name: "Watch KongaTV",
      icon: <MdOutlineLiveTv />,
    },
  ];

  return (
    <div className="hidden md:flex flex-row mx-5">
      {services.map((e, idx) => (
        <ServiceLink key={idx} name={e.name} icon={e.icon} />
      ))}
    </div>
  );
}

export function ServiceLink({ name, icon }) {
  return (
    <Link href="/" title={name} className={styles.item}>
      <span className="text-[#e72a7e]">{icon}</span> &nbsp;
      <span>{name}</span>
    </Link>
  );
}
