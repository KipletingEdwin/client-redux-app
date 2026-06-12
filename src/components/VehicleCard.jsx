
import React from 'react';
import { RenderCountBadge } from './instrumentation/RenderCountBadge';

export const VehicleCard = ({ vehicle }) => {
  const { id, name, vin, status, telemetry } = vehicle;

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{name || 'Unnamed Vehicle'}</h3>
          <p className="text-sm text-gray-600">VIN: {vin}</p>
          <p className="text-sm">
            Status:{' '}
            <span
              className={`font-semibold ${
                status === 'active'
                  ? 'text-green-600'
                  : status === 'maintenance'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {status}
            </span>
          </p>
        </div>
        <RenderCountBadge componentName={`VehicleCard-${id}`} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <span className="text-gray-500">Speed:</span>{' '}
          <span className="font-medium">{telemetry?.speed || 0} km/h</span>
        </div>
        <div>
          <span className="text-gray-500">Fuel:</span>{' '}
          <span className="font-medium">
            {telemetry?.fuel_level ? Math.round(telemetry.fuel_level * 100) : 0}%
          </span>
        </div>
        <div>
          <span className="text-gray-500">Odometer:</span>{' '}
          <span className="font-medium">{telemetry?.odometer || 0} km</span>
        </div>
        <div>
          <span className="text-gray-500">Last updated:</span>{' '}
          <span className="font-medium">
            {vehicle.last_updated_at
              ? new Date(vehicle.last_updated_at).toLocaleTimeString()
              : 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};
