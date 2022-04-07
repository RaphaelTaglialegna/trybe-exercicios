export default class Person {
  // `Attributes`:
  // - name: nome da pessoa
  private name: string;
 
  // - birthDate: data de nascimento da pessoa
  private birthDate: Date;

  // - constructor: deve receber como parâmetro nome e a data de nascimento
  constructor(name: string, birthDate: Date) {
    this.name = this.validName(name);
    this.birthDate = this.validateDate(birthDate);
  }

  // - Getters/Setters
  get personName(): string { 
    return this.name;
  }

  set personName(name: string) { 
    this.name = this.validName(name);
  }

  get personBirthDate(): Date { 
    return this.birthDate;
  }
  
  set personBirthDate(date: Date) {
    this.birthDate = this.validateDate(date);
  }
  // `Validations`:
  
  //   - A pessoa não pode possuir mais de 120 anos
  //   - A data de nascimento não pode ser uma data no futuro

  private validateDate(date: Date) { 
    const today = new Date();
    const idade = this.calculaIdade(date, today);
    if (today < date) { 
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (idade > 120) { 
      throw new Error('A data de nascimento não pode ser maior do que 120 anos');
    }
    return date;
  }

  public calculaIdade = (nascimento: Date, hoje: Date) => {
    const age = Math.floor(Math.ceil(
      Math.abs(nascimento.getTime() - hoje.getTime()) / (1000 * 3600 * 24),
    ) / 365.25);
      return age;
    }

  //   - O nome deve ter no mínimo 3 caracteres
  private validName = (name: string) => { 
    if (name.length < 3) { 
      throw new Error('O nome deve ter no mínimo 3 caracteres');
    }
    return name;
  }
}

// // let birthday = new Date(1995, 11, 17)
// const p1 = new Person('José João', new Date(1995, 11, 17));

// console.log(p1);
// console.log(p1.personName);
// console.log(p1.personBirthDate);

// const p2 = new Person('Jo', new Date(1923, 11, 17));

// console.log(p2);
// console.log(p2.personName);
// console.log(p2.personBirthDate);
// console.log(p2.calculaIdade(p2.personBirthDate, new Date()));

// Código do exercício anterior, o codigo acima estamos refatorando usando Interface e herança.
// class PessoaEstudante { 
//    private _matricula: string;
//    private _nome: string;
//    private _notasprovas: number[];
//    private _notastrabalhos: number[];
//   constructor(matricula: string, name: string){
//     this._matricula =matricula;
//     this._nome = name;
//     this._notasprovas = [];
//     this._notastrabalhos = [];
//   ;}

//   get matricula(): string { 
//     return this._matricula;
//   };

//   set matricula(valor: string) { 
//     this._matricula = valor;
//   };

//   get nome(): string { 
//     return this._nome;
//   };

//   set name(valor: string){ 
//     this._nome = valor;
//   };
  
//   get notasProvas(): number[] { 
//     return this._notasprovas;
//   }
//   set notasProvas(valor: number[]){
//     if (valor.length > 4){ 
//       throw new Error('Somente 4 notas de provas.')
//     }
//     this._notasprovas = valor;
//   };

//   get notasTrabalhos(): number[] { 
//     return this._notastrabalhos;
//   }

//   set notasTrabalhos(valor: number[]){
//     if (valor.length > 2){ 
//       throw new Error('Somente 2 notas de Trabalhos.')
//     } 
//     this._notastrabalhos = valor;
//   };

//   sumNotas(): number { 
//     return [...this._notasprovas, ...this._notastrabalhos]
//       .reduce((acc, nota) => { 
//         nota += acc;
//         return nota
//     }, 0);
//   }

//   sumMediaNotas(): number { 
//     const sumNotas = this.sumNotas();
//     const mediaNotas = this._notasprovas.length + this._notastrabalhos.length;

//     return Math.round(sumNotas/mediaNotas);
//   }

// }