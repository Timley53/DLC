import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skilss from "./components/Skilss";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <Header/>
        <Hero/>
        <Skilss/>
        <Tools/>
    </div>
  );
}
