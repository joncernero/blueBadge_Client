let APIURL = ''

// console.log(window.location.hostname);
switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3001'
    break

  default:
    alert('URL Error!')
    break
}
export default APIURL
