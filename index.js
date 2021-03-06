const {
  app,
  BrowserWindow,
} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {

  win = new BrowserWindow({
    width: 1200,
    height: 840,
    backgroundColor: '#323232',
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:8080/')
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
