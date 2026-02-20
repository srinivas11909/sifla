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
//   Plus, 
//   Pencil, 
//   Trash2, 
//   GripVertical, 
//   Image as ImageIcon, 
//   Video,
//   Eye,
//   EyeOff
// } from 'lucide-react'
// import { motion, Reorder } from 'framer-motion'

// const PRIMARY_COLOR = '#243d80'

// interface HeroSlide {
//   id: string
//   title: string
//   subtitle: string
//   badge: string | null
//   type: string
//   src: string
//   poster: string | null
//   order: number
//   active: boolean
// }

// export default function HeroSlidesAdmin() {
//   const [slides, setSlides] = useState<HeroSlide[]>([])
//   const [loading, setLoading] = useState(true)
//   const [dialogOpen, setDialogOpen] = useState(false)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null)
//   const [deletingSlide, setDeletingSlide] = useState<HeroSlide | null>(null)
//   const [formData, setFormData] = useState({
//     title: '',
//     subtitle: '',
//     badge: '',
//     type: 'image',
//     src: '',
//     poster: '',
//     active: true,
//   })

//   useEffect(() => {
//     fetchSlides()
//   }, [])

//   const fetchSlides = async () => {
//     try {
//       const res = await fetch('/api/hero-slides')
//       const data = await res.json()
//       setSlides(data)
//     } catch (error) {
//       console.error('Error fetching slides:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleOpenDialog = (slide?: HeroSlide) => {
//     if (slide) {
//       setEditingSlide(slide)
//       setFormData({
//         title: slide.title,
//         subtitle: slide.subtitle,
//         badge: slide.badge || '',
//         type: slide.type,
//         src: slide.src,
//         poster: slide.poster || '',
//         active: slide.active,
//       })
//     } else {
//       setEditingSlide(null)
//       setFormData({
//         title: '',
//         subtitle: '',
//         badge: '',
//         type: 'image',
//         src: '',
//         poster: '',
//         active: true,
//       })
//     }
//     setDialogOpen(true)
//   }

//   const handleSave = async () => {
//     try {
//       const url = editingSlide 
//         ? `/api/hero-slides/${editingSlide.id}` 
//         : '/api/hero-slides'
//       const method = editingSlide ? 'PUT' : 'POST'

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         fetchSlides()
//         setDialogOpen(false)
//       }
//     } catch (error) {
//       console.error('Error saving slide:', error)
//     }
//   }

//   const handleDelete = async () => {
//     if (!deletingSlide) return

//     try {
//       const res = await fetch(`/api/hero-slides/${deletingSlide.id}`, {
//         method: 'DELETE',
//       })

//       if (res.ok) {
//         fetchSlides()
//         setDeleteDialogOpen(false)
//         setDeletingSlide(null)
//       }
//     } catch (error) {
//       console.error('Error deleting slide:', error)
//     }
//   }

//   const handleToggleActive = async (slide: HeroSlide) => {
//     try {
//       await fetch(`/api/hero-slides/${slide.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...slide, active: !slide.active }),
//       })
//       fetchSlides()
//     } catch (error) {
//       console.error('Error toggling slide:', error)
//     }
//   }

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
//           <h1 className="text-3xl font-bold text-gray-900">Hero Slides</h1>
//           <p className="text-gray-600 mt-1">Manage the homepage carousel slides</p>
//         </div>
//         <Button 
//           onClick={() => handleOpenDialog()}
//           style={{ backgroundColor: PRIMARY_COLOR }}
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add Slide
//         </Button>
//       </div>

//       {/* Slides List */}
//       <div className="space-y-4">
//         {slides.length === 0 ? (
//           <Card>
//             <CardContent className="p-8 text-center text-gray-500">
//               <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
//               <p>No hero slides yet. Click &quot;Add Slide&quot; to create one.</p>
//             </CardContent>
//           </Card>
//         ) : (
//           slides.map((slide, index) => (
//             <Card key={slide.id} className={slide.active ? '' : 'opacity-60'}>
//               <CardContent className="p-4">
//                 <div className="flex items-start gap-4">
//                   <div className="flex items-center gap-2 text-gray-400">
//                     <GripVertical className="w-5 h-5 cursor-move" />
//                     <span className="text-sm font-medium">{index + 1}</span>
//                   </div>
                  
//                   <div 
//                     className="w-32 h-20 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0"
//                   >
//                     {slide.type === 'video' ? (
//                       <Video className="w-8 h-8 text-gray-400" />
//                     ) : (
//                       <ImageIcon className="w-8 h-8 text-gray-400" />
//                     )}
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-2 mb-1">
//                       <h3 className="font-semibold text-gray-900 truncate">{slide.title}</h3>
//                       {slide.badge && (
//                         <Badge variant="secondary" className="text-xs">{slide.badge}</Badge>
//                       )}
//                       <Badge 
//                         className={slide.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}
//                       >
//                         {slide.type}
//                       </Badge>
//                     </div>
//                     <p className="text-sm text-gray-600 line-clamp-2">{slide.subtitle}</p>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleToggleActive(slide)}
//                       title={slide.active ? 'Deactivate' : 'Activate'}
//                     >
//                       {slide.active ? (
//                         <Eye className="w-4 h-4 text-green-600" />
//                       ) : (
//                         <EyeOff className="w-4 h-4 text-gray-400" />
//                       )}
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleOpenDialog(slide)}
//                     >
//                       <Pencil className="w-4 h-4 text-gray-600" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => {
//                         setDeletingSlide(slide)
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
//             <DialogTitle>{editingSlide ? 'Edit Slide' : 'Add New Slide'}</DialogTitle>
//             <DialogDescription>
//               {editingSlide ? 'Update the slide details below.' : 'Fill in the details for the new slide.'}
//             </DialogDescription>
//           </DialogHeader>
          
//           <div className="space-y-4 py-4">
//             <div className="space-y-2">
//               <Label htmlFor="title">Title *</Label>
//               <Input
//                 id="title"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 placeholder="Slide title"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="subtitle">Subtitle *</Label>
//               <Textarea
//                 id="subtitle"
//                 value={formData.subtitle}
//                 onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
//                 placeholder="Slide description"
//                 rows={3}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="badge">Badge Text</Label>
//               <Input
//                 id="badge"
//                 value={formData.badge}
//                 onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
//                 placeholder="e.g., Since 1993"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="type">Type</Label>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="type"
//                     value="image"
//                     checked={formData.type === 'image'}
//                     onChange={() => setFormData({ ...formData, type: 'image' })}
//                     className="w-4 h-4"
//                   />
//                   <ImageIcon className="w-4 h-4" />
//                   Image
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="type"
//                     value="video"
//                     checked={formData.type === 'video'}
//                     onChange={() => setFormData({ ...formData, type: 'video' })}
//                     className="w-4 h-4"
//                   />
//                   <Video className="w-4 h-4" />
//                   Video
//                 </label>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="src">
//                 {formData.type === 'video' ? 'Video URL *' : 'Image URL *'}
//               </Label>
//               <Input
//                 id="src"
//                 value={formData.src}
//                 onChange={(e) => setFormData({ ...formData, src: e.target.value })}
//                 placeholder={formData.type === 'video' ? 'https://...' : '/image.png'}
//               />
//             </div>

//             {formData.type === 'video' && (
//               <div className="space-y-2">
//                 <Label htmlFor="poster">Poster Image URL</Label>
//                 <Input
//                   id="poster"
//                   value={formData.poster}
//                   onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
//                   placeholder="/poster.png"
//                 />
//               </div>
//             )}

//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="active"
//                 checked={formData.active}
//                 onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
//                 className="w-4 h-4"
//               />
//               <Label htmlFor="active">Active (visible on website)</Label>
//             </div>
//           </div>

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleSave}
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               disabled={!formData.title || !formData.subtitle || !formData.src}
//             >
//               {editingSlide ? 'Save Changes' : 'Add Slide'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Delete Slide</DialogTitle>
//             <DialogDescription>
//               Are you sure you want to delete &quot;{deletingSlide?.title}&quot;? This action cannot be undone.
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

// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
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
//   Plus, 
//   Pencil, 
//   Trash2, 
//   GripVertical, 
//   Image as ImageIcon, 
//   Video,
//   Eye,
//   EyeOff,
//   Save
// } from 'lucide-react'
// import { motion, Reorder } from 'framer-motion'

// const PRIMARY_COLOR = '#243d80'

// interface HeroSlide {
//   id: string
//   title: string
//   subtitle: string
//   badge: string | null
//   type: string
//   src: string
//   poster: string | null
//   order: number
//   active: boolean
// }

// export default function HeroSlidesAdmin() {
//   const [slides, setSlides] = useState<HeroSlide[]>([])
//   const [loading, setLoading] = useState(true)
//   const [dialogOpen, setDialogOpen] = useState(false)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null)
//   const [deletingSlide, setDeletingSlide] = useState<HeroSlide | null>(null)
//   const [hasOrderChanged, setHasOrderChanged] = useState(false)
//   const [savingOrder, setSavingOrder] = useState(false)
//   const [formData, setFormData] = useState({
//     title: '',
//     subtitle: '',
//     badge: '',
//     type: 'image',
//     src: '',
//     poster: '',
//     active: true,
//   })

//   useEffect(() => {
//     fetchSlides()
//   }, [])

//   const fetchSlides = async () => {
//     try {
//       const res = await fetch('/api/hero-slides')
//       const data = await res.json()
//       // Sort by order
//       setSlides(data.sort((a: HeroSlide, b: HeroSlide) => a.order - b.order))
//       setHasOrderChanged(false)
//     } catch (error) {
//       console.error('Error fetching slides:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleReorder = (newOrder: HeroSlide[]) => {
//     setSlides(newOrder)
//     setHasOrderChanged(true)
//   }

//   const handleSaveOrder = async () => {
//     setSavingOrder(true)
//     try {
//       // Update order for each slide
//       const updates = slides.map((slide, index) => ({
//         id: slide.id,
//         order: index
//       }))

//       await fetch('/api/hero-slides/reorder', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ orders: updates }),
//       })

//       setHasOrderChanged(false)
//     } catch (error) {
//       console.error('Error saving order:', error)
//     } finally {
//       setSavingOrder(false)
//     }
//   }

//   const handleOpenDialog = (slide?: HeroSlide) => {
//     if (slide) {
//       setEditingSlide(slide)
//       setFormData({
//         title: slide.title,
//         subtitle: slide.subtitle,
//         badge: slide.badge || '',
//         type: slide.type,
//         src: slide.src,
//         poster: slide.poster || '',
//         active: slide.active,
//       })
//     } else {
//       setEditingSlide(null)
//       setFormData({
//         title: '',
//         subtitle: '',
//         badge: '',
//         type: 'image',
//         src: '',
//         poster: '',
//         active: true,
//       })
//     }
//     setDialogOpen(true)
//   }

//   const handleSave = async () => {
//     try {
//       const url = editingSlide 
//         ? `/api/hero-slides/${editingSlide.id}` 
//         : '/api/hero-slides'
//       const method = editingSlide ? 'PUT' : 'POST'

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       })

//       if (res.ok) {
//         fetchSlides()
//         setDialogOpen(false)
//       }
//     } catch (error) {
//       console.error('Error saving slide:', error)
//     }
//   }

//   const handleDelete = async () => {
//     if (!deletingSlide) return

//     try {
//       const res = await fetch(`/api/hero-slides/${deletingSlide.id}`, {
//         method: 'DELETE',
//       })

//       if (res.ok) {
//         fetchSlides()
//         setDeleteDialogOpen(false)
//         setDeletingSlide(null)
//       }
//     } catch (error) {
//       console.error('Error deleting slide:', error)
//     }
//   }

//   const handleToggleActive = async (slide: HeroSlide) => {
//     try {
//       await fetch(`/api/hero-slides/${slide.id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...slide, active: !slide.active }),
//       })
//       fetchSlides()
//     } catch (error) {
//       console.error('Error toggling slide:', error)
//     }
//   }

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
//           <h1 className="text-3xl font-bold text-gray-900">Hero Slides</h1>
//           <p className="text-gray-600 mt-1">Manage the homepage carousel slides. Drag to reorder.</p>
//         </div>
//         <div className="flex items-center gap-3">
//           {hasOrderChanged && (
//             <Button 
//               onClick={handleSaveOrder}
//               disabled={savingOrder}
//               variant="outline"
//               className="gap-2"
//               style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
//             >
//               <Save className="w-4 h-4" />
//               {savingOrder ? 'Saving...' : 'Save Order'}
//             </Button>
//           )}
//           <Button 
//             onClick={() => handleOpenDialog()}
//             style={{ backgroundColor: PRIMARY_COLOR }}
//           >
//             <Plus className="w-4 h-4 mr-2" />
//             Add Slide
//           </Button>
//         </div>
//       </div>

//       {/* Instructions */}
//       <Card className="bg-blue-50 border-blue-200">
//         <CardContent className="p-4">
//           <div className="flex items-center gap-3">
//             <GripVertical className="w-5 h-5 text-blue-600" />
//             <p className="text-sm text-blue-700">
//               <strong>Drag and drop</strong> slides to change their order. Click <strong>Save Order</strong> to apply changes.
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Slides List with Drag and Drop */}
//       {slides.length === 0 ? (
//         <Card>
//           <CardContent className="p-8 text-center text-gray-500">
//             <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
//             <p>No hero slides yet. Click &quot;Add Slide&quot; to create one.</p>
//           </CardContent>
//         </Card>
//       ) : (
//         <Reorder.Group 
//           axis="y" 
//           values={slides} 
//           onReorder={handleReorder}
//           className="space-y-3"
//         >
//           {slides.map((slide, index) => (
//             <Reorder.Item 
//               key={slide.id} 
//               value={slide}
//               className="cursor-grab active:cursor-grabbing"
//             >
//               <motion.div
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Card className={`${slide.active ? '' : 'opacity-60'} hover:shadow-md transition-shadow`}>
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-4">
//                       <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
//                         <GripVertical className="w-5 h-5 cursor-grab" />
//                         <span className="text-sm font-medium w-6 text-center">{index + 1}</span>
//                       </div>
                      
//                       <div 
//                         className="w-32 h-20 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0"
//                       >
//                         {slide.type === 'video' ? (
//                           <Video className="w-8 h-8 text-gray-400" />
//                         ) : slide.src ? (
//                           <img 
//                             src={slide.src} 
//                             alt={slide.title}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <ImageIcon className="w-8 h-8 text-gray-400" />
//                         )}
//                       </div>

//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2 mb-1 flex-wrap">
//                           <h3 className="font-semibold text-gray-900 truncate">{slide.title}</h3>
//                           {slide.badge && (
//                             <Badge variant="secondary" className="text-xs">{slide.badge}</Badge>
//                           )}
//                           <Badge 
//                             className={slide.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}
//                           >
//                             {slide.type}
//                           </Badge>
//                           {!slide.active && (
//                             <Badge variant="outline" className="text-gray-500">Hidden</Badge>
//                           )}
//                         </div>
//                         <p className="text-sm text-gray-600 line-clamp-2">{slide.subtitle}</p>
//                       </div>

//                       <div className="flex items-center gap-2 flex-shrink-0">
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleToggleActive(slide)}
//                           title={slide.active ? 'Deactivate' : 'Activate'}
//                         >
//                           {slide.active ? (
//                             <Eye className="w-4 h-4 text-green-600" />
//                           ) : (
//                             <EyeOff className="w-4 h-4 text-gray-400" />
//                           )}
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleOpenDialog(slide)}
//                         >
//                           <Pencil className="w-4 h-4 text-gray-600" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => {
//                             setDeletingSlide(slide)
//                             setDeleteDialogOpen(true)
//                           }}
//                         >
//                           <Trash2 className="w-4 h-4 text-red-500" />
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Reorder.Item>
//           ))}
//         </Reorder.Group>
//       )}

//       {/* Add/Edit Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle>{editingSlide ? 'Edit Slide' : 'Add New Slide'}</DialogTitle>
//             <DialogDescription>
//               {editingSlide ? 'Update the slide details below.' : 'Fill in the details for the new slide.'}
//             </DialogDescription>
//           </DialogHeader>
          
//           <div className="space-y-4 py-4">
//             <div className="space-y-2">
//               <Label htmlFor="title">Title *</Label>
//               <Input
//                 id="title"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 placeholder="Slide title"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="subtitle">Subtitle *</Label>
//               <Textarea
//                 id="subtitle"
//                 value={formData.subtitle}
//                 onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
//                 placeholder="Slide description"
//                 rows={3}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="badge">Badge Text</Label>
//               <Input
//                 id="badge"
//                 value={formData.badge}
//                 onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
//                 placeholder="e.g., Since 1993"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="type">Type</Label>
//               <div className="flex gap-4">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="type"
//                     value="image"
//                     checked={formData.type === 'image'}
//                     onChange={() => setFormData({ ...formData, type: 'image' })}
//                     className="w-4 h-4"
//                   />
//                   <ImageIcon className="w-4 h-4" />
//                   Image
//                 </label>
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="type"
//                     value="video"
//                     checked={formData.type === 'video'}
//                     onChange={() => setFormData({ ...formData, type: 'video' })}
//                     className="w-4 h-4"
//                   />
//                   <Video className="w-4 h-4" />
//                   Video
//                 </label>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="src">
//                 {formData.type === 'video' ? 'Video URL *' : 'Image URL *'}
//               </Label>
//               <Input
//                 id="src"
//                 value={formData.src}
//                 onChange={(e) => setFormData({ ...formData, src: e.target.value })}
//                 placeholder={formData.type === 'video' ? 'https://...' : '/image.png'}
//               />
//             </div>

//             {formData.type === 'video' && (
//               <div className="space-y-2">
//                 <Label htmlFor="poster">Poster Image URL</Label>
//                 <Input
//                   id="poster"
//                   value={formData.poster}
//                   onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
//                   placeholder="/poster.png"
//                 />
//               </div>
//             )}

//             <div className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="active"
//                 checked={formData.active}
//                 onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
//                 className="w-4 h-4"
//               />
//               <Label htmlFor="active">Active (visible on website)</Label>
//             </div>
//           </div>

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setDialogOpen(false)}>
//               Cancel
//             </Button>
//             <Button 
//               onClick={handleSave}
//               style={{ backgroundColor: PRIMARY_COLOR }}
//               disabled={!formData.title || !formData.subtitle || !formData.src}
//             >
//               {editingSlide ? 'Save Changes' : 'Add Slide'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Delete Slide</DialogTitle>
//             <DialogDescription>
//               Are you sure you want to delete &quot;{deletingSlide?.title}&quot;? This action cannot be undone.
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

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
  Plus, 
  Pencil, 
  Trash2, 
  GripVertical, 
  Image as ImageIcon, 
  Video,
  Eye,
  EyeOff,
  Save
} from 'lucide-react'
import { motion, Reorder } from 'framer-motion'

const PRIMARY_COLOR = '#243d80'

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  badge: string | null
  type: string
  src: string
  poster: string | null
  order: number
  active: boolean
}

export default function HeroSlidesAdmin() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null)
  const [deletingSlide, setDeletingSlide] = useState<HeroSlide | null>(null)
  const [hasOrderChanged, setHasOrderChanged] = useState(false)
  const [savingOrder, setSavingOrder] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    badge: '',
    type: 'image',
    src: '',
    poster: '',
    active: true,
  })

  useEffect(() => {
    fetchSlides()
  }, [])

  const fetchSlides = async () => {
    try {
      const res = await fetch('/api/hero-slides')
      const data = await res.json()
      // Sort by order
      setSlides(data.sort((a: HeroSlide, b: HeroSlide) => a.order - b.order))
      setHasOrderChanged(false)
    } catch (error) {
      console.error('Error fetching slides:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleReorder = (newOrder: HeroSlide[]) => {
    setSlides(newOrder)
    setHasOrderChanged(true)
  }

  const handleSaveOrder = async () => {
    setSavingOrder(true)
    try {
      // Update order for each slide
      const updates = slides.map((slide, index) => ({
        id: slide.id,
        order: index
      }))

      await fetch('/api/hero-slides/reorder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orders: updates }),
      })

      setHasOrderChanged(false)
    } catch (error) {
      console.error('Error saving order:', error)
    } finally {
      setSavingOrder(false)
    }
  }

  const handleOpenDialog = (slide?: HeroSlide) => {
    if (slide) {
      setEditingSlide(slide)
      setFormData({
        title: slide.title,
        subtitle: slide.subtitle,
        badge: slide.badge || '',
        type: slide.type,
        src: slide.src,
        poster: slide.poster || '',
        active: slide.active,
      })
    } else {
      setEditingSlide(null)
      setFormData({
        title: '',
        subtitle: '',
        badge: '',
        type: 'image',
        src: '',
        poster: '',
        active: true,
      })
    }
    setDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      const url = editingSlide 
        ? `/api/hero-slides/${editingSlide.id}` 
        : '/api/hero-slides'
      const method = editingSlide ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        fetchSlides()
        setDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving slide:', error)
    }
  }

  const handleDelete = async () => {
    if (!deletingSlide) return

    try {
      const res = await fetch(`/api/hero-slides/${deletingSlide.id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchSlides()
        setDeleteDialogOpen(false)
        setDeletingSlide(null)
      }
    } catch (error) {
      console.error('Error deleting slide:', error)
    }
  }

  const handleToggleActive = async (slide: HeroSlide) => {
    try {
      await fetch(`/api/hero-slides/${slide.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...slide, active: !slide.active }),
      })
      fetchSlides()
    } catch (error) {
      console.error('Error toggling slide:', error)
    }
  }

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
          <h1 className="text-3xl font-bold text-gray-900">Hero Slides</h1>
          <p className="text-gray-600 mt-1">Manage the homepage carousel slides. Drag to reorder.</p>
        </div>
        <div className="flex items-center gap-3">
          {hasOrderChanged && (
            <Button 
              onClick={handleSaveOrder}
              disabled={savingOrder}
              variant="outline"
              className="gap-2"
              style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
            >
              <Save className="w-4 h-4" />
              {savingOrder ? 'Saving...' : 'Save Order'}
            </Button>
          )}
          <Button 
            onClick={() => handleOpenDialog()}
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Slide
          </Button>
        </div>
      </div>

      {/* Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <GripVertical className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-blue-700">
              <strong>Drag and drop</strong> slides to change their order. Click <strong>Save Order</strong> to apply changes.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Slides List with Drag and Drop */}
      {slides.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-gray-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No hero slides yet. Click &quot;Add Slide&quot; to create one.</p>
          </CardContent>
        </Card>
      ) : (
        <Reorder.Group 
          axis="y" 
          values={slides} 
          onReorder={handleReorder}
          className="space-y-3"
        >
          {slides.map((slide, index) => (
            <Reorder.Item 
              key={slide.id} 
              value={slide}
              className="cursor-grab active:cursor-grabbing"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={`${slide.active ? '' : 'opacity-60'} hover:shadow-md transition-shadow`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
                        <GripVertical className="w-5 h-5 cursor-grab" />
                        <span className="text-sm font-medium w-6 text-center">{index + 1}</span>
                      </div>
                      
                      <div 
                        className="w-32 h-20 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0"
                      >
                        {slide.type === 'youtube' ? (
                          <div className="w-full h-full bg-red-100 flex items-center justify-center">
                            <Video className="w-8 h-8 text-red-500" />
                          </div>
                        ) : slide.type === 'video' ? (
                          <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                            <Video className="w-8 h-8 text-purple-500" />
                          </div>
                        ) : slide.src ? (
                          <img 
                            src={slide.src} 
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-gray-900 truncate">{slide.title}</h3>
                          {slide.badge && (
                            <Badge variant="secondary" className="text-xs">{slide.badge}</Badge>
                          )}
                          <Badge 
                            className={
                              slide.type === 'youtube' 
                                ? 'bg-red-100 text-red-700' 
                                : slide.type === 'video' 
                                  ? 'bg-purple-100 text-purple-700' 
                                  : 'bg-blue-100 text-blue-700'
                            }
                          >
                            {slide.type}
                          </Badge>
                          {!slide.active && (
                            <Badge variant="outline" className="text-gray-500">Hidden</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{slide.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleToggleActive(slide)}
                          title={slide.active ? 'Deactivate' : 'Activate'}
                        >
                          {slide.active ? (
                            <Eye className="w-4 h-4 text-green-600" />
                          ) : (
                            <EyeOff className="w-4 h-4 text-gray-400" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleOpenDialog(slide)}
                        >
                          <Pencil className="w-4 h-4 text-gray-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setDeletingSlide(slide)
                            setDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingSlide ? 'Edit Slide' : 'Add New Slide'}</DialogTitle>
            <DialogDescription>
              {editingSlide ? 'Update the slide details below.' : 'Fill in the details for the new slide.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Slide title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle *</Label>
              <Textarea
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="Slide description"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="badge">Badge Text</Label>
              <Input
                id="badge"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="e.g., Since 1993"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="image"
                    checked={formData.type === 'image'}
                    onChange={() => setFormData({ ...formData, type: 'image' })}
                    className="w-4 h-4"
                  />
                  <ImageIcon className="w-4 h-4" />
                  Image
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="video"
                    checked={formData.type === 'video'}
                    onChange={() => setFormData({ ...formData, type: 'video' })}
                    className="w-4 h-4"
                  />
                  <Video className="w-4 h-4" />
                  Video (MP4)
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="youtube"
                    checked={formData.type === 'youtube'}
                    onChange={() => setFormData({ ...formData, type: 'youtube' })}
                    className="w-4 h-4"
                  />
                  <Video className="w-4 h-4 text-red-500" />
                  YouTube
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="src">
                {formData.type === 'youtube' ? 'YouTube URL *' : formData.type === 'video' ? 'Video URL *' : 'Image URL *'}
              </Label>
              <Input
                id="src"
                value={formData.src}
                onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                placeholder={
                  formData.type === 'youtube' 
                    ? 'https://www.youtube.com/watch?v=...' 
                    : formData.type === 'video' 
                      ? 'https://...video.mp4' 
                      : '/image.png'
                }
              />
              {formData.type === 'youtube' && (
                <p className="text-xs text-gray-500">
                  Paste any YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID or https://youtu.be/VIDEO_ID)
                </p>
              )}
            </div>

            {(formData.type === 'video' || formData.type === 'youtube') && (
              <div className="space-y-2">
                <Label htmlFor="poster">Poster Image URL (optional)</Label>
                <Input
                  id="poster"
                  value={formData.poster}
                  onChange={(e) => setFormData({ ...formData, poster: e.target.value })}
                  placeholder="/poster.png"
                />
                <p className="text-xs text-gray-500">
                  {formData.type === 'youtube' 
                    ? 'Image to show before YouTube video loads' 
                    : 'Thumbnail image to show before video plays'}
                </p>
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="active"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="active">Active (visible on website)</Label>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={!formData.title || !formData.subtitle || !formData.src}
            >
              {editingSlide ? 'Save Changes' : 'Add Slide'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Slide</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{deletingSlide?.title}&quot;? This action cannot be undone.
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
    </div>
  )
}

