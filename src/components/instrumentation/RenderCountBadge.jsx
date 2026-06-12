
import React, { useEffect, useRef } from 'react';

export const useRenderCount = (componentName) => {
  const renderCount = useRef(0);
  renderCount.current += 1;
  useEffect(() => {
    console.log(`[RenderCount] ${componentName}: ${renderCount.current}`);
  });
  return renderCount.current;
};

export const RenderCountBadge = ({ componentName }) => {
  const count = useRenderCount(componentName);
  return (
    <span className="text-xs bg-gray-800 text-white px-2 py-1 rounded">
      Renders: {count}
    </span>
  );
};
