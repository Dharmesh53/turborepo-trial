import { Product } from "@repo/types"

export default async function Products() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] }
  })

  const products: Product[] = await response.json()

  return (
    <div>
      <h1>Products</h1>
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>
    </div>
  )
}
