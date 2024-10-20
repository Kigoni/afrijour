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

const geoUrl = "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/africa.geojson";

const journalData: JournalData = {
  DZA: { journalCount: 30, topJournal: "Algerian Journal of Natural Products" },
  AGO: { journalCount: 15, topJournal: "Angola Medical Journal" },
  BEN: { journalCount: 10, topJournal: "Benin Journal of Health" },
  BWA: { journalCount: 12, topJournal: "Botswana Journal of Medicine" },
  BFA: { journalCount: 8, topJournal: "Burkina Faso Journal of Medicine" },
  BDI: { journalCount: 9, topJournal: "Burundi Medical Journal" },
  CPV: { journalCount: 7, topJournal: "Cape Verde Journal of Health" },
  CMR: { journalCount: 23, topJournal: "Cameroon Medical Journal" },
  CAF: { journalCount: 5, topJournal: "Central African Republic Journal" },
  TCD: { journalCount: 5, topJournal: "Chadian Journal of Health" },
  COM: { journalCount: 4, topJournal: "Comoros Journal of Medicine" },
  COD: { journalCount: 35, topJournal: "Congo Medical Journal" },
  COG: { journalCount: 18, topJournal: "Republic of Congo Journal" },
  CIV: { journalCount: 20, topJournal: "Ivory Coast Medical Journal" },
  DJI: { journalCount: 3, topJournal: "Djibouti Medical Journal" },
  EGY: { journalCount: 80, topJournal: "Egyptian Journal of Chemistry" },
  GNQ: { journalCount: 2, topJournal: "Equatorial Guinea Medical Journal" },
  ERI: { journalCount: 4, topJournal: "Eritrea Journal of Medicine" },
  SWZ: { journalCount: 7, topJournal: "Eswatini Journal of Medicine" },
  ETH: { journalCount: 30, topJournal: "Ethiopian Journal of Health Sciences" },
  GAB: { journalCount: 6, topJournal: "Gabon Medical Journal" },
  GMB: { journalCount: 5, topJournal: "Gambia Journal of Health" },
  GHA: { journalCount: 40, topJournal: "Ghana Medical Journal" },
  GIN: { journalCount: 4, topJournal: "Guinea Journal of Health" },
  GNB: { journalCount: 2, topJournal: "Guinea-Bissau Medical Journal" },
  KEN: { journalCount: 60, topJournal: "East African Medical Journal" },
  LSO: { journalCount: 8, topJournal: "Lesotho Journal of Health" },
  LBR: { journalCount: 6, topJournal: "Liberia Journal of Medicine" },
  LBY: { journalCount: 18, topJournal: "Libyan Journal of Medicine" },
  MDG: { journalCount: 10, topJournal: "Madagascar Medical Journal" },
  MWI: { journalCount: 10, topJournal: "Malawi Medical Journal" },
  MLI: { journalCount: 8, topJournal: "Mali Medical Journal" },
  MRT: { journalCount: 5, topJournal: "Mauritania Journal of Health" },
  MUS: { journalCount: 9, topJournal: "Mauritius Journal of Medicine" },
  MAR: { journalCount: 50, topJournal: "Moroccan Journal of Chemistry" },
  MOZ: { journalCount: 16, topJournal: "Mozambique Journal of Medicine" },
  NAM: { journalCount: 7, topJournal: "Namibian Journal of Health" },
  NER: { journalCount: 6, topJournal: "Niger Journal of Health" },
  NGA: { journalCount: 70, topJournal: "African Journal of Biotechnology" },
  RWA: { journalCount: 15, topJournal: "Rwanda Journal of Medicine" },
  STP: { journalCount: 2, topJournal: "Sao Tome and Principe Medical Journal" },
  SEN: { journalCount: 25, topJournal: "Dakar Medical Journal" },
  SYC: { journalCount: 4, topJournal: "Seychelles Journal of Medicine" },
  SLE: { journalCount: 6, topJournal: "Sierra Leone Medical Journal" },
  SOM: { journalCount: 3, topJournal: "Somalia Journal of Health" },
  ZAF: { journalCount: 100, topJournal: "South African Medical Journal" },
  SSD: { journalCount: 5, topJournal: "South Sudan Medical Journal" },
  SDN: { journalCount: 10, topJournal: "Sudan Journal of Medical Sciences" },
  TZA: { journalCount: 25, topJournal: "Tanzania Journal of Health Research" },
  TGO: { journalCount: 7, topJournal: "Togo Journal of Medicine" },
  TUN: { journalCount: 45, topJournal: "Tunisian Journal of Plant Protection" },
  UGA: { journalCount: 35, topJournal: "African Health Sciences" },
  ZMB: { journalCount: 18, topJournal: "Zambian Journal of Medicine" },
  ZWE: { journalCount: 20, topJournal: "Zimbabwe Journal of Health" },
};

const WorldMap: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<CountryInfo | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
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
    
    // Check available fields
    console.log(propGeo);

    const countryData = journalData[propGeo.ISO_A3];
    if (countryData) {
      setTooltipContent({
        countryName: propGeo.NAME,
        journalCount: countryData.journalCount,
        topJournal: countryData.topJournal,
      });
      setHoveredCountry(propGeo.ISO_A3);
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
    setHoveredCountry(null);
  };

  return (
    <div ref={wrapperRef} className="w-full mx-auto p-4">
      <div className="relative" style={{ width: "100%", height: `400px` }}>
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 280,
          }}
          height={400}
        >
          <Sphere id="sphere" stroke="#E4E5E6" strokeWidth={0.5} fill={"#FFFFFF"} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHovered = geo.properties.ISO_A3 === hoveredCountry;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill: journalData[geo.properties.ISO_A3] ? "#f1dccd" : "#F5F4F6",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#4b2aad",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "all 0.3s ease",
                      },
                      pressed: {
                        fill: "#4b2aad",
                        stroke: "#FFFFFF",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {tooltipContent && (
          <TooltipProvider>
            <Tooltip open={true}>
              <TooltipTrigger asChild>
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '1px',
                    height: '1px',
                  }}
                />
              </TooltipTrigger>
              <TooltipContent side="top" className="z-50 p-4 rounded-xl shadow-xl bg-white">
                <h3 className="font-bold text-lg mb-2">{tooltipContent.countryName}</h3>
                <p className="mb-1"><span className="font-semibold">Number of Journals:</span> {tooltipContent.journalCount}</p>
                <p><span className="font-semibold">Top Journal:</span> {tooltipContent.topJournal}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default WorldMap;
