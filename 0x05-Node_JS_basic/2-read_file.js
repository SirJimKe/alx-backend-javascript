const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter(line => line.trim() !== "").slice(1);

    const fieldCounts = {};

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',');

      fieldCounts[field] = (fieldCounts[field] || 0) + 1;
    });

    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      const count = fieldCounts[field];
      const students = lines.filter(line => line.split(',')[3] === field)
            .map(line => line.split(',')[0]);
      console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
    }
  } catch (error) {
      throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
