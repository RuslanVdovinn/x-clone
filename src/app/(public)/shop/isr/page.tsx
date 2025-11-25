import { type IProduct, ProductCard } from "@/components/ProductCard"
import { API_URL } from "@/constants"

export default async function ShopISRPage() {
    const response = await fetch(API_URL, { next: { revalidate: 500 } })
    const products = (await response.json()) as IProduct[]
    return (
        <div className="grid grid-cols-2 gap-4">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    )
}
