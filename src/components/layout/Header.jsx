
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button';

export const Header = () => {
  return (
        <header className="bg-white border-b shadow-sm px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            FleetTrack
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link to="/vehicles" className="text-gray-700 hover:text-blue-600 font-medium">
              Vehicles
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Analytics
            </Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden md:inline">
            Performance Test: Redux
          </span>
          <Button variant="secondary" size="sm">
            Refresh
          </Button>
        </div>
      </div>
    </header>
  )
}




