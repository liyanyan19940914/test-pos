function collect_same_elements(collection_a, object_b) {
    var sameArray = [];

    collection_a.forEach(function (element) {
        if (isExist(element.key, object_b.value)) {
            sameArray.push(element.key);
        }
    });

    return sameArray;
}

function isExist(element, collection) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] === element) {

            return true;
        }
    }

    return false;
}
module.exports = collect_same_elements;
