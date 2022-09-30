import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  retries: 0,
  chromeWebSecurity: false,
  env: {
    token: "any token",
  },
  e2e: {
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      let state = {};
      on("task", {
        setState(arg: { key: string; value: string }) {
          const { key, value } = arg;
          return (state[key] = value);
        },

        getState(key: string) {
          return state[key] || null;
        },
      });
      return config;
    },
  },
});
