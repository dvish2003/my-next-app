import React from 'react';
import Link from "next/link";

const Page = () => {

    const vegies= [
        { id: 'Broccoli', name: 'Broccoli' },
        { id: 'Spanish', name: 'Spanish' },
        { id: 'Carrot', name: 'Carrot' },
        { id: 'Potato', name: 'Potato' },
        { id: 'Tomato', name: 'Tomato' },
        { id: 'Cabbage', name: 'Cabbage' },
        { id: 'Cauliflower', name: 'Cauliflower' },
        { id: 'Spinach', name: 'Spinach' },
        { id: 'Kale', name: 'Kale' },
        { id: 'Lettuce', name: 'Lettuce' }
    ]
    return (
        <div>
             <h1>Vegitable page</h1>

            <ul>
                {vegies.map((vegi) =>{
                    return (
                        <li key={vegi.id}>
                            <Link href={`/products/vegies/${vegi.id}`}>{vegi.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Page;