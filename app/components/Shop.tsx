import Button from "./ui/Button";
import Card from "./ui/Card";
import FrenchCoffee from "../../public/french-coffee.svg";
import Image from "next/image";

export default function Shop(){
    return <section className="w-full h-full grid grid-cols-12 gap-y-30 px-20 py-20 bg-brand-light text-brand-dark relative overflow-y-clip">
        
        <p className="col-span-2">CAREFULLY SELECTED</p>
        <p className="col-start-6 col-end-9">THREE DISTINCIT COFFEES, EACH WITH ITS OWN CHARACTER. CHOOSE YOUR FAVORITE, OR TRY THEM ALL.</p>
        <div className="col-span-2 col-end-13">
            <Button/>
        </div>

        <div className="row-start-2 row-end-4 flex justify-between gap-5 col-span-full">
            <Card/>
            <Card/>
            <Card/>
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