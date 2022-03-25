import readline from  'readline-sync';
import { exit } from "process";
import BookModel, { Book } from "./models/booksModel";
import connection  from "./models/connection";

const functionBooks = ['Criar', 'Ver'];


const main = async () => {
  const bookModel = new BookModel(connection);
  const userChoice = readline.keyInSelect(functionBooks,'Você quer fazer?')
  

  if (userChoice === -1) {
    console.log("Saindo!");
    exit();
}

  if(userChoice === 0){
    const title = readline.question('Digite o título do livro: ');
    const price = readline.questionFloat('Digite o preço do livro: ');
    const author = readline.question('Digite o autor do livro: ');
    const isbn = readline.question('Digite o isbn do livro: ');
  
    const newBook: Book = { title , price , author , isbn };
  
    const createdBook = await bookModel.create(newBook);
    console.log(createdBook)
    exit();
  } else { 
    const books = await bookModel.getAll();
    console.log(books)
    exit();
  }
}

main();