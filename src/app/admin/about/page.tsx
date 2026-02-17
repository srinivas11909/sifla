'use client'

import { useState, useEffect } from 'react'
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
  Plus, 
  Pencil, 
  Trash2, 
  GripVertical,
  Calendar
} from 'lucide-react'

const PRIMARY_COLOR = '#243d80'

interface Milestone {
  id: string
  year: string
  title: string
  description: string
  order: number
  active: boolean
}

interface AboutContent {
  id: string
  section: string
  title: string
  subtitle: string | null
  content: string
  active: boolean
}

export default function AboutAdmin() {
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [aboutContent, setAboutContent] = useState<AboutContent[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'content' | 'milestones'>('content')
  
  // Milestone dialog
  const [milestoneDialogOpen, setMilestoneDialogOpen] = useState(false)
  const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null)
  const [milestoneForm, setMilestoneForm] = useState({
    year: '',
    title: '',
    description: '',
    active: true,
  })
  
  // Content dialog
  const [contentDialogOpen, setContentDialogOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<AboutContent | null>(null)
  const [contentForm, setContentForm] = useState({
    section: '',
    title: '',
    subtitle: '',
    content: '',
    active: true,
  })

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [deletingMilestone, setDeletingMilestone] = useState<Milestone | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [milestonesRes, contentRes] = await Promise.all([
        fetch('/api/milestones'),
        fetch('/api/about-content'),
      ])

      const milestonesData = await milestonesRes.json()
      const contentData = await contentRes.json()

      setMilestones(milestonesData)
      setAboutContent(contentData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Milestone handlers
  const handleOpenMilestoneDialog = (milestone?: Milestone) => {
    if (milestone) {
      setEditingMilestone(milestone)
      setMilestoneForm({
        year: milestone.year,
        title: milestone.title,
        description: milestone.description,
        active: milestone.active,
      })
    } else {
      setEditingMilestone(null)
      setMilestoneForm({ year: '', title: '', description: '', active: true })
    }
    setMilestoneDialogOpen(true)
  }

  const handleSaveMilestone = async () => {
    try {
      const url = editingMilestone 
        ? `/api/milestones/${editingMilestone.id}` 
        : '/api/milestones'
      const method = editingMilestone ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(milestoneForm),
      })

      if (res.ok) {
        fetchData()
        setMilestoneDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving milestone:', error)
    }
  }

  const handleDeleteMilestone = async () => {
    if (!deletingMilestone) return

    try {
      const res = await fetch(`/api/milestones/${deletingMilestone.id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        fetchData()
        setDeleteDialogOpen(false)
        setDeletingMilestone(null)
      }
    } catch (error) {
      console.error('Error deleting milestone:', error)
    }
  }

  // Content handlers
  const handleOpenContentDialog = (content?: AboutContent) => {
    if (content) {
      setEditingContent(content)
      setContentForm({
        section: content.section,
        title: content.title,
        subtitle: content.subtitle || '',
        content: content.content,
        active: content.active,
      })
    } else {
      setEditingContent(null)
      setContentForm({ section: '', title: '', subtitle: '', content: '', active: true })
    }
    setContentDialogOpen(true)
  }

  const handleSaveContent = async () => {
    try {
      const res = await fetch('/api/about-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentForm),
      })

      if (res.ok) {
        fetchData()
        setContentDialogOpen(false)
      }
    } catch (error) {
      console.error('Error saving content:', error)
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
          <h1 className="text-3xl font-bold text-gray-900">About Page Content</h1>
          <p className="text-gray-600 mt-1">Manage about page sections and milestones</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b pb-2">
        <Button
          variant={activeTab === 'content' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('content')}
          style={activeTab === 'content' ? { backgroundColor: PRIMARY_COLOR } : {}}
        >
          Page Content
        </Button>
        <Button
          variant={activeTab === 'milestones' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('milestones')}
          style={activeTab === 'milestones' ? { backgroundColor: PRIMARY_COLOR } : {}}
        >
          Milestones
        </Button>
      </div>

      {/* Content Tab */}
      {activeTab === 'content' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button 
              onClick={() => handleOpenContentDialog()}
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </div>

          {aboutContent.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                <p>No content sections yet. Click &quot;Add Section&quot; to create one.</p>
              </CardContent>
            </Card>
          ) : (
            aboutContent.map((content) => (
              <Card key={content.id} className={content.active ? '' : 'opacity-60'}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary">{content.section}</Badge>
                        {!content.active && <Badge variant="outline">Inactive</Badge>}
                      </div>
                      <h3 className="font-semibold text-gray-900">{content.title}</h3>
                      {content.subtitle && (
                        <p className="text-sm text-gray-600">{content.subtitle}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleOpenContentDialog(content)}
                    >
                      <Pencil className="w-4 h-4 text-gray-600" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      {/* Milestones Tab */}
      {activeTab === 'milestones' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button 
              onClick={() => handleOpenMilestoneDialog()}
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Milestone
            </Button>
          </div>

          {milestones.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No milestones yet. Click &quot;Add Milestone&quot; to create one.</p>
              </CardContent>
            </Card>
          ) : (
            milestones.map((milestone, index) => (
              <Card key={milestone.id} className={milestone.active ? '' : 'opacity-60'}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <GripVertical className="w-5 h-5 cursor-move" />
                    </div>
                    
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${PRIMARY_COLOR}15` }}
                    >
                      <span className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
                        {milestone.year}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleOpenMilestoneDialog(milestone)}
                      >
                        <Pencil className="w-4 h-4 text-gray-600" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setDeletingMilestone(milestone)
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
      )}

      {/* Milestone Dialog */}
      <Dialog open={milestoneDialogOpen} onOpenChange={setMilestoneDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingMilestone ? 'Edit Milestone' : 'Add New Milestone'}</DialogTitle>
            <DialogDescription>
              {editingMilestone ? 'Update the milestone details.' : 'Add a new company milestone.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year *</Label>
              <Input
                id="year"
                value={milestoneForm.year}
                onChange={(e) => setMilestoneForm({ ...milestoneForm, year: e.target.value })}
                placeholder="e.g., 1993"
                maxLength={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mtitle">Title *</Label>
              <Input
                id="mtitle"
                value={milestoneForm.title}
                onChange={(e) => setMilestoneForm({ ...milestoneForm, title: e.target.value })}
                placeholder="e.g., Company Founded"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={milestoneForm.description}
                onChange={(e) => setMilestoneForm({ ...milestoneForm, description: e.target.value })}
                placeholder="Describe this milestone..."
                rows={3}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="mactive"
                checked={milestoneForm.active}
                onChange={(e) => setMilestoneForm({ ...milestoneForm, active: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="mactive">Active (visible on website)</Label>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setMilestoneDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveMilestone}
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={!milestoneForm.year || !milestoneForm.title || !milestoneForm.description}
            >
              {editingMilestone ? 'Save Changes' : 'Add Milestone'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Content Dialog */}
      <Dialog open={contentDialogOpen} onOpenChange={setContentDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingContent ? 'Edit Section' : 'Add New Section'}</DialogTitle>
            <DialogDescription>
              {editingContent ? 'Update the section content.' : 'Add a new about page section.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="section">Section ID *</Label>
              <Input
                id="section"
                value={contentForm.section}
                onChange={(e) => setContentForm({ ...contentForm, section: e.target.value })}
                placeholder="e.g., hero, story, mission"
                disabled={!!editingContent}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ctitle">Title *</Label>
              <Input
                id="ctitle"
                value={contentForm.title}
                onChange={(e) => setContentForm({ ...contentForm, title: e.target.value })}
                placeholder="Section title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="csubtitle">Subtitle</Label>
              <Input
                id="csubtitle"
                value={contentForm.subtitle}
                onChange={(e) => setContentForm({ ...contentForm, subtitle: e.target.value })}
                placeholder="Optional subtitle"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ccontent">Content (JSON)</Label>
              <Textarea
                id="ccontent"
                value={contentForm.content}
                onChange={(e) => setContentForm({ ...contentForm, content: e.target.value })}
                placeholder='{"paragraphs": ["Paragraph 1", "Paragraph 2"]}'
                rows={5}
                className="font-mono text-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="cactive"
                checked={contentForm.active}
                onChange={(e) => setContentForm({ ...contentForm, active: e.target.checked })}
                className="w-4 h-4"
              />
              <Label htmlFor="cactive">Active (visible on website)</Label>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setContentDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSaveContent}
              style={{ backgroundColor: PRIMARY_COLOR }}
              disabled={!contentForm.section || !contentForm.title}
            >
              {editingContent ? 'Save Changes' : 'Add Section'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Milestone</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{deletingMilestone?.title}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteMilestone}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
