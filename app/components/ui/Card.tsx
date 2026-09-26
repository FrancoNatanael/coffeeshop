'use client';

import Image from "next/image";
import { Coffee } from "@/app/types/Coffee";

export default function Card(coffe: Coffee){
    return <div className="flex flex-col gap-2 text-brand-light w-full h-full">
        <Image
        alt="Coffee packacking image"
        src={coffe.image}
        width={100}
        height={100}
        className="w-full h-full"
        />

        <div className="bg-brand-dark flex justify-between">
            <p>{coffe.name}</p>
            <span>${coffe.price}</span>
        </div>
    </div>
}