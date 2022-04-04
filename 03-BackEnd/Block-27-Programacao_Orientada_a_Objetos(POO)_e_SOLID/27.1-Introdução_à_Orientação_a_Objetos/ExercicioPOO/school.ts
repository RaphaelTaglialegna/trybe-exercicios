class PessoaEstudante { 
   private _matricula: string;
   private _nome: string;
   private _notasprovas: number[];
   private _notastrabalhos: number[];
  constructor(matricula: string, name: string){
    this._matricula =matricula;
    this._nome = name;
    this._notasprovas = [];
    this._notastrabalhos = [];
  ;}

  get matricula(): string { 
    return this._matricula;
  };

  set matricula(valor: string) { 
    this._matricula = valor;
  };

  get nome(): string { 
    return this._nome;
  };

  set name(valor: string){ 
    this._nome = valor;
  };

  
  get notasProvas(): number[] { 
    return this._notasprovas;
  }
  set notasProvas(valor: number[]){
    if (valor.length > 4){ 
      throw new Error('Somente 4 notas de provas.')
    }
    this._notasprovas = valor;
  };

  get notasTrabalhos(): number[] { 
    return this._notastrabalhos;
  }

  set notasTrabalhos(valor: number[]){
    if (valor.length > 2){ 
      throw new Error('Somente 2 notas de Trabalhos.')
    } 
    this._notastrabalhos = valor;
  };

  sumNotas(): number { 
    return [...this._notasprovas, ...this._notastrabalhos]
      .reduce((acc, nota) => { 
        nota += acc;
        return nota
    }, 0);
  }

  sumMediaNotas(): number { 
    const sumNotas = this.sumNotas();
    const mediaNotas = this._notasprovas.length + this._notastrabalhos.length;

    return Math.round(sumNotas/mediaNotas);
  }

}