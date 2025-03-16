"use server"

import { revalidateTag } from "next/cache"

export default async function createProduct(formData: FormData) {
  const filteredData = Object.fromEntries(Array.from(formData.entries()).filter(([key]) => !key.startsWith("$")))

  await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(filteredData)
  })

  revalidateTag("products")
}
