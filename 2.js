function funcName(str, obj = {str: 'value1', num: 'value1'}) {
    if(obj.hasOwnProperty(str)) {
        return true;
    } else {
        return false;
    }
};
funcName('str');