const fs = require('fs');

const providers = JSON.parse(fs.readFileSync(`${__dirname}/providers.json`, 'utf8'));

module.exports.query = query => {
  return providers.filter(provider => {
      if (query.name && query.name !== provider.name) {
          return;
      }

      if (query.specialty) {
          let found = false;

          provider.specialties.forEach(speciality => {
              if (speciality.toLowerCase() === query.specialty.toLowerCase()) {
                  found = true;
              }
          });

          if (!found) {
              return;
          }
      }

      if (query.minScore && provider.score < query.minScore) {
          return;
      }

      if (query.date) {
          let found = false;

          provider.availableDates.forEach(date => {
              if (date.from <= query.date && date.to >= query.date) {
                  found = true;
                  return;
              }
          });

          if (!found) {
              return;
          }
      }

      return provider;
  })
};

dal.createOrUpdate = data => {

};
