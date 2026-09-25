import Image from "next/image";
import CoffeeManImg from "../../public/img.webp";
import DynamicImg from "./DynamicImg";

export default function Hero(){
    return <section className="w-full h-screen grid grid-cols-12 grid-rows-5 px-20 py-5 gap-10 ">
        <span className="inline-block text-6xl leading-[0.9] row-start-2 col-span-12">
            <div>FOR PEOPLE</div> 
            <div>WHO TAKE COFFEE SERIOUSLY.</div>
        </span>

        <div className="row-start-3 row-span-full col-span-4">
            <Image
            alt="Coffe man"
            src={CoffeeManImg}
            width={100}
            height={100}
            className="w-full h-full"
            />
        </div>

        <DynamicImg/>
    </section>
}