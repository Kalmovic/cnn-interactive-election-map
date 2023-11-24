import {
  alabamaCoordinates,
  alaskaCoordinates,
  arizonaCoordinates,
  arkansasCoordinates,
  californiaCoordinates,
  coloradoCoordinates,
  connecticutCoordinates,
  delaWareCoordinates,
  districtOfColumbiaCoordinates,
  floridaCoordinates,
  georgiaCoordinates,
  hawaiiCoordinates,
  idahoCoordinates,
  illinoisCoordinates,
  indianaCoordinates,
  iowaCoordinates,
  kansasCoordinates,
  kentuckyCoordinates,
  louisianaCoordinates,
  maineCoordinates,
  marylandCoordinates,
  massachusettsCoordinates,
  michiganCoordinates,
  minnesotaCoordinates,
  mississippiCoordinates,
  missouriCoordinates,
  montanaCoordinates,
  nebraskaCoordinates,
  nevadaCoordinates,
  newHampshireCoordinates,
  newJerseyCoordinates,
  newMexicoCoordinates,
  newYorkCoordinates,
  northCarolinaCoordinates,
  northDakotaCoordinates,
  ohioCoordinates,
  oklahomaCoordinates,
  oregonCoordinates,
  pennsylvaniaCoordinates,
  rhodeIslandCoordinates,
  southCarolinaCoordinates,
  southDakotaCoordinates,
  tenneesseeCoordinates,
  texasCoordinates,
  utahCoordinates,
  vermontCoordinates,
  virginiaCoordinates,
  washingtonCoordinates,
  westVirginiaCoordinates,
  wisconsinCoordinates,
  wyomingCoordinates,
} from "./lib/coordinates";

export const statesJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "01",
      properties: {
        vote: 3,
        points: 9,
        id: "alabama-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: alabamaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "01-point",
      properties: {
        abbreviation: "AL",
        points: 9,
      },
      geometry: {
        type: "Point",
        coordinates: [-86.7911, 32.7794],
      },
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        vote: 2,
        points: 3,
        id: "alaska-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: alaskaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "02-point",
      properties: {
        abbreviation: "AK",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-152.373, 64.2823],
      },
    },
    {
      type: "Feature",
      id: "03",
      properties: {
        vote: 2,
        points: 11,
        id: "arizona-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: arizonaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "03-point",
      properties: {
        abbreviation: "AZ",
        points: 11,
      },
      geometry: {
        type: "Point",
        coordinates: [-111.6646, 34.2744],
      },
    },
    {
      type: "Feature",
      id: "04",
      properties: {
        vote: 3,
        points: 6,
        id: "arkansas-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: arkansasCoordinates,
      },
    },
    {
      type: "Feature",
      id: "04-point",
      properties: {
        abbreviation: "AR",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-92.4191, 34.8938],
      },
    },
    {
      type: "Feature",
      id: "05",
      properties: {
        vote: 0,
        points: 55,
        id: "california-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: californiaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "05-point",
      properties: {
        abbreviation: "CA",
        points: 55,
      },
      geometry: {
        type: "Point",
        coordinates: [-119.7462, 37.2533],
      },
    },
    {
      type: "Feature",
      id: "06",
      properties: {
        vote: 2,
        points: 9,
        id: "colorado-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: coloradoCoordinates,
      },
    },
    {
      type: "Feature",
      id: "06-point",
      properties: {
        abbreviation: "CO",
        points: 9,
      },
      geometry: {
        type: "Point",
        coordinates: [-105.3111, 38.9972],
      },
    },
    {
      type: "Feature",
      id: "07",
      properties: {
        vote: 0,
        points: 7,
        id: "connecticut-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: connecticutCoordinates,
      },
    },
    {
      type: "Feature",
      id: "07-point",
      properties: {
        abbreviation: "CT",
        points: 7,
      },
      geometry: {
        type: "Point",
        coordinates: [-72.7273, 41.667],
      },
    },
    {
      type: "Feature",
      id: "08",
      properties: {
        vote: 2,
        points: 9,
        id: "colorado-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: coloradoCoordinates,
      },
    },
    {
      type: "Feature",
      id: "08-point",
      properties: {
        abbreviation: "CO",
        points: 9,
      },
      geometry: {
        type: "Point",
        coordinates: [-105.3111, 38.9972],
      },
    },
    {
      type: "Feature",
      id: "09",
      properties: {
        vote: 0,
        points: 3,
        id: "delaWare-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: delaWareCoordinates,
      },
    },
    {
      type: "Feature",
      id: "09-point",
      properties: {
        abbreviation: "DE",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-75.5071, 38.9896],
      },
    },
    {
      type: "Feature",
      id: "10",
      properties: {
        vote: 0,
        points: 3,
        id: "districtOfColumbia-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: districtOfColumbiaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "10-point",
      properties: {
        abbreviation: "DC",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-77.0147, 38.9101],
      },
    },
    {
      type: "Feature",
      id: "11",
      properties: {
        vote: 2,
        points: 29,
        id: "florida-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: floridaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "11-point",
      properties: {
        abbreviation: "FL",
        points: 29,
      },
      geometry: {
        type: "Point",
        coordinates: [-81.417, 27.8333],
      },
    },
    {
      type: "Feature",
      id: "12",
      properties: {
        vote: 2,
        points: 16,
        id: "georgia-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: georgiaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "12-point",
      properties: {
        abbreviation: "GA",
        points: 16,
      },
      geometry: {
        type: "Point",
        coordinates: [-83.6487, 32.9866],
      },
    },
    {
      type: "Feature",
      id: "13",
      properties: {
        vote: 0,
        points: 4,
        id: "hawaii-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: hawaiiCoordinates,
      },
    },
    {
      type: "Feature",
      id: "13-point",
      properties: {
        abbreviation: "HI",
        points: 4,
      },
      geometry: {
        type: "Point",
        coordinates: [-157.4983, 21.1098],
      },
    },
    {
      type: "Feature",
      id: "14",
      properties: {
        vote: 3,
        points: 4,
        id: "idaho-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: idahoCoordinates,
      },
    },
    {
      type: "Feature",
      id: "14-point",
      properties: {
        abbreviation: "ID",
        points: 4,
      },
      geometry: {
        type: "Point",
        coordinates: [-114.3788, 43.5394],
      },
    },
    {
      type: "Feature",
      id: "15",
      properties: {
        vote: 0,
        points: 20,
        id: "illinois-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: illinoisCoordinates,
      },
    },
    {
      type: "Feature",
      id: "15-point",
      properties: {
        abbreviation: "IL",
        points: 20,
      },
      geometry: {
        type: "Point",
        coordinates: [-89.0022, 40.3363],
      },
    },
    {
      type: "Feature",
      id: "16",
      properties: {
        vote: 3,
        points: 11,
        id: "indiana-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: indianaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "16-point",
      properties: {
        abbreviation: "IN",
        points: 11,
      },
      geometry: {
        type: "Point",
        coordinates: [-86.256, 39.8647],
      },
    },
    {
      type: "Feature",
      id: "17",
      properties: {
        vote: 2,
        points: 6,
        id: "iowa-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: iowaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "17-point",
      properties: {
        abbreviation: "IA",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-93.3899, 42.0046],
      },
    },
    {
      type: "Feature",
      id: "18",
      properties: {
        vote: 3,
        points: 6,
        id: "kansas-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: kansasCoordinates,
      },
    },
    {
      type: "Feature",
      id: "18-point",
      properties: {
        abbreviation: "KS",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-98.4005, 38.5111],
      },
    },
    {
      type: "Feature",
      id: "19",
      properties: {
        vote: 3,
        points: 8,
        id: "kentucky-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: kentuckyCoordinates,
      },
    },
    {
      type: "Feature",
      id: "19-point",
      properties: {
        abbreviation: "KY",
        points: 8,
      },
      geometry: {
        type: "Point",
        coordinates: [-84.6514, 37.669],
      },
    },
    {
      type: "Feature",
      id: "20",
      properties: {
        vote: 3,
        points: 8,
        id: "louisiana-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: louisianaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "20-point",
      properties: {
        abbreviation: "LA",
        points: 8,
      },
      geometry: {
        type: "Point",
        coordinates: [-92.4749, 31.1801],
      },
    },
    {
      type: "Feature",
      id: "21",
      properties: {
        vote: 0,
        points: 4,
        id: "maine-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: maineCoordinates,
      },
    },
    {
      type: "Feature",
      id: "21-point",
      properties: {
        abbreviation: "ME",
        points: 4,
      },
      geometry: {
        type: "MultiPoint",
        coordinates: [-69.226, 45.3695],
      },
    },
    {
      type: "Feature",
      id: "22",
      properties: {
        vote: 0,
        points: 10,
        id: "maryland-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: marylandCoordinates,
      },
    },
    {
      type: "Feature",
      id: "22-point",
      properties: {
        abbreviation: "MD",
        points: 10,
      },
      geometry: {
        type: "Point",
        coordinates: [-76.7902, 39.055],
      },
    },
    {
      type: "Feature",
      id: "23",
      properties: {
        vote: 0,
        points: 11,
        id: "massachusetts-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: massachusettsCoordinates,
      },
    },
    {
      type: "Feature",
      id: "23-point",
      properties: {
        abbreviation: "MA",
        points: 11,
      },
      geometry: {
        type: "Point",
        coordinates: [-71.5323, 42.2596],
      },
    },
    {
      type: "Feature",
      id: "24",
      properties: {
        vote: 2,
        points: 16,
        id: "michigan-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: michiganCoordinates,
      },
    },
    {
      type: "Feature",
      id: "24-point",
      properties: {
        abbreviation: "MI",
        points: 16,
      },
      geometry: {
        type: "Point",
        coordinates: [-84.6701, 44.3467],
      },
    },
    {
      type: "Feature",
      id: "25",
      properties: {
        vote: 2,
        points: 10,
        id: "minnesota-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: minnesotaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "25-point",
      properties: {
        abbreviation: "MN",
        points: 10,
      },
      geometry: {
        type: "Point",
        coordinates: [-93.9196, 46.2807],
      },
    },
    {
      type: "Feature",
      id: "26",
      properties: {
        vote: 3,
        points: 6,
        id: "mississippi-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: mississippiCoordinates,
      },
    },
    {
      type: "Feature",
      id: "26-point",
      properties: {
        abbreviation: "MS",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-89.6812, 32.7364],
      },
    },
    {
      type: "Feature",
      id: "27",
      properties: {
        vote: 3,
        points: 10,
        id: "missouri-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: missouriCoordinates,
      },
    },
    {
      type: "Feature",
      id: "27-point",
      properties: {
        abbreviation: "MO",
        points: 10,
      },
      geometry: {
        type: "Point",
        coordinates: [-92.302, 38.3566],
      },
    },
    {
      type: "Feature",
      id: "28",
      properties: {
        vote: 3,
        points: 3,
        id: "montana-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: montanaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "28-point",
      properties: {
        abbreviation: "MT",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-109.6333, 46.9048],
      },
    },
    {
      type: "Feature",
      id: "29",
      properties: {
        vote: 3,
        points: 5,
        id: "nebraska-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: nebraskaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "29-point",
      properties: {
        abbreviation: "NE",
        points: 5,
      },
      geometry: {
        type: "Point",
        coordinates: [-99.7951, 41.5378],
      },
    },
    {
      type: "Feature",
      id: "30",
      properties: {
        vote: 2,
        points: 6,
        id: "nevada-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: nevadaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "30-point",
      properties: {
        abbreviation: "NV",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-117.1219, 39.4199],
      },
    },
    {
      type: "Feature",
      id: "31",
      properties: {
        vote: 2,
        points: 4,
        id: "newHampshire-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: newHampshireCoordinates,
      },
    },
    {
      type: "Feature",
      id: "31-point",
      properties: {
        abbreviation: "NH",
        points: 4,
      },
      geometry: {
        type: "Point",
        coordinates: [-71.5771, 43.6805],
      },
    },
    {
      type: "Feature",
      id: "32",
      properties: {
        vote: 0,
        points: 14,
        id: "newJersey-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: newJerseyCoordinates,
      },
    },
    {
      type: "Feature",
      id: "32-point",
      properties: {
        abbreviation: "NJ",
        points: 14,
      },
      geometry: {
        type: "Point",
        coordinates: [-74.4057, 40.1907],
      },
    },
    {
      type: "Feature",
      id: "33",
      properties: {
        vote: 0,
        points: 5,
        id: "newMexico-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: newMexicoCoordinates,
      },
    },
    {
      type: "Feature",
      id: "33-point",
      properties: {
        abbreviation: "NM",
        points: 5,
      },
      geometry: {
        type: "Point",
        coordinates: [-106.1126, 34.4071],
      },
    },
    {
      type: "Feature",
      id: "34",
      properties: {
        vote: 0,
        points: 29,
        id: "newYork-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: newYorkCoordinates,
      },
    },
    {
      type: "Feature",
      id: "34-point",
      properties: {
        abbreviation: "NY",
        points: 29,
      },
      geometry: {
        type: "Point",
        coordinates: [-74.9384, 42.8497],
      },
    },
    {
      type: "Feature",
      id: "35",
      properties: {
        vote: 2,
        points: 15,
        id: "northCarolina-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: northCarolinaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "35-point",
      properties: {
        abbreviation: "NC",
        points: 15,
      },
      geometry: {
        type: "Point",
        coordinates: [-79.296, 35.6411],
      },
    },
    {
      type: "Feature",
      id: "36",
      properties: {
        vote: 3,
        points: 3,
        id: "northDakota-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: northDakotaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "36-point",
      properties: {
        abbreviation: "ND",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-99.793, 47.5362],
      },
    },
    {
      type: "Feature",
      id: "37",
      properties: {
        vote: 2,
        points: 18,
        id: "ohio-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: ohioCoordinates,
      },
    },
    {
      type: "Feature",
      id: "37-point",
      properties: {
        abbreviation: "OH",
        points: 18,
      },
      geometry: {
        type: "Point",
        coordinates: [-82.7937, 40.3736],
      },
    },
    {
      type: "Feature",
      id: "38",
      properties: {
        vote: 3,
        points: 7,
        id: "oklahoma-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: oklahomaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "38-point",
      properties: {
        abbreviation: "OK",
        points: 7,
      },
      geometry: {
        type: "Point",
        coordinates: [-96.9289, 35.5376],
      },
    },
    {
      type: "Feature",
      id: "39",
      properties: {
        vote: 0,
        points: 7,
        id: "oregon-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: oregonCoordinates,
      },
    },
    {
      type: "Feature",
      id: "39-point",
      properties: {
        abbreviation: "OR",
        points: 7,
      },
      geometry: {
        type: "Point",
        coordinates: [-120.5542, 43.9336],
      },
    },
    {
      type: "Feature",
      id: "40",
      properties: {
        vote: 2,
        points: 20,
        id: "pennsylvania-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: pennsylvaniaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "40-point",
      properties: {
        abbreviation: "PA",
        points: 20,
      },
      geometry: {
        type: "Point",
        coordinates: [-77.2098, 40.5773],
      },
    },
    {
      type: "Feature",
      id: "41",
      properties: {
        vote: 0,
        points: 4,
        id: "rhodeIsland-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: rhodeIslandCoordinates,
      },
    },
    {
      type: "Feature",
      id: "41-point",
      properties: {
        abbreviation: "RI",
        points: 4,
      },
      geometry: {
        type: "Point",
        coordinates: [-71.5118, 41.6772],
      },
    },
    {
      type: "Feature",
      id: "42",
      properties: {
        vote: 3,
        points: 9,
        id: "southCarolina-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: southCarolinaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "42-point",
      properties: {
        abbreviation: "SC",
        points: 9,
      },
      geometry: {
        type: "Point",
        coordinates: [-80.9066, 33.8191],
      },
    },
    {
      type: "Feature",
      id: "43",
      properties: {
        vote: 3,
        points: 3,
        id: "southDakota-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: southDakotaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "43-point",
      properties: {
        abbreviation: "SD",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-99.9022, 44.4443],
      },
    },
    {
      type: "Feature",
      id: "44",
      properties: {
        vote: 3,
        points: 11,
        id: "tenneessee-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: tenneesseeCoordinates,
      },
    },
    {
      type: "Feature",
      id: "44-point",
      properties: {
        abbreviation: "TN",
        points: 11,
      },
      geometry: {
        type: "Point",
        coordinates: [-86.3505, 35.7449],
      },
    },
    {
      type: "Feature",
      id: "45",
      properties: {
        vote: 2,
        points: 38,
        id: "texas-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: texasCoordinates,
      },
    },
    {
      type: "Feature",
      id: "45-point",
      properties: {
        abbreviation: "TX",
        points: 38,
      },
      geometry: {
        type: "Point",
        coordinates: [-98.8475, 31.106],
      },
    },
    {
      type: "Feature",
      id: "46",
      properties: {
        vote: 3,
        points: 6,
        id: "utah-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: utahCoordinates,
      },
    },
    {
      type: "Feature",
      id: "46-point",
      properties: {
        abbreviation: "UT",
        points: 6,
      },
      geometry: {
        type: "Point",
        coordinates: [-111.8535, 39.321],
      },
    },
    {
      type: "Feature",
      id: "47",
      properties: {
        vote: 0,
        points: 3,
        id: "vermont-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: vermontCoordinates,
      },
    },
    {
      type: "Feature",
      id: "47-point",
      properties: {
        abbreviation: "VT",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-72.7107, 44.0407],
      },
    },
    {
      type: "Feature",
      id: "48",
      properties: {
        vote: 0,
        points: 13,
        id: "virginia-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: virginiaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "48-point",
      properties: {
        abbreviation: "VA",
        points: 13,
      },
      geometry: {
        type: "Point",
        coordinates: [-78.1697, 37.768],
      },
    },
    {
      type: "Feature",
      id: "49",
      properties: {
        vote: 0,
        points: 12,
        id: "washington-id",
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: washingtonCoordinates,
      },
    },
    {
      type: "Feature",
      id: "49-point",
      properties: {
        abbreviation: "WA",
        points: 12,
      },
      geometry: {
        type: "Point",
        coordinates: [-120.7401, 47.3917],
      },
    },
    {
      type: "Feature",
      id: "50",
      properties: {
        vote: 3,
        points: 5,
        id: "westVirginia-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: westVirginiaCoordinates,
      },
    },
    {
      type: "Feature",
      id: "50-point",
      properties: {
        abbreviation: "WV",
        points: 5,
      },
      geometry: {
        type: "Point",
        coordinates: [-81.0696, 38.468],
      },
    },
    {
      type: "Feature",
      id: "51",
      properties: {
        vote: 2,
        points: 10,
        id: "wisconsin-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: wisconsinCoordinates,
      },
    },
    {
      type: "Feature",
      id: "51-point",
      properties: {
        abbreviation: "WI",
        points: 10,
      },
      geometry: {
        type: "Point",
        coordinates: [-89.6385, 44.2563],
      },
    },
    {
      type: "Feature",
      id: "52",
      properties: {
        vote: 3,
        points: 3,
        id: "wyoming-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: wyomingCoordinates,
      },
    },
    {
      type: "Feature",
      id: "52-point",
      properties: {
        abbreviation: "WY",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-107.2085, 42.7475],
      },
    },
    {
      type: "Feature",
      id: "53",
      properties: {
        vote: 2,
        points: 3,
        id: "wyoming-id",
      },
      geometry: {
        type: "Polygon",
        coordinates: wyomingCoordinates,
      },
    },
    {
      type: "Feature",
      id: "53-point",
      properties: {
        abbreviation: "WY",
        points: 3,
      },
      geometry: {
        type: "Point",
        coordinates: [-107.2085, 42.7475],
      },
    },
  ],
};

export const statesPropertiesById = statesJson.features.reduce(
  (acc, state) => {
    if (!state.properties.id) {
      // add properties to the last state
      const lastState = acc[Object.keys(acc)[Object.keys(acc).length - 1]];
      return {
        ...acc,
        [lastState.properties.id as string]: {
          ...lastState,
          properties: {
            ...lastState.properties,
            ...state.properties,
          },
        },
      };
    }
    return {
      ...acc,
      [state.properties.id as string]: state,
    };
  },
  {} as {
    [key: string]: {
      type: string;
      id: string;
      properties: {
        vote: number;
        id: string;
        abbreviation: string;
        points: number;
      };
      geometry: {
        type: string;
        coordinates: number[][][];
      };
    };
  }
);
