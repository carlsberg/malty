import { addons } from '@storybook/addons';
import maltyTheme from './maltyTheme';

addons.setConfig({
  theme: maltyTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: false,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});
