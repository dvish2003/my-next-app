import React from "react";


interface Props {
    params: {
        id: string;
    };

}
export default function Page({ params }:Props) {
    return (
        <>
            <h1>meat item: {params.id}</h1>
        </>
    );
}
