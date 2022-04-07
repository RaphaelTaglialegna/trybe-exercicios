// import Student from './Student';

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

// carolina.examsGradesValues = [25, 20, 25, 23];
// lucas.examsGradesValues = [25, 20, 25, 23];
// jessica.worksGradesValues = [50, 45];
// tamires.worksGradesValues = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// import Employee from './Employee';

// const testInterfaceEmployee: Employee = {
//     registration: 'FNC1234567891011',
//     salary: 1200.00,
//     admissionDate: new Date(),
//     generateRegistration(): string {
//         const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//         return `FNC${randomStr}`;
//     }
// }

// console.log(testInterfaceEmployee);

import Subject from './Subject';

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Fi');

console.log(math);
console.log(history);
console.log(philosophy);