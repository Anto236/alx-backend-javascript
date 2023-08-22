const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const result = {};
      const lines = data.split('\n');
      lines.shift();

      lines.forEach((line) => {
        const fields = line.split(',');
        if (fields.length >= 4) {
          const field = fields[3].trim();
          const firstName = fields[0].trim();

          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstName);
        }
      });

      resolve(result);
    });
  });
}

module.exports = {
  readDatabase,
};
