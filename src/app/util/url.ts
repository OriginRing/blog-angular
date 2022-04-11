export const port = 3000;

export const url = () => {
  return window.location.protocol + '//' + window.location.hostname + ':' + port
}
