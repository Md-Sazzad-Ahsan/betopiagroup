import React, { useState, useEffect } from 'react'

function Landing() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    buttonOne: '',
    buttonTwo: ''
  })
  const [originalData, setOriginalData] = useState({
    title: '',
    subTitle: '',
    buttonOne: '',
    buttonTwo: ''
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [notification, setNotification] = useState({
    show: false,
    type: 'success',
    message: ''
  })

  // Fetch landing data on component mount
  useEffect(() => {
    fetchLandingData()
  }, [])

  const fetchLandingData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/landing')
      const data = await response.json()
      
      if (response.ok) {
        // Extract button text if button objects exist
        const landingData = {
          title: data.title || '',
          subTitle: data.subTitle || '',
          buttonOne: data.buttonOne?.text || data.buttonOne || '',
          buttonTwo: data.buttonTwo?.text || data.buttonTwo || ''
        }
        
        setFormData(landingData)
        setOriginalData(landingData)
      } else {
        console.error('Error fetching landing data:', data.error)
      }
    } catch (error) {
      console.error('Error fetching landing data:', error)
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

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      const response = await fetch('/api/landing', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      
      if (response.ok) {
        console.log('Data saved successfully:', result)
        setOriginalData(formData)
        setIsEditing(false)
        showNotification('success', 'Landing content saved successfully!')
      } else {
        console.error('Error saving data:', result.error)
        showNotification('error', result.error || 'Failed to save changes')
      }
    } catch (error) {
      console.error('Error saving data:', error)
      showNotification('error', 'Error saving changes')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    // Revert to original data
    setFormData(originalData)
    setIsEditing(false)
  }

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message
    })
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }))
    }, 3000)
  }

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
         <h1 className="text-2xl font-bold">Update Landing Page</h1>
         <p className="text-sm text-gray-600">Update the content for your landing page</p>
       </div>
       <div className='flex-1 max-w-2xl'>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-gray-500">Loading landing content...</div>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {/* Title Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter Title for Landing Page" 
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
                    placeholder="Enter Sub Title for Landing Page" 
                    value={formData.subTitle}
                    onChange={(e) => handleInputChange('subTitle', e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors resize-none"
                  />
                </div>

                {/* Button One Text Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button One</label>
                  <input 
                    type="text" 
                    placeholder="Enter First Button Text" 
                    value={formData.buttonOne}
                    onChange={(e) => handleInputChange('buttonOne', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors"
                  />
                </div>

                {/* Button Two Text Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Two</label>
                  <input 
                    type="text" 
                    placeholder="Enter Second Button Text" 
                    value={formData.buttonTwo}
                    onChange={(e) => handleInputChange('buttonTwo', e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 transition-colors"
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

export default Landing