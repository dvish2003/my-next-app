import React from "react";


interface Props {
    params: {
        id: string;
        id1: string;
    };

}
export default function Page({ params }: Props) {
    return (
        <>
            <h1>meat item {params.id} review {params.id1}</h1>
        </>
    );
}
