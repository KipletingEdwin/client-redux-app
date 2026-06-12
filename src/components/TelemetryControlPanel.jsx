
import React, { useState } from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

export const TelemetryControlPanel = () => {

  const [rate, setRate] = useState(50)
  const [duration, setDuration] = useState(30)
  const [batchSize, setBatchSize] = useState(5)

  const handleStart = () => {
    onStartSimulation({ rate, duration, batchSize })
  }

  return (
        <div className="p-4 border rounded shadow bg-white">
      <h3 className="font-bold mb-4">Telemetry Simulator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Rate (events/sec)</label>
          <Input
            type="number"
            value={rate}
            onChange={setRate}
            placeholder="e.g., 50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duration (sec)</label>
          <Input
            type="number"
            value={duration}
            onChange={setDuration}
            placeholder="e.g., 30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Batch Size</label>
          <Input
            type="number"
            value={batchSize}
            onChange={setBatchSize}
            placeholder="e.g., 5"
          />
        </div>
        <Button onClick={handleStart} variant="primary" className="w-full">
          Start Simulation
        </Button>
      </div>
    </div>
  )
}






// import React, { useState } from 'react'
// import { Button } from './ui/Button'
// import { Input } from './ui/Input'
// import { Select } from './ui/Select'

// export default function TelemetryControlPanel({ onStartSimulation }) {

//   return (

//   )
// }
