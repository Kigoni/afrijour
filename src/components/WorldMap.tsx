import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface TooltipState {
  content: string;
  x: number;
  y: number;
  visible: boolean;
}

const INITIAL_TOOLTIP_STATE: TooltipState = { content: '', x: 0, y: 0, visible: false };

const Worldmap: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>(INITIAL_TOOLTIP_STATE);

  return (
    <div className="relative min-h-[80vh] bg [radial-gradient(circle_at_70%_70%,rgba(255,69,0,0.1),transparent_50%)] flex flex-col items-center overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFFFFF,#F7F1E3_70%)]" />
      {/* Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-purple-400/20 rounded-full filter blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Header */}
      <header className="mt-10 mb-6 text-center z-20 relative">
        <h1 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
            Browse African Countries' Journals
          </span>
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Click on any country to explore its rich academic and research contributions
        </p>
      </header>

      {/* Map Container */}
      <div className="relative w-4/5 h-[600px] mx-auto z-20">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 450,
            center: [17, 3],
          }}
          className="w-full h-full"
        >
          <Geographies geography="https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#1a1a2e',
                      stroke: '#FFFFFF', // Distinct white boundaries
                      strokeWidth: 0.5,
                      filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))',
                    },
                    hover: {
                      fill: '#FFD700', // Bright hover color
                      stroke: '#FFFFFF', // Keep boundaries white
                      strokeWidth: 1,
                      filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#FFC107',
                      stroke: '#FFFFFF', // Keep boundaries white
                      strokeWidth: 1,
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))',
                    },
                  }}
                  onMouseEnter={(e) => {
                    setTooltip({
                      content: geo.properties.name,
                      x: e.clientX,
                      y: e.clientY,
                      visible: true,
                    });
                  }}
                  onMouseMove={(e) => {
                    setTooltip((prev) => ({
                      ...prev,
                      x: e.clientX,
                      y: e.clientY,
                    }));
                  }}
                  onMouseLeave={() => {
                    setTooltip((prev) => ({ ...prev, visible: false }));
                  }}
                  onClick={() => {
                    window.location.href = `https://afrijour.web.app/?query=${geo.properties.name
                      .replace(/\s+/g, '')
                      .toLowerCase()}`;
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="fixed bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg pointer-events-none z-50 border border-gray-300"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y - 40,
              transform: 'translateX(-50%)',
            }}
          >
            <span className="text-gray-800 font-medium">{tooltip.content}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Worldmap;
