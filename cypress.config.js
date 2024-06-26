import { defineConfig } from 'cypress';
import { configureVisualRegression } from 'cypress-visual-regression/dist/plugin';
import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1024,
    viewportHeight: 768,
    env: {
      visualRegressionType: 'regression',
      visualRegressionBaseDirectory: 'cypress/snapshots/base'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on) {
      on('before:browser:launch', (_browser, launchOptions) => {
        launchOptions.args.push('--start-fullscreen');
        launchOptions.args.push('--force-device-scale-factor=1');

        return launchOptions;
      });
      configureVisualRegression(on);
    }
  },
  video: false,
  defaultCommandTimeout: 5_000
});
