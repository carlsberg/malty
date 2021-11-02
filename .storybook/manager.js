import { addons } from '@storybook/addons';

addons.setConfig({
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  isToolshown: true,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true }
  }
});
