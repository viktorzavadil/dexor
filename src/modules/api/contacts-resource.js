'use strict';

export default ['$resource', ContactsResource];

function ContactsResource($resource) {

    var contacts = $resource('static/data/contacts.json', {}, {
        get: {
            isArray: true
        }
    });

    this.get = contacts.get;
}