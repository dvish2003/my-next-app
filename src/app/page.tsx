import React from "react";
import Link from "next/link";
import styles from "./page.module.css";


export default function page() {
  return (
     <main>
       <h1>Home Page</h1>
         <ul>
             <li><Link href={"/"} className={styles.link}>Home</Link></li>   {/*page routing*/}
             <li><Link href={"/services"} className={styles.link}>Services</Link></li>
             <li><Link href={"/products"} className={styles.link}>Products</Link></li>
             <li><Link href={"/about"} className={styles.link}>About</Link></li>
             <li><Link href={"/contact"} className={styles.link}>Contact us</Link></li>
             <li><Link href={"/about/branches"} className={styles.link}>Branches</Link></li>
             <li><Link href={"/products/vegies"} className={styles.link}>Vegitables</Link></li>
         </ul>

         <Link href={"/https://nextjs.org/"} id={styles.specialLink} target={'_blank'}>Next Js Site</Link> .
     </main>
  )
}