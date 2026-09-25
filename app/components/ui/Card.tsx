'use client';

import Image from "next/image";
import Blend from "../../../public/blend.webp";

export default function Card(){
    return <div className="flex flex-col gap-2 text-brand-light w-full h-full">
        <Image
        alt="Coffee packacking image"
        src={Blend}
        width={100}
        height={100}
        className="w-full h-full"
        />

        <div className="bg-brand-dark flex justify-between">
            <p>CS BLEND</p>
            <span>$15.50</span>
        </div>
    </div>
}