import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

function yasmeen() {
    return (
        <div>
            <motion.div
                className="h-[100vh] relative"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                    <Navigation url={"/"} />
                    <motion.div
                        className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[400px] h-[500px] overflow-hidden"
                        initial={{ y: "-44.6%", x: "-50%" }}
                        animate={{ y: "0%", width: "100%", height: "400px" }}
                        transition={{ duration: 1.4 }}
                    >
                        <motion.img
                            src={"/yasmeen.webp"}
                            alt="yasmeen"
                            initial={{ scale: 1.1 }}
                            animate={{
                                y: -900,
                            }}
                            transition={{ duration: 1.4 }}
                        />
                    </motion.div>
                </div>
            </motion.div>

            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm flex justify-between mt-20">
                <h2 className="w-[20%]">
                    The insiration behind the artwork & <br /> what it means.
                </h2>
                <p className="w-[50%]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
                    Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line
                    of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;,
                    comes from a line in section 1.10.32.
                </p>
            </div>
        </div>
    );
}

export default yasmeen;
