const {app, BrowserWindow} = require('electron');

let win;

function initWindow() {
    win = new BrowserWindow({width:600,height:400});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed',() => {win = null;});
}

app.on('ready',initWindow);

app.on('window-all-closed',() => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        initWindow();
    }
});