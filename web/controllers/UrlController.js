var urlPages = {
    person: 'person',
    course: 'course',
    instrument: 'musical-instrument',
    event: 'event'
}

module.exports.setSingleUrl = function setSingleUrl (object, type) {
    if(object.id == null) return object;
    object['url'] = "/" + urlPages[type] + "?id=" + object['id'];
    return object;
  };

module.exports.setMultipleUrl = function (array, type) {
    array.forEach(element => {
        this.setSingleUrl(element, type);
    });
    return array;
}
