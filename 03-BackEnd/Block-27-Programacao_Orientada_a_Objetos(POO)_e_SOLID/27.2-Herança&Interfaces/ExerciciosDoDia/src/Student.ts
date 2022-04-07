/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import Person from './person';

export default class Student extends Person {
  private examsGrades: number[] = [];

  private worksGrades: number[] = [];

  private enrollment: string;

  constructor(
    name: string, 
    birthDate: Date,
    ) { 
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollmentValues(): string {
    return this.enrollment;
}

  set enrollmentValues(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this.enrollment = value;
  }

  get examsGradesValues(): number[] {
    return this.examsGrades;
  }

  set examsGradesValues(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

    this.examsGrades = value;
  }

  get worksGradesValues(): number[] {
    return this.worksGrades;
  }

  set worksGradesValues(value: number[]) {
    if (value.length > 2) { 
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.'); 
    }
    this.worksGrades = value;
  }
  
  generateEnrollment = (): string => {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
}
}