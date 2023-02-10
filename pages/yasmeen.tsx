import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

function yasmeen() {
    return (
        <div className="bg-[#f0d8bb] h-[100vh] relative">
            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                <Navigation url={"/"} />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="w-[400px] h-[500px] overflow-hidden">
                        <Link href={"/yasmeen"}>
                            <motion.img src={"/yasmeen.webp"} alt="yasmeen" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default yasmeen;
