import { Button } from "@/components/ui/button";
import Link from "next/link"

const data = [
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "Forbes",
        tags: ["E-Magazine", "Magazine"],
        price: "30$",
        link: '#',
    },
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "Tech Crunch",
        tags: ["Technology", "News"],
        link: '#',
        price: "25$"
    },
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "National Geographic",
        link: '#',
        tags: ["Science", "Nature"],
        price: "40$"
    },
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "Fashion Weekly",
        tags: ["Fashion", "Lifestyle"],
        link: '#',
        price: "20$"
    },
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "Gaming Monthly",
        tags: ["Gaming", "Entertainment"],
        link: '#',
        price: "35$"
    },
    {
        imgLink: "https://images.placeholders.dev/?width=200&height=100",
        title: "Health & Fitness",
        tags: ["Health", "Fitness"],
        // link: '#',
        price: "15$"
    }
];
export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid gap-6 w-full">
                <div className="overflow-hidden shadow-lg">
                    <div className="grid items-center gap-4 p-4 md:p-6 bg-gray-900 text-white">
                        <div className="hidden md:flex items-center gap-2">
                            <h1 className="font-semibold text-lg">InstaPR - Search Publications</h1>
                        </div>
                        <div className="flex md:hidden items-center">
                            <h1 className="font-semibold text-lg">InstaPR - Search Publications</h1>
                            <button className="ml-auto text-black text-sm md:text-base underline">
                                View all
                            </button>
                        </div>
                        <form className="w-full md:max-w-xs ml-auto md:ml-0">
                            <div className="relative">
                                <input
                                    className="pl-8 md:pl-10 bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Search"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="grid gap-6 p-4 md:p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {!!data.length &&
                            data.map((item) => (
                                <div key={item.title} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                    <img
                                        alt={item.title}
                                        className="object-cover w-full h-72 md:h-80 mb-16 sm:mb-8 lg:mb-32"
                                        src={item.imgLink}
                                    />
                                    {!!item.link && (
                                        <Link href={item.link}>
                                            <p className="absolute inset-0 pb-16 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-40">
                                                <button className="text-white bg-transparent border border-white px-4 py-2 rounded-md transition-all hover:bg-white hover:text-black">
                                                    View Site
                                                </button>
                                            </p>
                                        </Link>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-950">
                                        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                                        <div className="flex items-center gap-2">
                                            {!!item.tags.length &&
                                                item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="border px-2 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                        </div>
                                        <div className="flex justify-between mt-4 gap-8">
                                            <h4 className="font-semibold text-lg md:text-xl mt-2">{item.price}</h4>
                                            <Button className="mx-4">Buy</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}