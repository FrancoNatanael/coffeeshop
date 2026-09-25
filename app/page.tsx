import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return <>
      <NavBar/>
      <Hero/>
      <Footer/>
    </>
}
