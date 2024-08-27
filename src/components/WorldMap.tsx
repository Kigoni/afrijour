import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
// import { Tooltip } from "@/components/ui/tooltip";

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
  "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

const journalData: JournalData = {
  // Europe
  GBR: { journalCount: 500, topJournal: "Nature" },
  DEU: { journalCount: 450, topJournal: "Angewandte Chemie" },
  FRA: { journalCount: 400, topJournal: "Comptes Rendus Mathématique" },
  ITA: { journalCount: 350, topJournal: "Il Nuovo Cimento" },
  ESP: { journalCount: 300, topJournal: "Revista Española de Cardiología" },
  NLD: { journalCount: 250, topJournal: "Brain" },
  CHE: { journalCount: 200, topJournal: "Helvetica Chimica Acta" },
  SWE: { journalCount: 180, topJournal: "Acta Radiologica" },
  POL: { journalCount: 150, topJournal: "Acta Poloniae Pharmaceutica" },
  BEL: { journalCount: 140, topJournal: "Acta Clinica Belgica" },

  // Africa
  ZAF: { journalCount: 100, topJournal: "South African Medical Journal" },
  EGY: { journalCount: 80, topJournal: "Egyptian Journal of Chemistry" },
  NGA: { journalCount: 70, topJournal: "African Journal of Biotechnology" },
  KEN: { journalCount: 60, topJournal: "East African Medical Journal" },
  MAR: { journalCount: 50, topJournal: "Moroccan Journal of Chemistry" },
  TUN: { journalCount: 45, topJournal: "Tunisian Journal of Plant Protection" },
  GHA: { journalCount: 40, topJournal: "Ghana Medical Journal" },
  UGA: { journalCount: 35, topJournal: "African Health Sciences" },
  ETH: { journalCount: 30, topJournal: "Ethiopian Journal of Health Sciences" },
  TZA: { journalCount: 25, topJournal: "Tanzania Journal of Health Research" },

  // Other continents
  USA: { journalCount: 1000, topJournal: "Science" },
  CAN: {
    journalCount: 400,
    topJournal: "Canadian Medical Association Journal",
  },
  JPN: { journalCount: 450, topJournal: "Chemical & Pharmaceutical Bulletin" },
  CHN: { journalCount: 600, topJournal: "Chinese Science Bulletin" },
  AUS: { journalCount: 300, topJournal: "Medical Journal of Australia" },
  BRA: {
    journalCount: 250,
    topJournal: "Brazilian Journal of Medical and Biological Research",
  },
  IND: { journalCount: 350, topJournal: "Current Science" },
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
    const { ISO_A3 } = geo.properties;
    const countryData = journalData[ISO_A3];
    if (countryData) {
      setTooltipContent({
        countryName: geo.properties.NAME,
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
        style={{ width: "100%", height: `${dimensions.height}px` }}
      >
        <ComposableMap
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 180,
          }}
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
        {/* {tooltipContent && (
        <Tooltip>
          <div className="p-2">
            <h3 className="font-bold">{tooltipContent.countryName}</h3>
            <p>Number of Journals: {tooltipContent.journalCount}</p>
            <p>Top Journal: {tooltipContent.topJournal}</p>
          </div>
        </Tooltip>
      )} */}
      </div>
    </div>
  );
};

export default WorldMap;
