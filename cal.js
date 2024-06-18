function sendEventToMainProcess () {
  console.log('Sending event to main process')
  if (!window.electron) {
    console.error('Electron not defined')
    return
  }
  window.electron.sendEvent('start', 'start');
}

function calculate(string) {
  console.log('Calculating:', string)
  const result = eval(string)
  console.log('Result:', result)
  if (result == 19) {
    sendEventToMainProcess()
  }
  return result
}
