import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <AnimatePresence initial={false} mode="wait">
            <div className="bg-[#f0d8bb]" key={router.route}>
                <Component {...pageProps} />
            </div>
        </AnimatePresence>
    );
}
