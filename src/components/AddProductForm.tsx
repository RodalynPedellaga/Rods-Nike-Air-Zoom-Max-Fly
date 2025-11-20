import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { Product } from '../types'

type Props = {
  onAdd: (product: Product) => void
}

export default function AddProductForm({ onAdd }: Props) {
  const [form, setForm] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    specs: '',
    rating: '',
    price: '',
    quantity: '',
  })

  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // validation: all fields filled
    // require only name, price, quantity for minimal creation
    if (form.name.trim() === '' || form.price.trim() === '' || form.quantity.trim() === '') {
      setError('Please provide at least Name, Price and Quantity.')
      return
    }

    const newProduct: Product = {
      id: 'p-' + Date.now(),
      image: form.image,
      name: form.name,
      category: form.category,
      description: form.description,
      specs: form.specs,
      rating: form.rating ? Number(form.rating) : undefined,
      price: Number(form.price),
      quantity: Number(form.quantity),
      inCart: false,
    }

    onAdd(newProduct)
    setForm({ image: '', name: '', category: '', description: '', specs: '', rating: '', price: '', quantity: '' })
  }

  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>
      {error && <p className="error">{error}</p>}
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="specs" placeholder="Specifications" value={form.specs} onChange={handleChange} />
      <input name="rating" placeholder="Rating (e.g. 4.5)" value={form.rating} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
      <button type="submit">Add Product</button>
    </form>
  )
}
