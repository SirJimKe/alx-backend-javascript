const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n')
        .filter(line => line.trim() !== '').splice(1);
      const fieldCounts = {};

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      });

      const totalStudents = lines.length;
      console.log(`Number of students: ${totalStudents}`);

      for (const field in fieldCounts) {
        const count = fieldCounts[field];
        const students = lines.filter(line => line
          .split(',')[3] === field)
          .map(line => line.split(',')[0]);
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }

      resolve(fieldCounts);
    });
  });
}

module.exports = countStudents;
