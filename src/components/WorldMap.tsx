import { Black_And_White_Picture } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
  49: { journalCount: 100, topJournal: "South African Medical Journal" },
  14: { journalCount: 80, topJournal: "Egyptian Journal of Chemistry" },
  39: { journalCount: 70, topJournal: "African Journal of Biotechnology" },
  26: { journalCount: 60, topJournal: "East African Medical Journal" },
  30: { journalCount: 50, topJournal: "Moroccan Journal of Chemistry" },
  56: { journalCount: 45, topJournal: "Tunisian Journal of Plant Protection" },
  20: { journalCount: 40, topJournal: "Ghana Medical Journal" },
  57: { journalCount: 35, topJournal: "African Health Sciences" },
  17: { journalCount: 30, topJournal: "Ethiopian Journal of Health Sciences" },
  54: { journalCount: 25, topJournal: "Tanzania Journal of Health Research" },
  1: { journalCount: 20, topJournal: "Algerian Journal of Natural Products" },
  2: { journalCount: 18, topJournal: "Angola Journal of Agriculture" },
  3: { journalCount: 16, topJournal: "Benin Journal of Medicine" },
  4: { journalCount: 14, topJournal: "Botswana Journal of Science" },
  5: { journalCount: 12, topJournal: "Burkina Faso Journal of Public Health" },
  6: { journalCount: 10, topJournal: "Burundi Journal of Health" },
  7: { journalCount: 9, topJournal: "Cameroon Journal of Medicine" },
  8: { journalCount: 8, topJournal: "Cape Verde Journal of Environmental Studies" },
  9: { journalCount: 7, topJournal: "Central African Journal of Medicine" },
  10: { journalCount: 6, topJournal: "Chad Journal of Health Sciences" },
  11: { journalCount: 5, topJournal: "Comoros Journal of Marine Science" },
  12: { journalCount: 4, topJournal: "Congo Journal of Public Health" },
  13: { journalCount: 3, topJournal: "Djibouti Journal of Health" },
  15: { journalCount: 2, topJournal: "Equatorial Guinea Journal of Science" },
  16: { journalCount: 1, topJournal: "Eritrea Journal of Health" },
  18: { journalCount: 15, topJournal: "Gabon Journal of Medicine" },
  19: { journalCount: 13, topJournal: "Gambia Journal of Health Sciences" },
  22: { journalCount: 11, topJournal: "Guinea Journal of Public Health" },
  23: { journalCount: 9, topJournal: "Guinea-Bissau Journal of Medicine" },
  24: { journalCount: 7, topJournal: "Ivory Coast Journal of Health" },
  27: { journalCount: 5, topJournal: "Lesotho Journal of Health Sciences" },
  28: { journalCount: 4, topJournal: "Liberia Journal of Medicine" },
  29: { journalCount: 3, topJournal: "Libya Journal of Health" },
  31: { journalCount: 2, topJournal: "Malawi Journal of Health" },
  32: { journalCount: 1, topJournal: "Mali Journal of Health" },
  33: { journalCount: 17, topJournal: "Mauritania Journal of Medicine" },
  34: { journalCount: 16, topJournal: "Mauritius Journal of Health Sciences" },
  36: { journalCount: 14, topJournal: "Mozambique Journal of Medicine" },
  37: { journalCount: 12, topJournal: "Namibia Journal of Health" },
  38: { journalCount: 10, topJournal: "Niger Journal of Health Sciences" },
  40: { journalCount: 8, topJournal: "Nigeria Journal of Medicine" },
  42: { journalCount: 6, topJournal: "La Reunion Journal of Health" },
  43: { journalCount: 4, topJournal: "Rwanda Journal of Health Sciences" },
  44: { journalCount: 3, topJournal: "Sao Tome and Principe Journal of Medicine" },
  45: { journalCount: 2, topJournal: "Senegal Journal of Health" },
  46: { journalCount: 1, topJournal: "Seychelles Journal of Health" },
  47: { journalCount: 19, topJournal: "Sierra Leone Journal of Medicine" },
  48: { journalCount: 18, topJournal: "Somalia Journal of Health Sciences" },
  53: { journalCount: 16, topJournal: "Swaziland Journal of Health" },
  55: { journalCount: 14, topJournal: "Togo Journal of Medicine" },
  58: { journalCount: 12, topJournal: "Western Sahara Journal of Health" },
  59: { journalCount: 10, topJournal: "DR Congo Journal of Medicine" },
  60: { journalCount: 8, topJournal: "Zambia Journal of Health Sciences" },
  61: { journalCount: 6, topJournal: "Zimbabwe Journal of Medicine" }
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
              geographies.map((geo) => {
                const countryData = journalData[geo.properties.cartodb_id];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="country-tooltip"
                    data-tooltip-content={
                      countryData
                        ? `${geo.properties.name}|${countryData.journalCount}|${countryData.topJournal}`
                        : geo.properties.name
                    }
                    style={{
                      default: { fill: "#ffd372", stroke: "#888", strokeWidth: 0.75 },
                      hover: { fill: "#ffd372", stroke: "#888", strokeWidth: 0.75 },
                      pressed: { fill: "#ffd372", stroke: "#888", strokeWidth: 0.75 },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {/* </ZoomableGroup> */}
        </ComposableMap>
        {/* {tooltipContent && (
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
        )} */}
        <Tooltip
          id="country-tooltip"
          render={({ content }) => {
            if (!content) return null;
            const [countryName, journalCount, topJournal] = content.split("|");
            return (
              <div className=" max-w-xs">
                <h3 className="font-bold text-xl text-white">{countryName}</h3>
                {journalCount && (
                  <>
                    <div className="text-gray-100">
                      Number of Journals: {journalCount}
                    </div>
                    <p className="text-gray-300">Top Journal: {topJournal}</p>
                  </>
                )}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default WorldMap;
