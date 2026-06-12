
import React from 'react'
import { Link } from 'react-router-dom'

  const fleets = [
    { id: 1, name: 'Fleet Alpha' },
    { id: 2, name: 'Fleet Beta' },
    { id: 3, name: 'Fleet Gamma' },
    { id: 4, name: 'Fleet Delta' },
    { id: 5, name: 'Fleet Epsilon' },
  ]


export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 hidden lg:block">
      <h3 className="font-bold text-lg mb-6">Fleets</h3>
      <ul className="space-y-3">
        {fleets.map((fleet) => (
          <li key={fleet.id}>
            <Link
              to={`/vehicles?fleet_id=${fleet.id}`}
              className="block py-2 px-4 rounded hover:bg-gray-800 transition"
            >
              {fleet.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 pt-6 border-t border-gray-800">
        <h4 className="font-semibold mb-4">Experiments</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/vehicles?per_page=50" className="text-gray-300 hover:text-white">
              Load 50 vehicles
            </Link>
          </li>
          <li>
            <Link to="/vehicles?per_page=200" className="text-gray-300 hover:text-white">
              Load 200 vehicles
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-300 hover:text-white">
              Start telemetry stream
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}








// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Sidebar() {
//   const fleets = [
//     { id: 1, name: 'Fleet Alpha' },
//     { id: 2, name: 'Fleet Beta' },
//     { id: 3, name: 'Fleet Gamma' },
//     { id: 4, name: 'Fleet Delta' },
//     { id: 5, name: 'Fleet Epsilon' },
//   ]

//   return (

//   )
// }



