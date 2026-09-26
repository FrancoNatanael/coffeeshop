'use client';

import Button from "./ui/Button";
import Card from "./ui/Card";
import FrenchCoffee from "../../public/french-coffee.svg";
import Image from "next/image";
import getItems from "../utils/getItems";
import { useEffect, useState } from "react";
import { Coffee } from "../types/Coffee";

export default function Shop(){
    const [items, setItems] = useState([] as Coffee[]);

    useEffect(() => {
        setItems(getItems())
    }, [])

    return <section className="w-full h-full grid grid-cols-12 gap-y-30 px-20 py-20 bg-brand-light text-brand-dark relative overflow-y-clip">
        
        <p className="col-span-2">CAREFULLY SELECTED</p>
        <p className="col-start-6 col-end-9">THREE DISTINCIT COFFEES, EACH WITH ITS OWN CHARACTER. CHOOSE YOUR FAVORITE, OR TRY THEM ALL.</p>
        <div className="col-span-2 col-end-13 justify-self-end">
            <Button/>
        </div>

        <div className="row-start-2 row-end-4 flex justify-between gap-5 col-span-full">
            {items.map((item) => (
                <Card key={item.name} {...item} />
            ))}
        </div>

        <div className="row-4 col-span-6">
            <p>GREAT COFFEE STARTS WITH GREAT BEANS. WE SEEK OUT DISTINCTIVE COFFEES, ROAST THEM WITH INTENTION, AND LET THEIR CHARACTER SPEAK FOR ITSELF. THOUGHTFULLY SOURCED, CAREFULLY CRAFTED, AND MADE TO BE ENJOYED ONE CUP AT A TIME.</p>
        </div>

        <div className="absolute bottom-0 right-20">
            <Image
            alt="French coffee"
            src={FrenchCoffee}
            width={100}
            height={100}
            className="w-full h-full"
            />
        </div>
    </section>
}