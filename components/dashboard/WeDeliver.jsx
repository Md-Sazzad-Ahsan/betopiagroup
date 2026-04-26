import React, { useState, useEffect } from 'react'

function WeDeliver() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    type: 'success',
    message: ''
  })

  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    cards: [
      {
        heading: '',
        subHeadings: ['']
      },
      {
        heading: '',
        subHeadings: ['']
      },
      {
        heading: '',
        subHeadings: ['']
      }
    ],
    note: ''
  })

  const [originalData, setOriginalData] = useState({
    title: '',
    subTitle: '',
    cards: [
      {
        heading: '',
        subHeadings: ['']
      },
      {
        heading: '',
        subHeadings: ['']
      },
      {
        heading: '',
        subHeadings: ['']
      }
    ],
    note: ''
  })

  // Fetch data on component mount
  useEffect(() => {
    fetchWeDeliverData()
  }, [])

  const fetchWeDeliverData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/whatwedeliver')
      const data = await response.json()
      
      if (response.ok) {
        const weDeliverData = {
          title: data.title || '',
          subTitle: data.subTitle || '',
          cards: data.cards && data.cards.length >= 3 ? data.cards.map(card => ({ heading: card.heading, subHeadings: [card.subHeadings[0]] })) : [
            { heading: '', subHeadings: [''] },
            { heading: '', subHeadings: [''] },
            { heading: '', subHeadings: [''] }
          ],
          note: data.note || ''
        }
        
        setFormData(weDeliverData)
        setOriginalData(weDeliverData)
      } else {
        console.error('Error fetching WeDeliver data:', data.error)
      }
    } catch (error) {
      console.error('Error fetching WeDeliver data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCardChange = (cardIndex, field, value) => {
    setFormData(prev => ({
      ...prev,
      cards: prev.cards.map((card, index) => 
        index === cardIndex 
          ? { ...card, [field]: value }
          : card
      )
    }))
  }

  const handleSubHeadingChange = (cardIndex, subIndex, value) => {
    setFormData(prev => ({
      ...prev,
      cards: prev.cards.map((card, index) => 
        index === cardIndex 
          ? {
              ...card,
              subHeadings: card.subHeadings.map((sub, sIndex) => 
                sIndex === subIndex ? value : sub
              )
            }
          : card
      )
    }))
  }

  const addSubHeading = (cardIndex) => {
    setFormData(prev => ({
      ...prev,
      cards: prev.cards.map((card, index) => 
        index === cardIndex 
          ? {
              ...card,
              subHeadings: [...card.subHeadings, '']
            }
          : card
      )
    }))
  }

  const removeSubHeading = (cardIndex, subIndex) => {
    setFormData(prev => ({
      ...prev,
      cards: prev.cards.map((card, index) => 
        index === cardIndex 
          ? {
              ...card,
              subHeadings: card.subHeadings.filter((_, sIndex) => sIndex !== subIndex)
            }
          : card
      )
    }))
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      const response = await fetch('/api/whatwedeliver', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (response.ok) {
        setOriginalData(formData)
        setIsEditing(false)
        showNotification('success', 'What We Deliver content saved successfully!')
      } else {
        showNotification('error', result.error || 'Failed to save changes')
      }
    } catch (error) {
      showNotification('error', 'Error saving changes')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    setFormData(originalData)
    setIsEditing(false)
  }

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message
    })
    
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }))
    }, 3000)
  }

  const cardNames = ['Card One', 'Card Two', 'Card Three']

  return (
    <>
      {/* Notification Popup */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center">
            <div className="shrink-0">
              {notification.type === 'success' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-start text-gray-500 gap-10">
       <div>
         <h1 className="text-2xl font-bold">Update What We Deliver</h1>
         <p className="text-sm text-gray-600">Update the content for what we deliver section</p>
       </div>
       <div className='flex-1 max-w-2xl'>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">Loading content...</div>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {/* Title Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter Title" 
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors"
                  />
                </div>

                {/* Sub Title Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sub Title</label>
                  <textarea 
                    placeholder="Enter Sub Title" 
                    value={formData.subTitle}
                    onChange={(e) => handleInputChange('subTitle', e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors resize-none"
                  />
                </div>

                {/* Cards Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cards</label>
                  
                  {/* Card Tabs */}
                  <div className="flex space-x-1 mb-4">
                    {cardNames.map((name, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCard(index)}
                        className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                          activeCard === index
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>

                  {/* Card Content */}
                  <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none">
                    <div className="space-y-4">
                      {/* Card Heading */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Heading</label>
                        <input 
                          type="text" 
                          placeholder={`Enter ${cardNames[activeCard]} Heading`}
                          value={formData.cards[activeCard].heading}
                          onChange={(e) => handleCardChange(activeCard, 'heading', e.target.value)}
                          disabled={!isEditing}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 transition-colors"
                        />
                      </div>

                      {/* Sub Headings */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sub Headings</label>
                        <div className="space-y-2">
                          {formData.cards[activeCard].subHeadings.map((subHeading, subIndex) => (
                            <div key={subIndex} className="flex gap-2">
                              <input 
                                type="text" 
                                placeholder={`Enter Sub Heading ${subIndex + 1}`}
                                value={subHeading}
                                onChange={(e) => handleSubHeadingChange(activeCard, subIndex, e.target.value)}
                                disabled={!isEditing}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-200 transition-colors"
                              />
                              {isEditing && formData.cards[activeCard].subHeadings.length > 1 && (
                                <button
                                  onClick={() => removeSubHeading(activeCard, subIndex)}
                                  className="px-3 py-2 text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition-colors"
                                  title="Remove subheading"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                        {isEditing && (
                          <button
                            onClick={() => addSubHeading(activeCard)}
                            className="mt-2 px-4 py-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                          >
                            + Add More
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Note Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Note</label>
                  <textarea 
                    placeholder="Enter Note" 
                    value={formData.note}
                    onChange={(e) => handleInputChange('note', e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 mt-6">
                {isEditing ? (
                  <>
                    <button 
                      onClick={handleCancel}
                      disabled={saving}
                      className="px-6 py-2.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSave}
                      disabled={saving}
                      className="px-6 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleEdit}
                    className="px-6 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Edit Content
                  </button>
                )}
              </div>
            </>
          )}
       </div>
      </div>
    </>
  )
}

export default WeDeliver