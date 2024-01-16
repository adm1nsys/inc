//universal scripts
const ua = navigator.userAgent;

function getOperatingSystem() {
    if (/Windows NT 10.0|Windows 10/.test(ua)) {
        return { os: 'Windows', version: '10' };
    } else if (/Windows NT 6.3|Windows 8.1/.test(ua)) {
        return { os: 'Windows', version: '8.1' };
    } else if (/Macintosh|Mac OS X/.test(ua)) {
        const versionMatch = ua.match(/Mac OS X (10[._]\d+)/i);
        const version = versionMatch ? versionMatch[1].replace('_', '.') : 'Unknown';
        return { os: 'macOS', version: version };
    } else if (/Android/.test(ua)) {
        const versionMatch = ua.match(/Android\s([0-9\.]+)/);
        const version = versionMatch ? versionMatch[1] : 'Unknown';
        return { os: 'Android', version: version };
    } else if (/iOS|iPhone|iPad|iPod/.test(ua)) {
        const versionMatch = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
        const version = versionMatch ? `${versionMatch[1]}.${versionMatch[2]}.${versionMatch[3] || 0}` : 'Unknown';
        return { os: 'iOS', version: version };
    }

    return { os: 'Unknown', version: 'Unknown' };
}


function getBrowserInfo() {
    let match = ua.match(/(firefox|msie|trident|chrome|safari|opr|edg)\/?\s*(\d+)/i);
    if (!match) return { browser: 'Unknown', version: 'Unknown' };
    if (match[1].toLowerCase() === 'safari') {

        return { browser: 'Safari', version: 'Unknown' };
    }
    return { browser: match[1], version: match[2] };
}

function getDeviceType() {
    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
        return ('Mobile');
    }
    if ('xr' in navigator) {
        return navigator.xr.isSessionSupported('immersive-vr')
            .then(isSupported => isSupported ? 'VR' : 'Desktop')
            .catch(() => 'Desktop (VR check failed)');
    }
    return ('Desktop');
}


const osInfo = getOperatingSystem();
const browserInfo = getBrowserInfo();
const deviceTypePromise = getDeviceType();
const PlatformInfo = navigator.platform;
const deviceType = getDeviceType();

// Теперь эти значения можно использовать или экспортировать

    const mode_title = document.createElement('div');
    mode_title.id = "mode_title";
    document.body.appendChild(mode_title);


    const debug_menu = document.createElement('div');
    debug_menu.id = 'debug_menu';
    if (dev_mode === true) {
        debug_menu.style.display = 'flex';
        mode_title.textContent = "Mode: Developer"
    mode_title.style.color = "red";
    } else {
        debug_menu.style.display = 'none';
        mode_title.textContent = "Mode: User"
    mode_title.style.color = "green";
    }
    
    document.body.appendChild(debug_menu);

const debug_menu1p = document.createElement('div');
debug_menu1p.id = 'debug_menu1p';
debug_menu.appendChild(debug_menu1p);

const navigatorProperties1 = [
    "User Agent: " + navigator.userAgent,
    "OS: " + `${osInfo.os}`,
    "OS Version: " + `${osInfo.version}`,
    "Browser: " + `${browserInfo.browser}`,
    "Browser Version: " + `${browserInfo.version}`,
    "Platform: " + navigator.platform,
    "Device Type: " + getDeviceType()
];

navigatorProperties1.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    debug_menu1p.appendChild(propElement);
});

    const page_status = document.createElement('div');
    page_status.style.display = 'flex';
    page_status.id = 'page_status';
    page_status.textContent = `Page Status: Active`;
    window.addEventListener('focus', function() {
    page_status.textContent = `Page Status: Active`;
    });

    window.addEventListener('blur', function() {
    page_status.textContent = `Page Status: Inactive`;
    });
    debug_menu1p.appendChild(page_status);



const navigatorInfo = document.createElement('div');
navigatorInfo.id = 'navigatorInfo';

const navigatorProperties = [
    "appCodeName: " + navigator.appCodeName,
    "appName: " + navigator.appName,
    "appVersion: " + navigator.appVersion,
    "cookieEnabled: " + navigator.cookieEnabled,
    "platform: " + navigator.platform,
    "userAgent: " + navigator.userAgent
];

navigatorProperties.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    navigatorInfo.appendChild(propElement);
});

debug_menu.appendChild(navigatorInfo);


const windowInfo = document.createElement('div');
    windowInfo.id = "windowInfo";

const windowProperties = [
    "closed: " + window.closed,
    "defaultStatus: " + window.defaultStatus,
    "document: " + window.document,
    "frameElement: " + window.frameElement,
    "frames: " + window.frames,
    "history: " + window.history,
    "innerHeight: " + window.innerHeight,
    "innerWidth: " + window.innerWidth,
    "length: " + window.length,
    "localStorage: " + window.localStorage,
    "location: " + window.location,
    "name: " + window.name,
    "navigator: " + window.navigator,
    "opener: " + window.opener,
    "outerHeight: " + window.outerHeight,
    "outerWidth: " + window.outerWidth,
    "pageXOffset: " + window.pageXOffset,
    "pageYOffset: " + window.pageYOffset,
    "screen: " + window.screen,
    "screenLeft: " + window.screenLeft,
    "screenTop: " + window.screenTop,
    "screenX: " + window.screenX,
    "screenY: " + window.screenY,
    "sessionStorage: " + window.sessionStorage,
    "scrollX: " + window.scrollX,
    "scrollY: " + window.scrollY,
    "self: " + window.self,
    "status: " + window.status
];

windowProperties.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    windowInfo.appendChild(propElement);
});

debug_menu.appendChild(windowInfo);


const screenInfo = document.createElement('div');
screenInfo.id = 'screenInfo';

const screenProperties = [
    "availHeight: " + screen.availHeight,
    "availWidth: " + screen.availWidth,
    "colorDepth: " + screen.colorDepth,
    "height: " + screen.height,
    "pixelDepth: " + screen.pixelDepth,
    "width: " + screen.width
];

screenProperties.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    screenInfo.appendChild(propElement);
});

debug_menu.appendChild(screenInfo);

const historyInfo = document.createElement('div');
historyInfo.id = 'historyInfo';

const historyProperties = [
    "length: " + history.length
];

historyProperties.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    historyInfo.appendChild(propElement);
});

debug_menu.appendChild(historyInfo);

const locationInfo = document.createElement('div');
locationInfo.id = 'locationInfo';

const locationProperties = [
    "hash: " + location.hash,
    "host: " + location.host,
    "hostname: " + location.hostname,
    "href: " + location.href,
    "origin: " + location.origin,
    "pathname: " + location.pathname,
    "port: " + location.port,
    "protocol: " + location.protocol,
    "search: " + location.search
];

locationProperties.forEach(prop => {
    const propElement = document.createElement('div');
    propElement.textContent = prop;
    locationInfo.appendChild(propElement);
});

debug_menu.appendChild(locationInfo);


function toggleDisplay(elements, displayElement) {
    elements.forEach(element => {
        element.style.display = (element === displayElement) ? 'flex' : 'none';
    });
}

const elements = [debug_menu1p, navigatorInfo, windowInfo, screenInfo, historyInfo, locationInfo];

document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        switch (event.keyCode) {
            case 48: // Клавиша '0'
                if (dev_mode === true) {debug_menu.style.display = 'none';}
                break;
            case 49: // Клавиша '1'
                toggleDisplay(elements, debug_menu1p);
                break;
            case 50: // Клавиша '2'
                toggleDisplay(elements, navigatorInfo);
                break;
            case 51: // Клавиша '3'
                toggleDisplay(elements, windowInfo);
                break;
            case 52: // Клавиша '4'
                toggleDisplay(elements, screenInfo);
                break;
            case 53: // Клавиша '5'
                toggleDisplay(elements, historyInfo);
                break;
            case 54: // Клавиша '6'
                toggleDisplay(elements, locationInfo);
                break;
            case 57: // Клавиша '9'
                if (dev_mode === true) {debug_menu.style.display = 'flex';}
            break;
        }
    }
});







