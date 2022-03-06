const { app, BrowserWindow } = require("electron");

let mainWindow;
let initialWidth, initialHeight, hostUrl = "";

function initialize() {
  initialWidth = 1500;
  initialHeight = 800;
  hostUrl = "https://www.c-sharpcorner.com/";
}

// Creating the main window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    frame: true,
    resizable: true,
    width: Number(initialWidth),
    height: Number(initialHeight),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      devTools: false
    }
  });
  mainWindow.loadURL(hostUrl);
}

app.on("ready", () => {
  initialize();
  createMainWindow();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});