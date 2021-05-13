const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const isDev = !app.isPackaged;

const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, './preload.js')
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  if (isDev) mainWindow.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', 'bin', 'electron')
  });
}

// app.on('ready', createWindow);
app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

// Handling app closing for macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

// Handling re-opening app for macOS
app.on('activate', () => {
  if(BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})