import ReactMapGl, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { FillLayer, LineLayer, SymbolLayer } from "react-map-gl";
import { useStatesStore } from "@/stores/statesStore";
import { statesPropertiesById } from "@/us-states";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@/hooks/useWindowSize";

const dataLayer: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "vote",
      stops: [
        [0, "#1A6AFF"],
        [1, "#92D4FC"],
        [2, "#FFC61C"],
        [3, "#FF4A43"],
        [4, "#FF9D99"],
      ],
    },
    "fill-opacity": 1,
  },
};

const boundariesLayer: LineLayer = {
  id: "boundaries",
  type: "line",
  source: "states",
  paint: {
    "line-color": "white",
    "line-width": 1,
  },
};

const nameLayer: SymbolLayer = {
  id: "state-names",
  type: "symbol",
  source: "states",
  filter: [
    "all",
    ["==", "$type", "Point"],
    // filter out these HI", "VT", "NH", "MD", "RI", "MA", "CT", "DC", "NJ", "DE
    [
      "!in",
      "abbreviation",
      "HI", // id: hawaii-id
      "VT", // id: vermont-id
      "NH", // id: new-hampshire-id
      "MD", // id: maryland-id
      "RI", // id: rhode-island-id
      "MA", // id: massachusetts-id
      "CT", // id: connecticut-id
      "DC", // id: district-of-columbia-id
      "NJ", // id: new-jersey-id
      "DE", // id: delaware-id
    ],
  ],
  layout: {
    "text-field": [
      "format",
      ["get", "abbreviation"],
      { "font-scale": 1 },
      "\n",
      {},
      ["get", "points"],
      {
        "font-scale": 0.75,
        "text-font": ["literal", ["Roboto Regular"]],
      },
    ],
    "text-anchor": "right",
    "icon-anchor": "center",
    "icon-text-fit": "both",
    "symbol-placement": "point",
    "symbol-avoid-edges": true,
    "text-variable-anchor": ["center", "top", "bottom", "left", "right"],
    "text-allow-overlap": false,
  },
  paint: {
    "text-color": "black",
  },
};

export function VoteMap() {
  const { isMobile } = useWindowSize();

  const data = useStatesStore((state) => state.statesData);
  const changeStateVote = useStatesStore((state) => state.changeStateVote);

  const handleStateClick = (event) => {
    if (event.features.length > 0) {
      const clickedState = event.features[0].properties.id;
      changeStateVote(clickedState);
    }
  };
  if (typeof isMobile === "undefined") return null;
  return (
    <div className="w-full px-5 h-1/3 flex justify-center bg-slate-100 md:px-10 md:h-3/4">
      <ReactMapGl
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/kalmovic/clp90dlg7001j01qm3a4i3ris"
        interactiveLayerIds={["data"]}
        onClick={handleStateClick}
        initialViewState={{
          latitude: isMobile ? 34.376 : 39.376,
          longitude: isMobile ? -97.868 : -97.868,
          zoom: isMobile ? 1.8 : 3.5,
        }}
      >
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
          <Layer {...nameLayer} />
          <Layer {...boundariesLayer} />
          <ControlPanel />
        </Source>
      </ReactMapGl>
    </div>
  );
}

const ControlPanel = () => {
  // control panel with filtered out states as buttons
  const dataById = useStatesStore((state) => state.statesDataById);
  const changeStateVote = useStatesStore((state) => state.changeStateVote);
  const statesFilteredOutIds: (typeof statesPropertiesById)["properties"]["id"][] =
    [
      "hawaii-id",
      "vermont-id",
      "newHampshire-id",
      "maryland-id",
      "rhodeIsland-id",
      "massachusetts-id",
      "connecticut-id",
      "districtOfColumbia-id",
      "newJersey-id",
      "delaware-id",
    ];

  const filteredFeatures = statesFilteredOutIds.map((id) => {
    return dataById[id];
  });
  const filteredOutStatesFeatures = {
    type: "FeatureCollection",
    features: filteredFeatures,
  };

  return (
    <div className="absolute bottom-1 w-fit md:top-1 right-0 h-fit justify-center">
      <div className="p-4">
        <div className="flex md:flex-col">
          {filteredOutStatesFeatures.features.map((state) => {
            if (!state) return null;
            return (
              <Button
                key={state.properties.id}
                value={state.properties.id}
                onClick={() => changeStateVote(state.properties.id)}
                className={cn(
                  "flex flex-col font-bold p-1 md:p-4 items-center justify-center m-1 rounded-none gap-0 ",
                  state.properties.vote === 0
                    ? "bg-democrat-win text-white hover:bg-democrat-win hover:text-white"
                    : state.properties.vote === 1
                    ? "bg-democrat-disputed text-black hover:bg-democrat-disputed hover:text-black"
                    : state.properties.vote === 2
                    ? "bg-vote-tossup text-black hover:bg-vote-tossup hover:text-black"
                    : state.properties.vote === 3
                    ? "bg-republican-win text-white hover:bg-republican-win hover:text-white"
                    : "bg-republican-disputed text-black hover:bg-republican-disputed hover:text-black"
                )}
              >
                <span className="text-sm md:text-md">
                  {state.properties.abbreviation}
                </span>
                <span className="text-sm md:text-md">
                  {state.properties.points}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
