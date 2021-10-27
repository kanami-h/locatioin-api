const locationEl = document.querySelector(".result");

const getLocation = () => {
  return fetch("http://ipinfo.io/99.241.126.68?token=b49e9b97377501")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((data) => {
      return data;
    });
};

getLocation()
  .then((location) => {
    locationEl.textContent = `${location.city}, ${location.region}, ${location.country}`;
  })
  .catch((err) => {
    console.log(err);
  });
