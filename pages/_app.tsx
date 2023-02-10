import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <AnimatePresence mode="wait">
            <div
                className={`bg-[#f0d8bb] ${inter.className}`}
                key={router.route}
            >
                <Component {...pageProps} />
            </div>
        </AnimatePresence>
    );
}
