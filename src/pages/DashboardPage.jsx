
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { TelemetryControlPanel } from '../components/TelemetryControlPanel'

const DashboardPage = () => {

    // These would come from Redux store later
  const fleetCount = 5
  const totalVehicles = 2500
  const activeVehicles = 1200
  const idleVehicles = 800
  const maintenanceVehicles = 500

  const handleSimulationStart = (params) => {
    console.log('Start telemetry simulation:', params)
    // Dispatch action to start simulation
  }

  return (
       <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Fleet Dashboard</h1>
        <p className="text-gray-600">Overview of your fleets and vehicles</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow">
          <h3 className="text-lg font-semibold">Fleets</h3>
          <p className="text-3xl font-bold mt-2">{fleetCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow">
          <h3 className="text-lg font-semibold">Total Vehicles</h3>
          <p className="text-3xl font-bold mt-2">{totalVehicles}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow">
          <h3 className="text-lg font-semibold">Active</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">{activeVehicles}</p>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow">
          <h3 className="text-lg font-semibold">Maintenance</h3>
          <p className="text-3xl font-bold mt-2 text-red-600">{maintenanceVehicles}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg border shadow">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Link to="/vehicles">
            <Button variant="primary">View All Vehicles</Button>
          </Link>
          <Button variant="secondary">Generate Report</Button>
          <Button variant="secondary">Add New Fleet</Button>
        </div>
      </div>

      {/* Telemetry Simulator Control */}
      <div className="bg-white p-6 rounded-lg border shadow">
        <h3 className="text-xl font-bold mb-4">Telemetry Simulator</h3>
        <p className="text-gray-600 mb-4">
          Start simulated telemetry updates to test performance.
        </p>
        <TelemetryControlPanel onStartSimulation={handleSimulationStart} />
      </div>

      {/* Placeholder for Charts */}
      <div className="bg-white p-6 rounded-lg border shadow">
        <h3 className="text-xl font-bold mb-4">Activity Overview</h3>
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
          <p className="text-gray-500">Charts placeholder (for future expansion)</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage





// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from '../components/ui/Button'
// import TelemetryControlPanel from '../components/TelemetryControlPanel'

// export default function DashboardPage() {


//   return (

//   )
// }
