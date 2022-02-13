const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Function to creat a new Key; 
const novoTurno = (lesson2) => {
  lesson2.turno = 'noite'
} 
novoTurno(lesson2);

// Function to list the keys
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2))

// Function to show the size of a object.
const listSize = (object) => Object.keys(object).length;
console.log(listSize(lesson2))

// Function to show the values of a object.
const listValues = (object) => Object.values(object);
console.log(listValues(lesson2))

// Function to concatenate lessons1, 2 and 3.
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Function to count the number of students. 
const totalStudent = (allLessons) => {
  let total = 0;
  const array = Object.keys(allLessons);
  for (index in allLessons) {
    total += allLessons[index].numeroEstudantes;
  }
  return total
}
console.log(totalStudent(allLessons));

// Function get the velue of the key.
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber (allLessons, 1));

// 
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));