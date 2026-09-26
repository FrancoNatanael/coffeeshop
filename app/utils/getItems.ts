import type { StaticImageData } from "next/image";
import Blend from "../../public/blend.webp";
import Brasil from "../../public/brasil.webp";
import Selection from "../../public/selection.webp";
import { Coffee } from "../types/Coffee";

export default function getItems(): Coffee[] {
  return [
    {
      name: "CS BLEND",
      price: 15.5,
      image: Blend,
    },
    {
      name: "BRASIL",
      price: 15.5,
      image: Brasil,
    },
    {
      name: "SELECTION",
      price: 157.5,
      image: Selection,
    },
  ];
}
