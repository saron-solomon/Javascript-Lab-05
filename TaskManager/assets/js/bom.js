
const href = document.querySelector('#1');
const protocol = document.querySelector('#2');
const host = document.querySelector('#3');
const port = document.querySelector('#4');
const hostname = document.querySelector('#5');
const appname = document.querySelector('#6');
const appversion = document.querySelector('#7');
const platform = document.querySelector('#8');
const language = document.querySelector('#9');
const cookieenabled = document.querySelector('#10');
const height = document.querySelector('#11');
const width = document.querySelector('#12');
const pixeldepth = document.querySelector('#13');
const length = document.querySelector('#14');
const state = document.querySelector('#15');





href.innerHTML = window.location.href;
protocol.innerHTML = window.location.protocol;
host.innerHTML = window.location.host;
port.innerHTML = window.location.port;
hostname.innerHTML = window.location.hostname;
appname.innerHTML = window.navigator.appName;
appversion.innerHTML = window.navigator.appVersion;
platform.innerHTML = window.navigator.platform;
language.innerHTML = window.navigator.language;
cookieenabled.innerHTML = window.navigator.cookieEnabled;
height.innerHTML = window.screen.height;
width.innerHTML = window.screen.width;
pixeldepth.innerHTML = window.screen.pixelDepth;
length.innerHTML = window.history.length;
state.innerHTML = window.history.state;