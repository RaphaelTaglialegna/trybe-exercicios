
const connection = require('./connections');

const create = async ({ title, directedBy, releaseYear}) => {
  const [ result ] = await connection
    .execute("INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?,?,?)", 
    [title, directedBy, releaseYear]); 

    return {
      id: result.insertID
    };
};

const findById = async (Id) => { 
  const [ result ] = await connection
    .execute("SELECT * FROM model_example.movies WHERE id = ?",[Id]);

  if (result.length === 0 ) return null;
 
  return result[0];
} 

module.exports = { 
  create, 
  findById
};