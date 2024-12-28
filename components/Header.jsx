import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-purple-500">
            <ul className="flex flex-row gap-4 px-4 py-2">
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/`}>Blog</Link></li>
            </ul>
        </div>
    )
}
