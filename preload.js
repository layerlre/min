const { contextBridge, ipcRenderer } = require('electron');

console.log('preload.js loaded');

contextBridge.exposeInMainWorld('electron', {
  sendEvent: (eventName, arg) => ipcRenderer.send(eventName, arg)
});
