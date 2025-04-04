import Link from 'next/link'
import menu from '@/data/menu.json'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4">
            <nav className="flex gap-6 items-center justify-center">
                    <Image
                        className=""
                        src="/logo_canopus.svg"
                        alt="Next.js logo"
                        width={140}
                        height={30}
                        priority
                    />
                    {menu.map((item, index) => (
                        <Link key={index} href={item.href} className="text-canopus-blue hover:bg-gray-100 p-2 rounded">
                            {item.label}
                        </Link>
                    ))}
                <div className="flex gap-1">
                    <button className='btn-sm p-1 font-bold rounded text-canopus-blue hover:cursor-pointer'>SP</button>
                    <button className='btn-sm p-1 font-bold bg-gray-200 rounded text-canopus-blue hover:cursor-pointer'>BH</button>
                    <button className='btn-sm p-1 font-bold  rounded text-canopus-blue hover:cursor-pointer'>RJ</button>
                </div>
            </nav>
        </header>
    )
}
