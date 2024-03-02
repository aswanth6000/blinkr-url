import Image from "next/image";
import Navbar from "@/components/navbar";
import Card from "@/components/card";

export default function Home() {
  return (
    <main className={`absolute top-0 z-[-2] h-auto w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] `}>
    <Navbar/>
    <section className="flex h-auto flex-col items-center justify-between p-24">
    <Card/>
    </section>
    </main>
  );
}
