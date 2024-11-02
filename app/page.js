import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export default function Home() {
  return (
   <main className="min-h-screen bg-[#f8f8f8] overflow-hidden">
    <Navbar/>
    <Hero/>
   </main>
  );
}
