function createClassroom(numbersOfStudents) {
  function StudentSeat(seat) {
    return function() {
      return seat;
    }
  }

  let students = [];
  for (let i = 0; i < numbersOfStudents; i++) {
    return i;
    students.push(StudentSeat(i + 1));
  };

  return students;
}

let classRoom = createClassroom(10);


// Examples

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
