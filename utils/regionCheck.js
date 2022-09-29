/* eslint-disable @typescript-eslint/no-unused-vars */
import data from 'moment-timezone/data/meta/latest.json';

const checkRegion = () => {
  const { countries, zones } = data;
  const timeZoneCityToCountry = {};

  Object.keys(data.zones).forEach((z) => {
    const cityArr = z.split('/');
    const city = cityArr[cityArr.length - 1];
    timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
  });

  console.log(timeZoneCityToCountry);

  let userRegion;
  let userCity;
  let userCountry;
  let userTimeZone;

  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzArr = userTimeZone.split('/');
    userRegion = tzArr[0];
    userCity = tzArr[tzArr.length - 1];
    userCountry = timeZoneCityToCountry[userCity];
  }

  // console.log('Time Zone:', userTimeZone);
  // console.log('Region:', userRegion);
  // console.log('City:', userCity);
  // console.log('Country:', userCountry);

  return userCountry;
};

export default checkRegion;
