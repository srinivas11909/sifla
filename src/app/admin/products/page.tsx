// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import { Badge } from '@/components/ui/badge'
// import { 
//   Dialog, 
//   DialogContent, 
//   DialogHeader, 
//   DialogTitle, 
//   DialogFooter,
//   DialogDescription
// } from '@/components/ui/dialog'
// import { 
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { 
//   Plus, 
//   Pencil, 
//   Trash2, 
//   GripVertical,
//   Package,
//   Eye,
//   EyeOff,
//   Star
// } from 'lucide-react'

// const PRIMARY_COLOR = '#243d80'

// const CATEGORIES = [
//   { value: 'feedSupplements', label: 'Feed Supplements' },
//   { value: 'probiotics', label: 'Probiotics' },
//   { value: 'antibiotics', label: 'Antibiotics' },
//   { value: 'disinfectants', label: 'Disinfectants' },
//   { value: 'specialtyProducts', label: 'Specialty Products' },
// ]

// const SECTORS = [
//   { value: 'all', label: 'All Sectors' },
//   { value: 'poultry', label: 'Poultry' },
//   { value: 'aqua', label: 'Aqua' },
//   { value: 'dairy', label: 'Dairy' },
//   { value: 'swine', label: 'Swine' },
//   { value: 'equine', label: 'Equine' },
//   { value: 'pets', label: 'Pets' },
// ]

// interface Product {
//   id: string
//   name: string
//   description: string
//   category: string
//   sectors: string
//   featured: boolean
//   active: boolean
//   order: number
// }

// export default function ProductsAdmin() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [loading, setLoading] = useState(true)
//   const [dialogOpen, setDialogOpen] = useState(false)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null)
//   const [deletingProduct, setDeletingProduct] = useState<Product | null>(null)
//   const [filterCategory, setFilterCategory] = useState<string>('all')
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: 'feedSupplements',
//     sectors: [] as string[],
//     featured: false,
//     active: true,
//   })

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('/api/products')
//       const data = await res.json()
//       setProducts(data)
//     } catch (error) {
//       console.error('Error fetching products:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleOpenDialog = (product?: Product) => {
//     if (product) {
//       setEditingProduct(product)
//       setFormData({
//         name: product.name,
//         description: product.description,
//         category: product.category,
//         sectors: JSON.parse(product.sectors),
//         featured: product.featured,
//         active: product.active,
//       })
//     } else {
//       setEditingProduct(null)
//       setFormData({
//         name: '',
//         description: '',
//         category: 'feedSupplements',
//         sectors: [],
//         featured: false,
//         active: true,
//       })
//     }
//     setDialogOpen(true)
//   }

//   const handleSave = async () => {
//     try {
//       const url = editingProduct 
//         ? `/api/products/${editingProduct.id}` 
//         : '/api/products'
//       const method = editingProduct ? 'PUT' : 'POST'

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formData,
//           sectors: JSON.stringify(formData.sectors),
//         }),
//       })

//       if (res.ok) {
//         fetchProducts()
//         setDialogOpen(false)
//       }
//     } catch (error) {
//       console.error('Error saving product:', error)
//     }
//   }

//   const handleDelete = async () => {
//     if (!deletingProduct) return

//     try {
//       const res = await fetch(`/api/products/${deletingProduct.id}`, {
//         method: 'DELETE',
//       })

//       if (res.ok) {
//         fetchProducts()
//         setDeleteDialogOpen(false)
//         setDeletingProduct(null)
//       }
//     } catch (error) {
//       console.error('Error deleting product:', error)
//     }
//   }

//   const handleToggleActive = async (product: Product) => {
//     try {
//       await fetch(`/api/products/${product.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...product, active: !product.active }),
//       })
//       fetchProducts()
//     } catch (error) {
//       console.error('Error toggling product:', error)
//     }
//   }

//   const handleToggleFeatured = async (product: Product) => {
//     try {
//       await fetch(`/api/products/${product.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...product, featured: !product.featured }),
//       })
//       fetchProducts()
//     } catch (error) {
//       console.error('Error toggling featured:', error)
//     }
//   }

//   const toggleSector = (sector: string) => {
//     if (sector === 'all') {
//       setFormData({ ...formData, sectors: ['all'] })
//     } else {
//       const currentSectors = formData.sectors.filter(s => s !== 'all')
//       if (currentSectors.includes(sector)) {
//         setFormData({ ...formData, sectors: currentSectors.filter(s => s !== sector) })
//       } else {
//         setFormData({ ...formData, sectors: [...currentSectors, sector] })
//       }
//     }
//   }

//   const filteredProducts = filterCategory === 'all' 
//     ? products 
//     : products.filter(p => p.category === filterCategory)

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Products</h1>
//           <p className="text-gray-600 mt-1">Manage your product catalog</p>
//         </div>
//         <Button 
//           onClick={() => handleOpenDialog()}
//           style={{ backgroundColor: PRIMARY_COLOR }}
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add Product
//         </Button>
//       </div>

//       {/* Filter */}
//       <div className="flex items-center gap-4">
//         <Label>Filter by category:</Label>
//         <Select value={filterCategory} onValueChange={setFilterCategory}>
//           <SelectTrigger className="w-48">
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Categories</SelectItem>
//             {CATEGORIES.map(cat => (
//               <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProducts.length === 0 ? (
//           <Card className="col-span-full">
//             <CardContent className="p-8 text-center text-gray-500">
//               <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
//               <p>No products found. Click &quot;Add Product&quot; to create one.</p>
//             </CardContent>
//           </Card>
//         ) : (
//           filteredProducts.map((product) => (
//             <Card key={product.id} className={product.active ? '' : 'opacity-60'}>
//               <CardContent className="p-4">
//                 <div className="flex items-start justify-between mb-2">
//                   <div className="flex items-center gap-2">
//                     {product.featured && (
//                       <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                     )}
//                     <h3 className="font-semibold text-gray-900">{product.name}</h3>
//                   </div>
//                   <Badge variant="secondary">
//                     {CATEGORIES.find(c => c.value === product.category)?.label}
//                   </Badge>
//                 </div>
                
//                 <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
//                 <div className="flex flex-wrap gap-1 mb-3">
//                   {JSON.parse(product.sectors).map((sector: string) => (
//                     <Badge key={sector} variant="outline" className="text-xs">
//                       {sector === 'all' ? 'All Sectors' : sector}
//                     </Badge>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between pt-2 border-t">
//                   <div className="flex items-center gap-1">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleToggleFeatured(product)}
//                       title={product.featured ? 'Remove from featured' : 'Add to featured'}
//                     >
//                       <Star className={`w-4 h-4 ${product.featured ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleToggleActive(product)}
//                       title={product.active ? 'Deactivate' : 'Activate'}
//                     >
//                       {product.active ? (
//                         <Eye className="w-4 h-4 text-green-600" />
//                       ) : (
//                         <EyeOff className="w-4 h-4 text-gray-400" />
//                       )}
//                     </Button>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleOpenDialog(product)}
//                     >
//                       <Pencil className="w-4 h-4 text-gray-600" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => {
//                         setDeletingProduct(product)
//                         setDeleteDialogOpen(true)
//                       }}
//                     >
//                       <Trash2 className="w-4 h-4 text-red-500" />
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </div>

//       {/* Add/Edit Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
//             <DialogDescription>
//               {editingProduct ? 'Update the product details.' : 'Add a new product to the catalog.'}
//             </DialogDescription>
//           </DialogHeader>
          
//           <div className="space-y-4 py-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Product Name *</Label>
//               <Input
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 placeholder="e.g., Mineral Mixtures"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="description">Description *</Label>
//               <Textarea
//                 id="description"
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 placeholder="Product description..."
//                 rows={3}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="category">Category *</Label>
//               <Select 
//                 value={formData.category} 
//                 onValueChange={(value) => setFormData({ ...formData, category: value })}
//               >
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {CATEGORIES.map(cat => (
//                     <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="space-y-2">
//               <Label>Sectors</Label>
//               <div className="flex flex-wrap gap-2">
//                 {SECTORS.map(sector => (
//                   <Badge
//                     key={sector.value}
//                     variant={formData.sectors.includes(sector.value) ? 'default' : 'outline'}
//                     className="cursor-pointer"
//                     style={formData.sectors.includes(sector.value) ? { backgroundColor: PRIMARY_COLOR } : {}}
//                     onClick={() => toggleSector(sector.value)}
//                   >
//                     {sector.label}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="featured"
//                   checked={formData.featured}
//                   onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
//                   className="w-4 h-4"
//                 />
//                 <Label htmlFor="featured">Featured</Label>
//               </div>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="active"
//                   checked={formData.active}
//                   onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
//                   className="w-4 h-4"
//                 />
//                 <Label htmlFor="active">Active</Label>
//               </div>
//             </div>
//           </div>

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleSave}
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               disabled={!formData.name || !formData.description}
//             >
//               {editingProduct ? 'Save Changes' : 'Add Product'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Delete Product</DialogTitle>
//             <DialogDescription>
//               Are you sure you want to delete &quot;{deletingProduct?.name}&quot;? This action cannot be undone.
//             </DialogDescription>
//           </DialogHeader>
//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button variant="destructive" onClick={handleDelete}>
//               Delete
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Plus, 
  Pencil, 
  Trash2, 
  GripVertical,
  Package,
  Eye,
  EyeOff,
  Star,
  X,
  ChevronDown,
  Upload,
  Image as ImageIcon
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const CATEGORIES = [
  { value: 'oralLiquids', label: 'Oral Liquids' },
  { value: 'dryPowders', label: 'Dry Powders' },
  { value: 'feedSupplements', label: 'Feed Supplements' },
  { value: 'tabletsBolus', label: 'Tablets / Bolus' },
  { value: 'injectables', label: 'Injectables' },
]

const SECTORS = [
  { value: 'all', label: 'All Sectors' },
  { value: 'poultry', label: 'Poultry' },
  { value: 'aqua', label: 'Aqua' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'swine', label: 'Swine' },
  { value: 'equine', label: 'Equine' },
  { value: 'pets', label: 'Pets' },
]

// Pack size options based on category
const PACK_SIZE_OPTIONS: Record<string, string[]> = {
  oralLiquids: ['1 LTR', '500 ML', '250 ML', '100 ML', '50 ML', '30 ML'],
  dryPowders: ['100gms', '120 gms'],
  feedSupplements: ['5 LTRS', '1 LTR', '500 ML', '1000Gms'],
  tabletsBolus: ['4', '5', '10'],
  injectables: ['10ml', '10ML', '15 ML', '30ml', '50ml', '100ml', '0.5 GM', '4.0 GM', '2.5 GM'],
}

interface Product {
  id: string
  name: string
  brandName: string
  composition: string
  packSize: string
  image: string
  description: string
  category: string
  sectors: string
  featured: boolean
  active: boolean
  order: number
}

export default function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null)
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [packSizeDropdownOpen, setPackSizeDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    composition: '',
    packSize: [] as string[],
    image: '',
    description: '',
    category: 'oralLiquids',
    sectors: [] as string[],
    featured: false,
    active: true,
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setFormData({
        name: product.name,
        brandName: product.brandName || '',
        composition: product.composition || '',
        packSize: product.packSize ? JSON.parse(product.packSize) : [],
        image: product.image || '',
        description: product.description,
        category: product.category,
        sectors: JSON.parse(product.sectors),
        featured: product.featured,
        active: product.active,
      })
    } else {
      setEditingProduct(null)
      setFormData({
        name: '',
        brandName: '',
        composition: '',
        packSize: [],
        image: '',
        description: '',
        category: 'oralLiquids',
        sectors: [],
        featured: false,
        active: true,
      })
    }
    setDialogOpen(true)
  }

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData({ ...formData, image: '' })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSave = async () => {
    try {
      const url = editingProduct 
        ? `/api/products/${editingProduct.id}` 
        : '/api/products'
      const method = editingProduct ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sectors: JSON.stringify(formData.sectors),
          packSize: JSON.stringify(formData.packSize),
        }),
      })

      if (res.ok) {
        fetchProducts()
        setDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving product:', error)
    }
  }

  const handleDelete = async () => {
    if (!deletingProduct) return

    try {
      const res = await fetch(`/api/products/${deletingProduct.id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchProducts()
        setDeleteDialogOpen(false)
        setDeletingProduct(null)
      }
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  const handleToggleActive = async (product: Product) => {
    try {
      await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...product, 
          packSize: product.packSize,
          active: !product.active 
        }),
      })
      fetchProducts()
    } catch (error) {
      console.error('Error toggling product:', error)
    }
  }

  const handleToggleFeatured = async (product: Product) => {
    try {
      await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...product, 
          packSize: product.packSize,
          featured: !product.featured 
        }),
      })
      fetchProducts()
    } catch (error) {
      console.error('Error toggling featured:', error)
    }
  }

  const toggleSector = (sector: string) => {
    if (sector === 'all') {
      setFormData({ ...formData, sectors: ['all'] })
    } else {
      const currentSectors = formData.sectors.filter(s => s !== 'all')
      if (currentSectors.includes(sector)) {
        setFormData({ ...formData, sectors: currentSectors.filter(s => s !== sector) })
      } else {
        setFormData({ ...formData, sectors: [...currentSectors, sector] })
      }
    }
  }

  const togglePackSize = (size: string) => {
    if (formData.packSize.includes(size)) {
      setFormData({ ...formData, packSize: formData.packSize.filter(s => s !== size) })
    } else {
      setFormData({ ...formData, packSize: [...formData.packSize, size] })
    }
  }

  const removePackSize = (size: string) => {
    setFormData({ ...formData, packSize: formData.packSize.filter(s => s !== size) })
  }

  // Handle category change - reset pack size when category changes
  const handleCategoryChange = (category: string) => {
    setFormData({ 
      ...formData, 
      category, 
      packSize: [] 
    })
  }

  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory)

  // Get current pack size options based on selected category
  const currentPackSizeOptions = PACK_SIZE_OPTIONS[formData.category] || []

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: PRIMARY_COLOR }} />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <Button 
          onClick={() => handleOpenDialog()}
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-4">
        <Label>Filter by category:</Label>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map(cat => (
              <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="p-8 text-center text-gray-500">
              <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No products found. Click &quot;Add Product&quot; to create one.</p>
            </CardContent>
          </Card>
        ) : (
          filteredProducts.map((product) => (
            <Card key={product.id} className={product.active ? '' : 'opacity-60'}>
              <CardContent className="p-4">
                {/* Product Image */}
                {product.image ? (
                  <div className="w-full h-32 mb-3 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 mb-3 rounded-lg bg-gray-100 flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-300" />
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {product.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    )}
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  </div>
                  <Badge variant="secondary">
                    {CATEGORIES.find(c => c.value === product.category)?.label}
                  </Badge>
                </div>
                
                {product.brandName && (
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Brand: <span className="text-gray-600">{product.brandName}</span>
                  </p>
                )}
                
                {product.composition && (
                  <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                    Composition: {product.composition}
                  </p>
                )}
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                {product.packSize && JSON.parse(product.packSize).length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {JSON.parse(product.packSize).map((size: string) => (
                      <Badge key={size} variant="outline" className="text-xs bg-blue-50">
                        {size}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {JSON.parse(product.sectors).map((sector: string) => (
                    <Badge key={sector} variant="outline" className="text-xs">
                      {sector === 'all' ? 'All Sectors' : sector}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleFeatured(product)}
                      title={product.featured ? 'Remove from featured' : 'Add to featured'}
                    >
                      <Star className={`w-4 h-4 ${product.featured ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleActive(product)}
                      title={product.active ? 'Deactivate' : 'Activate'}
                    >
                      {product.active ? (
                        <Eye className="w-4 h-4 text-green-600" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleOpenDialog(product)}
                    >
                      <Pencil className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setDeletingProduct(product)
                        setDeleteDialogOpen(true)
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
            <DialogDescription>
              {editingProduct ? 'Update the product details.' : 'Add a new product to the catalog.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Product Image Upload */}
            <div className="space-y-2">
              <Label>Product Image</Label>
              <div className="flex flex-col items-center gap-3">
                {formData.image ? (
                  <div className="relative w-full">
                    <img 
                      src={formData.image} 
                      alt="Product preview"
                      className="w-full h-40 object-cover rounded-lg border"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={removeImage}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div 
                    className="w-full h-40 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-10 h-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Click to upload image</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {formData.image && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Image
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="brandName">Brand Name *</Label>
              <Input
                id="brandName"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                placeholder="e.g., SIFLON-VET"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Mineral Mixtures"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="composition">Composition *</Label>
              <Textarea
                id="composition"
                value={formData.composition}
                onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                placeholder="e.g., Each 5ml contains: Vitamin A 5000 IU, Vitamin D3 1000 IU..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select 
                value={formData.category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Pack Size *</Label>
              {/* Multi-select dropdown for pack size */}
              <div className="relative">
                <div 
                  className="flex flex-wrap items-center gap-1 min-h-[42px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background cursor-pointer"
                  onClick={() => setPackSizeDropdownOpen(!packSizeDropdownOpen)}
                >
                  {formData.packSize.length === 0 ? (
                    <span className="text-muted-foreground">Select pack sizes...</span>
                  ) : (
                    formData.packSize.map((size) => (
                      <Badge 
                        key={size} 
                        variant="secondary"
                        className="flex items-center gap-1"
                        style={{ backgroundColor: `${PRIMARY_COLOR}20`, color: PRIMARY_COLOR }}
                      >
                        {size}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:opacity-70" 
                          onClick={(e) => {
                            e.stopPropagation()
                            removePackSize(size)
                          }}
                        />
                      </Badge>
                    ))
                  )}
                  <ChevronDown className="w-4 h-4 ml-auto text-gray-400" />
                </div>
                
                {packSizeDropdownOpen && (
                  <div className="absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {currentPackSizeOptions.map((size) => (
                      <div
                        key={size}
                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                          formData.packSize.includes(size) ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => togglePackSize(size)}
                      >
                        <div 
                          className={`w-4 h-4 border rounded flex items-center justify-center ${
                            formData.packSize.includes(size) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                          }`}
                        >
                          {formData.packSize.includes(size) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm">{size}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">Available options for {CATEGORIES.find(c => c.value === formData.category)?.label}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Product description..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Sectors</Label>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map(sector => (
                  <Badge
                    key={sector.value}
                    variant={formData.sectors.includes(sector.value) ? 'default' : 'outline'}
                    className="cursor-pointer"
                    style={formData.sectors.includes(sector.value) ? { backgroundColor: PRIMARY_COLOR } : {}}
                    onClick={() => toggleSector(sector.value)}
                  >
                    {sector.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="featured">Featured</Label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="w-4 h-4"
                />
                <Label htmlFor="active">Active</Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={!formData.name || !formData.brandName || !formData.composition || !formData.description}
            >
              {editingProduct ? 'Save Changes' : 'Add Product'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{deletingProduct?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Click outside to close pack size dropdown */}
      {packSizeDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setPackSizeDropdownOpen(false)}
        />
      )}
    </div>
  )
}
