import Navigation from "@/components/Navigation";
import { Great_Vibes } from "@next/font/google";
import { motion, useTransform, useScroll } from "framer-motion";
import ScrollArrow from "@/components/ScrollArrow";
import { useEffect, useState } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const firstName = {
    animate: {
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
        opacity: 0,
        transition: { delay: 1 },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};

const lastName = {
    animate: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
        },
    },
};

function Yasmeen() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

    const [canScroll, setCanScroll] = useState(false);
    useEffect(() => {
        if (canScroll === false) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [canScroll]);

    return (
        <div>
            <motion.div
                className="h-[100vh] relative"
                initial="initial"
                animate="animate"
                exit="exit"
                onAnimationComplete={() => setCanScroll(true)}
            >
                <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                    <Navigation url={"/"} />

                    <main className="mt-40">
                        <motion.div
                            className="flex justify-between items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 1.4 },
                            }}
                        >
                            <div>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                            <div className="mua uppercase">
                                MUA: @mylifeascrystall
                            </div>
                        </motion.div>

                        <motion.h1
                            className={`text-[170px] text-center mt-32 ${greatVibes.className}`}
                        >
                            <motion.span
                                variants={firstName}
                                className="inline-block"
                            >
                                {Array.from("Yasmeen").map((lettre, index) => (
                                    <motion.span
                                        variants={letter}
                                        key={index}
                                        className="inline-block"
                                    >
                                        {lettre}
                                    </motion.span>
                                ))}
                            </motion.span>{" "}
                            <motion.span
                                className="inline-block"
                                variants={lastName}
                            >
                                {Array.from("Tariq").map((lettre, index) => (
                                    <motion.span
                                        className="inline-block"
                                        key={index}
                                        variants={letter}
                                    >
                                        {lettre}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.h1>
                    </main>
                    <motion.div
                        className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[400px] h-[500px] overflow-hidden"
                        initial={{ y: "-44.6%", x: "-50%" }}
                        animate={{ y: "0%", width: "100%", height: "400px" }}
                        transition={{ duration: 1.4 }}
                    >
                        <motion.img
                            style={{ scale: scale }}
                            src={"/yasmeen.webp"}
                            alt="yasmeen"
                            initial={{ scale: 1.1 }}
                            animate={{
                                y: -900,
                                transition: { duration: 1 },
                            }}
                        />
                        <div className="absolute top-[50%] translate-y-[-50%] left-8">
                            <ScrollArrow />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm flex justify-between py-20">
                <h2 className="w-[30%] text-2xl">
                    The insiration behind the artwork & <br /> what it means.
                </h2>
                <p className="w-[60%] text-xl font-medium">
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

export default Yasmeen;
