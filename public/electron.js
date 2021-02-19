const electron = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const stopover = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: window.screen.width, height: window.screen.height});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

stopover.on('ready', createWindow);

stopover.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    stopover.quit();
  }
});

stopover.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});