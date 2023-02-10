import Navigation from "@/components/Navigation";
import { Great_Vibes } from "@next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: { duration: 1 },
    },
};

const lastName = {};

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

                    <main className="mt-40">
                        <div className="flex justify-between items-center">
                            <div>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            <div className="mua uppercase">
                                MUA: @mylifeascrystall
                            </div>
                        </div>

                        <motion.h1
                            className={`text-[170px] text-center mt-32 ${greatVibes.className}`}
                        >
                            <motion.span variants={firstName}>
                                <motion.span variants={letter}>Y</motion.span>
                                <motion.span variants={letter}>a</motion.span>
                                <motion.span variants={letter}>s</motion.span>
                                <motion.span variants={letter}>m</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>e</motion.span>
                                <motion.span variants={letter}>n</motion.span>
                            </motion.span>
                            {/* <motion.span className="last" variants={lastName}>
                                <motion.span variants={letter}>T</motion.span>
                                <motion.span variants={letter}>a</motion.span>
                                <motion.span variants={letter}>r</motion.span>
                                <motion.span variants={letter}>i</motion.span>
                                <motion.span variants={letter}>q</motion.span>
                            </motion.span> */}
                        </motion.h1>
                    </main>
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

            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm flex justify-between py-20">
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
