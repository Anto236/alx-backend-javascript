const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = req.app.locals.databasePath;
      const database = await readDatabase(databasePath);

      const response = [`This is the list of our students`];
      const fields = Object.keys(database).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach((field) => {
        response.push(`Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}`);
      });

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const databasePath = req.app.locals.databasePath;
      const database = await readDatabase(databasePath);

      const major = req.query.major;
      if (!major || (major !== 'CS' && major !== 'SWE')) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      if (database[major]) {
        res.status(200).send(`List: ${database[major].join(', ')}`);
      } else {
        res.status(200).send(`List: No students found for the major ${major}`);
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
