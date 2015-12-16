'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');

require('babel-core/register');

// report crashes to the Electron project
// require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

var createMainWindow = () => {
  let win = new BrowserWindow({
    width: 600,
    height: 400
  });

  win.loadURL(`file://${__dirname}/index.html`);
  // Toggle devtools when developing
  if (process.env.NODE_ENV == 'development') {
    win.openDevTools({ detach: true });
  }
  win.on('closed', onClosed);

  return win;
}

var onClosed = () => {
  // deref the window
  // for multiple windows store them in an array
  mainWindow = null;
};

// prevent window being GC'd
let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate-with-no-open-windows', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
});

app.on('ready', () => {
  mainWindow = createMainWindow();
});
