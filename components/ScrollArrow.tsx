import { motion } from "framer-motion";

function ScrollArrow() {
    return (
        <motion.div
            className="flex flex-col items-center w-32 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.4, duration: 0.7 },
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
            </svg>

            <p>Scroll For More</p>
        </motion.div>
    );
}

export default ScrollArrow;
