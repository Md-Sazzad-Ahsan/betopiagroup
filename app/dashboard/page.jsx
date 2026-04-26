"use client"
import { useState } from 'react'

// Import all dashboard components
import Landing from '@/components/dashboard/Landing'
import WeDeliver from '@/components/dashboard/WeDeliver'
import GrowthJourney from '@/components/dashboard/GrowthJourney'
import Expertise from '@/components/dashboard/Expertise'
import WhatYouGet from '@/components/dashboard/WhatYouGet'
import Vision from '@/components/dashboard/Vision'
import GettingStarted from '@/components/dashboard/GettingStarted'
import ContactProcess from '@/components/dashboard/ContactProcess'
import SectionDivider from '@/components/dashboard/SectionDivider'
import Testimonials from '@/components/dashboard/Testimonials'

function dashboard() {
  const [activeComponent, setActiveComponent] = useState('overview')

  const components = {
    'Landing Page': Landing,
    'What We Deliver': WeDeliver,
    'Growth Journey': GrowthJourney,
    'Our Expertise': Expertise,
    'What You Get': WhatYouGet,
    'Vision': Vision,
    'Getting Started': GettingStarted,
    'Contact Process': ContactProcess,
    'Section Divider': SectionDivider,
    'Testimonials': Testimonials,
  }

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName)
  }

  const ActiveComponent = components[activeComponent]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <nav className="space-y-2">
            {Object.keys(components).map((componentName) => (
              <button
                key={componentName}
                onClick={() => handleNavClick(componentName)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left ${
                  activeComponent === componentName
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="ml-3">{componentName}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {activeComponent === 'overview' ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome to your dashboard. Select an option from the sidebar to get started.</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{activeComponent}</h1>
            <div className="bg-gray-100 rounded-lg shadow-sm p-6">
              <ActiveComponent />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default dashboard