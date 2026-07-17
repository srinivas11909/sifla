import { Suspense } from 'react'
import ProductsContent from './ProductsContent'

// Fallback component for Suspense
function ProductsLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
}

export const metadata = {
  title: 'Products | Siflon Pharmaceuticals',
  description: 'Browse our comprehensive range of veterinary pharmaceutical products'
}

export default function Page() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsContent />
    </Suspense>
  )
}
