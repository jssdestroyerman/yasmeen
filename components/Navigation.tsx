import Link from "next/link";

interface Props {
    url: string;
}

function Navigation({ url }: Props) {
    return (
        <nav className="flex justify-between pt-8 items-center">
            <Link href={url}>
                <h1>JIMMY FERMIN</h1>
            </Link>
            <button className="border-[1px] border-black w-16 h-16 rounded-full">
                MENU
            </button>
        </nav>
    );
}

export default Navigation;
