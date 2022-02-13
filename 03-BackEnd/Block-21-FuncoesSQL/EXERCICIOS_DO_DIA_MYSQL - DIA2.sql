SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
	SELECT M.title, bo.domestic_sales, bo.international_sales 
    FROM Pixar.Movies as M
    INNER JOIN Pixar.BoxOffice AS bo
    on M.id = bo.movie_id;


-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
	SELECT M.title, bo.domestic_sales, bo.international_sales 
    FROM Pixar.Movies as M
    INNER JOIN Pixar.BoxOffice AS bo
    on M.id = bo.movie_id
    WHERE bo.international_sales > bo.domestic_sales;
    
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
	SELECT M.title, bo.rating 
    FROM Pixar.Movies as M
    INNER JOIN Pixar.BoxOffice AS bo
    on M.id = bo.movie_id
    order by bo.rating desc;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética
SELECT M.*, T.name, T.location
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M	
on  T.id = M.theater_id
order by T.name; 
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT M.*, T.name, T.location
FROM Pixar.Theater AS T
Right JOIN Pixar.Movies AS M	
on  T.id = M.theater_id
order by T.name; 
