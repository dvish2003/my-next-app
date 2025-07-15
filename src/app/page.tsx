//'use client';   // convert server component to client component

// by default enne server component
import React from "react";
import Button from "@/app/(components)/Button";


export default function page() {

  return (
     <main>
       <h1>Server Component vs Client Component</h1>
         <Button/>
     </main>
  )
}