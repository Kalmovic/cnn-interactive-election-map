import { statesJson, statesPropertiesById } from "@/us-states";
import { create } from "zustand";

type StatesType = {
  statesData: typeof statesJson;
  statesDataById: typeof statesPropertiesById;
  voteProgress: number[];
  changeStateVote: (stateName: keyof typeof statesPropertiesById) => void;
};

const sumBasedOnVote = (vote: number, states: any = statesJson) => {
  return states.features.reduce((acc, feature) => {
    if (feature.properties?.vote === undefined) return acc;
    if (vote === feature.properties?.vote) {
      return acc + feature.properties.points;
    } else {
      return acc;
    }
  }, 0);
};

export const useStatesStore = create<StatesType>()((set) => ({
  statesData: statesJson,
  statesDataById: statesPropertiesById,
  voteProgress: [
    sumBasedOnVote(0),
    sumBasedOnVote(1),
    sumBasedOnVote(2),
    sumBasedOnVote(3),
    sumBasedOnVote(4),
  ],
  changeStateVote: (stateName: keyof typeof statesPropertiesById) =>
    set((prevState) => {
      console.log("statesPropertiesById", statesPropertiesById);
      console.log("stateName", stateName);

      // if (typeof stateName !== "string") return prevState;
      const feature = statesPropertiesById[stateName];
      console.log("feature", feature);

      const updatedFeatures = prevState.statesData.features.map((prevFeature) =>
        prevFeature.id === feature?.id
          ? {
              ...prevFeature,
              properties: {
                ...prevFeature.properties,
                vote:
                  prevFeature.properties.vote === 4
                    ? 0
                    : prevFeature.properties.vote + 1,
              },
            }
          : prevFeature
      );

      const statesData = {
        ...prevState.statesData,
        features: updatedFeatures,
      };

      // just change the vote property of the stateName index
      const statesDataById = {
        ...prevState.statesDataById,
        [stateName]: {
          ...prevState.statesDataById[stateName],
          properties: {
            ...prevState.statesDataById[stateName].properties,
            ...feature?.properties,
            vote:
              prevState.statesDataById[stateName].properties.vote === 4
                ? 0
                : prevState.statesDataById[stateName].properties.vote + 1,
          },
        },
      };

      return {
        statesData,
        statesDataById,
        voteProgress: [
          sumBasedOnVote(0, statesData),
          sumBasedOnVote(1, statesData),
          sumBasedOnVote(2, statesData),
          sumBasedOnVote(3, statesData),
          sumBasedOnVote(4, statesData),
        ],
      };
    }),
}));
