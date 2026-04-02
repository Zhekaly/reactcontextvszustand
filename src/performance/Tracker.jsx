import { useState } from "react";
import { resetLogs } from "./renderCount";
import { RenderingTrackingTable } from "./RenderingTrackingTable";

export const Tracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      {isOpen && (
        <div style={{
          position: 'fixed', bottom: 0, right: 0, left: 0,
          height: 300, background: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          overflow: 'auto'
        }}>
          <RenderingTrackingTable />
          <button onClick={resetLogs}>Reset</button>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
      <button onClick={() => setIsOpen(true)}>Open Tracker</button>
    </div>
  );
};