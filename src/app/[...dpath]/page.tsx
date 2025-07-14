// app/docs/[...dpath]/page.tsx

import React from "react";

interface PageProps {
  params: {
    dpath: string[];
  };
}

export default  function Page({ params }: PageProps) {
  return (
      <>
        <div>Catch All Routes:</div>
        <ul>
          {params.dpath.map((item: string) => (
              <li>{item}</li>
          ))}
        </ul>
      </>
  );
}
