/*
* Aydın Çınar <cinar.aydinn@gmail.com>
* Enums 
*/

const storagenamespace = 'wa';

const storage = {
    city: `${storagenamespace}-city`,
}

const city = {
    istanbul: {
        value: 'istanbul',
        text: 'İstanbul'
    },
    ankara: {
        value: 'ankara',
        text: 'Ankara'
    },
    izmir: {
        value: 'izmir',
        text: 'İzmir'
    }        
}

const orderType = {
    asc: 'asc',
    desc: 'desc'
}

export {
    storage,
    city,
    orderType
}
