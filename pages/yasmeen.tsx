import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Great_Vibes } from "@next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

function yasmeen() {
    return (
        <div className="relative h-[100vh] bg-[#f0d8bb]">
            <div className="w-[90%] lg:w-[1000px] mx-auto font-semibold text-sm">
                <Navigation />
                <main className="pt-40">
                    <div className="flex justify-between py-4">
                        <p>
                            <span>28.538336</span>
                            <span>-81.379234</span>
                        </p>
                        <p>MUA: @MYLIFEASCRYSTALL</p>
                    </div>
                    <h1
                        className={`text-center special-font text-[140px] mt-20 ${greatVibes.className}`}
                    >
                        Yasmeen Tariq
                    </h1>
                </main>
            </div>
            <div className="h-[400px] w-full absolute bottom-0">
                <Image
                    src={"/yasmeen.webp"}
                    fill
                    alt="yasmeen"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default yasmeen;
