const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');
    const students = {};
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const field = values[fieldIndex].trim();
      if (field in students) {
        students[field].count++;
        students[field].names.push(values[0]);
      } else {
        students[field] = {
          count: 1,
          names: [values[0]]
        };
      }
    }
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].count}. List: ${students[field].names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
