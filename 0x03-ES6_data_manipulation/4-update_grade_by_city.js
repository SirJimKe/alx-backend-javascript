export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}
