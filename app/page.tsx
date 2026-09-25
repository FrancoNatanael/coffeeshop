import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Shop from "./components/Shop";

export default function Home() {
  return <>
      <NavBar/>
      <Hero/>
      <Shop/>
      <Footer/>
    </>
}
