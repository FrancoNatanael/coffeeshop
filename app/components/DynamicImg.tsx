'use client';

import Image from "next/image";
import CoffeeImg from "../../public/coffee.svg";

export default function DynamicImg(){
    return <div className="absolute -bottom-30 -right-20">
        <Image
        alt="Coffee cup img"
        src={CoffeeImg}
        width={400}
        height={400}
        />
    </div>
}