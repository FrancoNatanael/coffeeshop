import Image from "next/image";
import CoffeeShopLogo from "../../public/coffeeshoplogo.svg";

export default function NavBar(){
    return <nav className="absolute flex justify-between items-center w-full px-20 py-5">
        <Image 
        alt="coffeeshop logo"
        src={CoffeeShopLogo}
        width={150}
        height={150}
        />

        <p>COFFEE CART {'{0}'}</p>
    </nav>
}