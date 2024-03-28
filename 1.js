function objectFunc (object = { key1: 'value1', key2: 'value2'}) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key + ' ' + ':' + ' ' + object[key]);
        }
    }
};
objectFunc();