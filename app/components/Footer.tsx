import Image from "next/image";
import CoffeeShopLogo from "../../public/coffeeshoplogo.svg";

export default function Footer(){
    return <footer className="w-full py-5">
         <Image 
        alt="coffeeshop logo"
        src={CoffeeShopLogo}
        width={150}
        height={150}
        className="m-auto"
        />
    </footer>
}