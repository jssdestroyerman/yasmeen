import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[#f0d8bb] h-[100vh] relative">
            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                <Navigation url={"/"} />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="w-[400px] h-[500px] overflow-hidden">
                        <Link href={"/yasmeen"}>
                            <motion.img
                                src={"/yasmeen.webp"}
                                alt="yasmeen"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Link>
                    </div>
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute bottom-[-20px] w-full flex justify-between"
                    >
                        <span>28.538336</span>
                        <span>-81.379234</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
