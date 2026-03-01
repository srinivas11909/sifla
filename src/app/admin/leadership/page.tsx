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
  Users,
  Eye,
  EyeOff,
  GripVertical,
  Linkedin,
  Twitter,
  Mail,
  X
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

interface Leader {
  id: string
  name: string
  designation: string
  image: string
  bio: string
  achievements: string[]
  linkedin: string
  twitter: string
  email: string
  order: number
  active: boolean
}

export default function LeadershipAdmin() {
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editingLeader, setEditingLeader] = useState<Leader | null>(null)
  const [deletingLeader, setDeletingLeader] = useState<Leader | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    image: '',
    bio: '',
    achievements: [] as string[],
    linkedin: '',
    twitter: '',
    email: '',
    active: true,
  })
  const [newAchievement, setNewAchievement] = useState('')

  useEffect(() => {
    fetchLeaders()
  }, [])

  const fetchLeaders = async () => {
    try {
      const res = await fetch('/api/leadership')
      const data = await res.json()
      setLeaders(data)
    } catch (error) {
      console.error('Error fetching leadership:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenDialog = (leader?: Leader) => {
    if (leader) {
      setEditingLeader(leader)
      setFormData({
        name: leader.name,
        designation: leader.designation,
        image: leader.image,
        bio: leader.bio,
        achievements: leader.achievements || [],
        linkedin: leader.linkedin,
        twitter: leader.twitter,
        email: leader.email,
        active: leader.active,
      })
    } else {
      setEditingLeader(null)
      setFormData({
        name: '',
        designation: '',
        image: '',
        bio: '',
        achievements: [],
        linkedin: '',
        twitter: '',
        email: '',
        active: true,
      })
    }
    setDialogOpen(true)
  }

  const handleSave = async () => {
    try {
      const url = editingLeader 
        ? `/api/leadership/${editingLeader.id}` 
        : '/api/leadership'
      const method = editingLeader ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        fetchLeaders()
        setDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving leadership:', error)
    }
  }

  const handleDelete = async () => {
    if (!deletingLeader) return

    try {
      const res = await fetch(`/api/leadership/${deletingLeader.id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchLeaders()
        setDeleteDialogOpen(false)
        setDeletingLeader(null)
      }
    } catch (error) {
      console.error('Error deleting leadership:', error)
    }
  }

  const handleToggleActive = async (leader: Leader) => {
    try {
      await fetch(`/api/leadership/${leader.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...leader, active: !leader.active }),
      })
      fetchLeaders()
    } catch (error) {
      console.error('Error toggling leader:', error)
    }
  }

  const addAchievement = () => {
    if (newAchievement.trim()) {
      setFormData({ 
        ...formData, 
        achievements: [...formData.achievements, newAchievement.trim()] 
      })
      setNewAchievement('')
    }
  }

  const removeAchievement = (index: number) => {
    setFormData({ 
      ...formData, 
      achievements: formData.achievements.filter((_, i) => i !== index) 
    })
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
          <h1 className="text-3xl font-bold text-gray-900">Leadership</h1>
          <p className="text-gray-600 mt-1">Manage leadership team members</p>
        </div>
        <Button 
          onClick={() => handleOpenDialog()}
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Leader
        </Button>
      </div>

      {/* Leaders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {leaders.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="p-8 text-center text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No leadership members found. Click &quot;Add Leader&quot; to create one.</p>
            </CardContent>
          </Card>
        ) : (
          leaders.map((leader) => (
            <Card key={leader.id} className={leader.active ? '' : 'opacity-60'}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    {leader.image ? (
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    ) : (
                      <div 
                        className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        {leader.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{leader.name}</h3>
                    <p className="text-sm truncate" style={{ color: PRIMARY_COLOR }}>
                      {leader.designation}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-2 mt-1">
                      {leader.linkedin && (
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {leader.twitter && (
                        <a href={leader.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500">
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {leader.email && (
                        <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-red-500">
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Order Badge */}
                  <Badge variant="outline" className="flex-shrink-0">
                    #{leader.order}
                  </Badge>
                </div>

                {/* Bio */}
                {leader.bio && (
                  <p className="text-sm text-gray-600 mt-3 line-clamp-2">{leader.bio}</p>
                )}

                {/* Achievements */}
                {leader.achievements && leader.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {leader.achievements.slice(0, 2).map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                    {leader.achievements.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{leader.achievements.length - 2}
                      </Badge>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleToggleActive(leader)}
                    title={leader.active ? 'Deactivate' : 'Activate'}
                  >
                    {leader.active ? (
                      <Eye className="w-4 h-4 text-green-600" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    )}
                  </Button>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleOpenDialog(leader)}
                    >
                      <Pencil className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setDeletingLeader(leader)
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
            <DialogTitle>{editingLeader ? 'Edit Leader' : 'Add New Leader'}</DialogTitle>
            <DialogDescription>
              {editingLeader ? 'Update the leader details.' : 'Add a new leadership team member.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Dr. Rajesh Kumar"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder="e.g., Founder & Chairman"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
              {formData.image && (
                <div className="mt-2">
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    className="w-24 h-24 rounded-lg object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                placeholder="Brief biography..."
                rows={3}
              />
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <Label>Key Achievements</Label>
              <div className="flex gap-2">
                <Input
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder="Add achievement..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAchievement())}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={addAchievement}
                  disabled={!newAchievement.trim()}
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.achievements.map((achievement, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-gray-200"
                    onClick={() => removeAchievement(index)}
                  >
                    {achievement}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin">
                  <Linkedin className="w-4 h-4 inline mr-1" />
                  LinkedIn URL
                </Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter">
                  <Twitter className="w-4 h-4 inline mr-1" />
                  Twitter URL
                </Label>
                <Input
                  id="twitter"
                  value={formData.twitter}
                  onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                  placeholder="https://twitter.com/..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                />
              </div>
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

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={!formData.name || !formData.designation}
            >
              {editingLeader ? 'Save Changes' : 'Add Leader'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Leader</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{deletingLeader?.name}&quot;? This action cannot be undone.
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
