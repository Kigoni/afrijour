import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type JournalData = {
  [countryCode: string]: {
    journalCount: number;
    topJournal: string;
  };
};

type CountryInfo = {
  countryName: string;
  journalCount: number;
  topJournal: string;
};

const geoUrl =
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson";

const journalData: JournalData = {
  
  // Africa
  ZAF: { journalCount: 100, topJournal: "South African Medical Journal" },
  14: { journalCount: 80, topJournal: "Egyptian Journal of Chemistry" },
  39: { journalCount: 70, topJournal: "African Journal of Biotechnology" },
  26: { journalCount: 60, topJournal: "East African Medical Journal" },
  30: { journalCount: 50, topJournal: "Moroccan Journal of Chemistry" },
  56: { journalCount: 45, topJournal: "Tunisian Journal of Plant Protection" },
  20: { journalCount: 40, topJournal: "Ghana Medical Journal" },
  57: { journalCount: 35, topJournal: "African Health Sciences" },
  17: { journalCount: 30, topJournal: "Ethiopian Journal of Health Sciences" },
  54: { journalCount: 25, topJournal: "Tanzania Journal of Health Research" },


};

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<CountryInfo | null>(
    null
  );
  
  const [dimensions, setDimensions] = useState({ width: 800, height: 450 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        setDimensions({
          width: wrapperRef.current.offsetWidth,
          height: wrapperRef.current.offsetWidth * 0.5625, // 16:9 aspect ratio
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (geo: any) => {
    const propGeo = geo.properties;
    const countryData = journalData[propGeo.cartodb_id];
    // console.log(countryData);
    if (countryData) {
      setTooltipContent({
        countryName: propGeo.name,
        journalCount: countryData.journalCount,
        topJournal: countryData.topJournal,
      });
     
    
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div ref={wrapperRef} className="w-full mx-auto p-4">
      <div
        className="relative"
        style={{ width: "100%", height: `400px` }}
      >
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],  // Center on Africa (rotate longitude a bit for better alignment)
            scale: 280, 
          }}
             height={400}  
        >
          {/* <ZoomableGroup center={[0, 20]} zoom={1}> */}
          <Sphere
            stroke="#E4E5E6"
            strokeWidth={0.5}
            id="sphere"
            fill={"#FFFFFF"}
          />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                      onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: { fill: "#f1dccd" },
                    hover: { fill: "#4b2aad" },
                    pressed: { fill: "#4b2aad" },
                  }}
                />
              ))
            }
          </Geographies>
          {/* </ZoomableGroup> */}
        </ComposableMap>
        {tooltipContent && (
          <TooltipProvider>
            <Tooltip open={true}>
              <TooltipTrigger asChild>
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1px',
                height: '1px'
              }} />
              </TooltipTrigger>
              <TooltipContent side="top" className="z-50 p-4 rounded rounded-xl shadow-xl">
                <h3 className="font-bold">{tooltipContent.countryName}</h3>
                <p>Number of Journals: {tooltipContent.journalCount}</p>
                <p>Top Journal: {tooltipContent.topJournal}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
