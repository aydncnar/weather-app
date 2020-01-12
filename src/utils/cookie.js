
/*
* Aydin Cinar <cinar.aydinn@gmail.com>
* Cookie Methods
*/

const set = (name, value, expireDays = 7) => {
    const date = new Date();
    date.setTime(date.getTime() + (expireDays*24*60*60*1000));
    const expires = `expires=${date.toUTCString()}`;    
    document.cookie = `${name}=${value};${expires}`;
}

const get = (cookieName) => {
    let name = `${cookieName}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let splitCookies = decodedCookie.split(';');
    for (let i = 0; i < splitCookies.length; i += 1) {
        let cookie = splitCookies[i];        
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {            
            return cookie.substring(name.length, cookie.length);
        }
    }
    return '';
};



export const cookie = {
    set,
    get
}