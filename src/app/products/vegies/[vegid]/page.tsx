import React from "react";


interface Props {
    params: {
        vegid: string;
    };

}
export default function Page({ params }:Props) {
    return (
        <>
            <h1>Vegi item: {params.vegid}</h1>
        </>
    );
}
