const { app, BrowserWindow } = require('electron')

const path = require('path')
const url = require('url')

let win

function createWindow () {
  /* const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }) */

    const win = new BrowserWindow({
        width: 345,
        height: 360,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')


}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})