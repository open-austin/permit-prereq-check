export function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

/**
 * Get address async (this is uggo)
 * onSuccess: function(address, zip)
 * onFail: function(error)
 */
export function getAddress(onSuccess, onFail, opts = { enableHighAccuracy: true }) {
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}`;
      fetch(endpoint).then((resp) => {
        resp.json().then(function(data) {
          const tokens = data.results[0].formatted_address.split(/,\s+/);
          const address = tokens[0];
          const zip = tokens[2].split(/\s/)[1];
          return onSuccess(address, zip);
        });
      }).catch((err) => {
        return onFail(err);
      });
    }, (positionError) => {
      return onFail(positionError);
    }, opts);
  } else {
    onFail(new Error('navigator.geolocation unavailable'));
  }
}
