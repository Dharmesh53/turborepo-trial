import createProduct from "./actions/create-product";

export default async function CreateProduct() {
  return (
    <div>
      <form action={createProduct}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" id="price" />
        </div>
        <button type="submit">
          Create Product
        </button>
      </form>
    </div>
  )
}
