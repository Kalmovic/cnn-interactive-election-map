import ReactMapGl, { Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { FillLayer, LineLayer, SymbolLayer } from "react-map-gl";
import { useStatesStore } from "./stores/statesStore";
import { statesPropertiesById } from "./us-states";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { VoteProgress } from "./components/voteProgress";

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

const App = () => {
  const data = useStatesStore((state) => state.statesData);
  const changeStateVote = useStatesStore((state) => state.changeStateVote);

  const handleStateClick = (event) => {
    if (event.features.length > 0) {
      console.log("event => ", event.features);
      const clickedState = event.features[0].properties.id;
      changeStateVote(clickedState);
    }
  };

  const demsPoints = 40; // replace with your actual value
  const repsPoints = 30; // replace with your actual value
  const otherPoints = 30; // replace with your actual value

  const totalPoints = demsPoints + repsPoints + otherPoints;

  const demsWidth = (demsPoints / totalPoints) * 100;
  const repsWidth = (repsPoints / totalPoints) * 100;
  const otherWidth = (otherPoints / totalPoints) * 100;

  return (
    <main className="w-screen h-screen space-y-7">
      <h1 className="w-full text-border border uppercase h-fit py-4 flex justify-center items-center text-4xl font-bold text-violet-900 bg-gradient-to-r from-blue-600 via-purple-200 to-red-500">
        road to 270
      </h1>
      <span className="w-full py-4 flex justify-center items-center text-md px-32 text-center">
        It takes 270 electoral votes to win the 2020 presidential election.
        Build your own road to 270 starting with a map of reliably red and blue
        states, as well as the battlegrounds CNN is tracking most closely. You
        also can view CNN’s current race ratings or use the 2016 electoral map
        as a starting point. Clicking an individual state will change who is
        winning its electoral votes.
      </span>
      <VoteProgress />
      <div className="w-full h-5/6 flex justify-center">
        <ReactMapGl
          mapboxAccessToken="pk.eyJ1Ijoia2FsbW92aWMiLCJhIjoiY2xwOGNmdWkzMjJjazJpcngyaWNjandyMCJ9.bPk-e0HYyGXAcaJ-j5l7TQ"
          mapStyle="mapbox://styles/kalmovic/clp90dlg7001j01qm3a4i3ris"
          interactiveLayerIds={["data"]}
          onClick={handleStateClick}
          initialViewState={{
            latitude: 39.376,
            longitude: -97.868,
            zoom: 3.8,
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
    </main>
  );
};

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
  console.log("dataById", dataById);
  const filteredOutStatesFeatures = {
    type: "FeatureCollection",
    features: filteredFeatures,
  };
  console.log("filteredOutStatesFeaturesById => ", filteredOutStatesFeatures);

  return (
    <div className="absolute top-1/4 right-0 h-fit justify-center">
      <div className="p-4">
        <div className="flex flex-col">
          {filteredOutStatesFeatures.features.map((state) => {
            console.log("state => ", state);
            if (!state) return null;
            return (
              <Button
                key={state.properties.id}
                value={state.properties.id}
                onClick={() => changeStateVote(state.properties.id)}
                className={cn(
                  "flex flex-col font-bold p-4 items-center justify-center m-1 rounded-none gap-0 ",
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
                <span className="text-md">{state.properties.abbreviation}</span>
                <span className="text-sm">{state.properties.points}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
