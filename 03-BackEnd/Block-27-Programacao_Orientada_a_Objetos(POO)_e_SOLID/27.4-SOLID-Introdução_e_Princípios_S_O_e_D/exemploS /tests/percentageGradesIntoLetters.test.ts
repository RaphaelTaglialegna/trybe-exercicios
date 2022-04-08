// ./tests/percentageGradesIntoLetters.spec.ts

import { expect } from "chai";
import { percentageGradesIntoLetters } from "../src";


describe('Testando a função "percentageGradesIntoLetters"', function () {
  describe('quando é passado um array de disciplinas válidas', function () {
    const students = [
        {
          name: 'Aluno Teste',
          disciplines: [
              { name: 'name', grade: 0.9 },
          ],
          school: { name: 'Standard', approvalGrade: 0.7 },
        },
        {
          name: 'Aluno Teste',
          school: { name: 'Standard', approvalGrade: 0.7 },
          disciplines: [
              { name: 'name', grade: 0.8 },
          ],
        },
        {
          name: 'Aluno Teste',
          school: { name: 'Standard', approvalGrade: 0.7 },
          disciplines: [
              { name: 'name', grade: 0.7 },
          ],
        },
        {
          name: 'Aluno Teste',
          school: { name: 'Standard', approvalGrade: 0.7 },
          disciplines: [
              { name: 'name', grade: 0.6 },
          ],
        },
        {
          name: 'Aluno Teste',
          school: { name: 'Standard', approvalGrade: 0.7 },
          disciplines: [
              { name: 'name', grade: 0.1},
          ],
        },
        {
          name: 'Aluno Teste',
          school: { name: 'Standard', approvalGrade: 0.7 },
          disciplines: [
              { name: 'name', grade: 0.05},
          ],
        },
      
    ];
    const resultDisciplines = students.map((student) => percentageGradesIntoLetters(student));

    const expectedGrades = ['A', 'B', 'C', 'D', 'E', 'F'];
    const givenGrades = resultDisciplines.map(student => student.disciplines.map(discipline => discipline.letterGrade));
    for (let index = 0; index < students.length; index += 1) {
      it(`retorna ${expectedGrades[index]} para a nota ${students[index].disciplines[0].grade}`, () => {
        expect(givenGrades[index][0]).to.be.equals(expectedGrades[index]);
      });
    }
  });
});