'use strict';

var request = require('request');
var _ = require('lodash');
var deferred = require('deferred');

/*
Pass in address and zip code directly from text fields.
lookupAddress will return a promise that can be waited on for query and validation to complete.
The property verifiedAddress on the address will indicate whether or not the exact address was found.
The embedQuery is also passed back, since Google requires displaying embedded map to use their API.
*/

var lookupAddress = function(address, zipcode) {
    var dfd = deferred();

    var zipcode_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '+' + zipcode + '&key=AIzaSyDJYud-f60xYSBCt4tlTUN2zasKCrD8Bhg';

    request.get({
        url: zipcode_url,
        withCredentials: false
    }, function(err, response, body) {
        var results = JSON.parse(body).results;

        if(results) {
            var verifiedAddress = validateAddress(results[0].address_components);
            var embedQuery = results[0].formatted_address;
            verifiedAddress.embedAddress = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDJYud-f60xYSBCt4tlTUN2zasKCrD8Bhg&q=' + embedQuery;
            dfd.resolve(verifiedAddress);
        }
    });

    return dfd.promise;
};

function validateAddress(address_components) {
    var components = _.keyBy(address_components, function(component) {
        return component.types[0];
    });

    var address = {
        street_number: components.street_number ? components.street_number.short_name : null,
        street: components.route ? components.route.short_name : null,
        city: components.locality ? components.locality.short_name : null,
        state: components.administrative_area_level_1 ? components.administrative_area_level_1.short_name : null
    };

    var verified = !_.includes(_.values(address), null);
    address.verified = verified;

    return address;
};

module.exports = lookupAddress;
