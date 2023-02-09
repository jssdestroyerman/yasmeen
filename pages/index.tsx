import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[#f0d8bb] h-[100vh]">
            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                <Navigation />
                <main className="flex justify-center pt-40">
                    <div>
                        <Link href={"/yasmeen"}>
                            <Image
                                src={"/yasmeen.webp"}
                                width={400}
                                height={500}
                                alt="yasmeen"
                            />
                        </Link>
                        <div className="flex justify-between py-4">
                            <p>YASMEEN TARIQ</p>
                            <p>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
