# CNN Interactive Election Map Clone

This is a clone of the CNN Interactive Election Map. It is built with React, TypeScript, and Vite.

## Media

https://www.loom.com/share/c7937ebc80c04a76a6f52c326dc37cc2?sid=75ac5a71-381d-4570-bafe-a46b7c96eef5

## Notes

- This project was built in a sprint in 2 days. Theres some lint issues due to TS and probably there's a better way to build this app 😅

## Tech Stack

- React
- TypeScript
- Vite
- TailwindCSS
- MapboxGL
- React-Map-GL
- Shadcn/ui
- Zustand for state management (due to time constraints, Zustand is faster to setup than Redux)

## Features

- [x] MapboxGL
- [x] Interactive Map
- [x] Reset Map
- [x] Responsive

## Getting Started

1. Clone the repo
2. Add a `.env` file with the following variables (you can get a Mapbox token from [here](https://account.mapbox.com/)):

```bash
REACT_APP_MAPBOX_TOKEN=
```

3. Install dependencies
4. Run the app

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
