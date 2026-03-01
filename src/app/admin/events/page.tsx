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
  Calendar,
  MapPin,
  Eye,
  EyeOff,
  ImageIcon,
  X,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

const EVENT_TYPES = [
  { value: 'exhibition', label: 'Exhibition' },
  { value: 'conference', label: 'Conference' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'award', label: 'Award Ceremony' },
  { value: 'training', label: 'Training Program' },
  { value: 'launch', label: 'Product Launch' },
  { value: 'general', label: 'General Event' },
]

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  images: string[]
  eventType: string
  featured: boolean
  active: boolean
  order: number
}

export default function EventsAdmin() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [deletingEvent, setDeletingEvent] = useState<Event | null>(null)
  const [filterType, setFilterType] = useState<string>('all')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    images: [] as string[],
    eventType: 'general',
    featured: false,
    active: true,
  })
  const [newImageUrl, setNewImageUrl] = useState('')

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events')
      const data = await res.json()
      setEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (event?: Event) => {
    if (event) {
      setEditingEvent(event)
      setFormData({
        title: event.title,
        description: event.description,
        date: event.date ? event.date.split('T')[0] : '',
        location: event.location,
        images: event.images || [],
        eventType: event.eventType,
        featured: event.featured,
        active: event.active,
      })
    } else {
      setEditingEvent(null)
      setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        images: [],
        eventType: 'general',
        featured: false,
        active: true,
      })
    }
    setDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      const url = editingEvent 
        ? `/api/events/${editingEvent.id}` 
        : '/api/events'
      const method = editingEvent ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        fetchEvents()
        setDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving event:', error)
    }
  }

  const handleDelete = async () => {
    if (!deletingEvent) return

    try {
      const res = await fetch(`/api/events/${deletingEvent.id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchEvents()
        setDeleteDialogOpen(false)
        setDeletingEvent(null)
      }
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  const handleToggleActive = async (event: Event) => {
    try {
      await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...event, active: !event.active }),
      })
      fetchEvents()
    } catch (error) {
      console.error('Error toggling event:', error)
    }
  }

  const handleToggleFeatured = async (event: Event) => {
    try {
      await fetch(`/api/events/${event.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...event, featured: !event.featured }),
      })
      fetchEvents()
    } catch (error) {
      console.error('Error toggling featured:', error)
    }
  }

  const addImage = () => {
    if (newImageUrl.trim()) {
      setFormData({ 
        ...formData, 
        images: [...formData.images, newImageUrl.trim()] 
      })
      setNewImageUrl('')
    }
  }

  const removeImage = (index: number) => {
    setFormData({ 
      ...formData, 
      images: formData.images.filter((_, i) => i !== index) 
    })
  }

  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(e => e.eventType === filterType)

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return dateString
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
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Manage events and exhibitions</p>
        </div>
        <Button 
          onClick={() => handleOpenDialog()}
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-4">
        <Label>Filter by type:</Label>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            {EVENT_TYPES.map(type => (
              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="p-8 text-center text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No events found. Click &quot;Add Event&quot; to create one.</p>
            </CardContent>
          </Card>
        ) : (
          filteredEvents.map((event) => (
            <Card key={event.id} className={event.active ? '' : 'opacity-60'}>
              <CardContent className="p-4">
                {/* Image Preview */}
                {event.images && event.images.length > 0 ? (
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4 bg-gray-100">
                    <img 
                      src={event.images[0]} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    {event.images.length > 1 && (
                      <Badge className="absolute bottom-2 right-2 bg-black/50">
                        <ImageIcon className="w-3 h-3 mr-1" />
                        {event.images.length}
                      </Badge>
                    )}
                    {event.featured && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500 text-yellow-900">
                        <Star className="w-3 h-3 mr-1 fill-yellow-900" />
                        Featured
                      </Badge>
                    )}
                  </div>
                ) : (
                  <div 
                    className="h-40 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                  >
                    <Calendar className="w-12 h-12" style={{ color: PRIMARY_COLOR }} />
                  </div>
                )}

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{event.title}</h3>
                    <Badge variant="outline" className="flex-shrink-0 ml-2">
                      {EVENT_TYPES.find(t => t.value === event.eventType)?.label}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                  </div>
                  
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  )}

                  {event.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleFeatured(event)}
                      title={event.featured ? 'Remove from featured' : 'Add to featured'}
                    >
                      <Star className={`w-4 h-4 ${event.featured ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleToggleActive(event)}
                      title={event.active ? 'Deactivate' : 'Activate'}
                    >
                      {event.active ? (
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
                      onClick={() => handleOpenDialog(event)}
                    >
                      <Pencil className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setDeletingEvent(event)
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
            <DialogDescription>
              {editingEvent ? 'Update the event details.' : 'Add a new event.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Poultry India Expo 2024"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type *</Label>
                <Select 
                  value={formData.eventType} 
                  onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {EVENT_TYPES.map(type => (
                      <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Hyderabad, India"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Event description..."
                rows={3}
              />
            </div>

            {/* Images */}
            <div className="space-y-2">
              <Label>Event Images</Label>
              <div className="flex gap-2">
                <Input
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Add image URL..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addImage())}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={addImage}
                  disabled={!newImageUrl.trim()}
                >
                  Add
                </Button>
              </div>
              
              {/* Image Previews */}
              {formData.images.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`Image ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
                <Label htmlFor="active">Active (show on website)</Label>
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
              disabled={!formData.title}
            >
              {editingEvent ? 'Save Changes' : 'Add Event'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{deletingEvent?.title}&quot;? This action cannot be undone.
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
