import { statesJson, statesPropertiesById } from "@/us-states";
import { create } from "zustand";

type StatesType = {
  statesData: typeof statesJson;
  statesDataById: typeof statesPropertiesById;
  voteProgress: number[];
  resetMap: () => void;
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
  resetMap: () =>
    set({
      statesData: statesJson,
      statesDataById: statesPropertiesById,
      voteProgress: [
        sumBasedOnVote(0),
        sumBasedOnVote(1),
        sumBasedOnVote(2),
        sumBasedOnVote(3),
        sumBasedOnVote(4),
      ],
    }),
  changeStateVote: (stateName: keyof typeof statesPropertiesById) =>
    set((prevState) => {
      const feature = statesPropertiesById[stateName];

      const indexToUpdate = prevState.statesData.features.findIndex(
        (prevFeature) => prevFeature.id === feature?.id
      );

      const updatedFeatures = [...prevState.statesData.features];

      if (indexToUpdate !== -1) {
        updatedFeatures[indexToUpdate] = {
          ...updatedFeatures[indexToUpdate],
          properties: {
            ...updatedFeatures[indexToUpdate].properties,
            vote:
              updatedFeatures[indexToUpdate].properties.vote === 4
                ? 0
                : updatedFeatures[indexToUpdate].properties.vote + 1,
          },
        };
      }

      const statesData = {
        type: prevState.statesData.type,
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
