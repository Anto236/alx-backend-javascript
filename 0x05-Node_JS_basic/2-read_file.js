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

      if (!(field in students)) {
        students[field] = {
          count: 0,
          names: [],
        };
      }

      students[field].count++;
      students[field].names.push(values[0]);
    }

    const result = [];
    for (const field in students) {
      result.push([field, students[field].count]);
    }

    console.log(`Number of students: ${lines.length - 1}`);
    
    result.forEach(([field, count]) => {
      const names = students[field].names.join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
