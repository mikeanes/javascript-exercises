const removeFromArray = function(array, ...removeValue) {
    
    return array.filter(item => !removeValue.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
