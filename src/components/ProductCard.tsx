import Image from "next/image"

export interface IProduct {
    id: number
    title: string
    image: string
    price: number
}

export function ProductCard({ title, image, price }: IProduct) {
    return (
        <div className="w-64 border border-black/10 dark:border-white/10
        rounded-xl p-4 hover:shadow transition"
        >
            {/* <Image
                width={400}
                height={40}
                src={image}
                alt={title}
                className="object-contain mb-3 rounded"
            /> */}
            <h2 className="text-sm text-black dark:text-white font-medium
            line-clamp-2 mb-1">
                {title}
            </h2>
            <p className="text-sm text-black dark:text-white font-medium">
                {price}
            </p>
        </div>
    )
}
