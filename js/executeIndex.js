const { app, BrowserWindow, screen, ipcMain } = require('electron');
const path = require('path');

let win;

app.whenReady().then(() => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    ipcMain.on('window-minimize', () => {
        if (win) win.minimize();
    });

    ipcMain.on('window-maximize', () => {
        if (win) {
            if (win.isMaximized()) {
                win.unmaximize();
            } else {
                win.maximize();
            }
        }
    });

    ipcMain.on('window-close', () => {
        if (win) win.close();
    });

    win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            preload: path.join(__dirname,'extras','preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
       autoHideMenuBar: true,
        frame: false,
        fullscreenable: true,
    });

    win.loadFile('html/loading.html');

    setTimeout(() => {
        win.loadFile('html/index.html');
    }, 5000);

    win.on('closed', () => {
        win = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
