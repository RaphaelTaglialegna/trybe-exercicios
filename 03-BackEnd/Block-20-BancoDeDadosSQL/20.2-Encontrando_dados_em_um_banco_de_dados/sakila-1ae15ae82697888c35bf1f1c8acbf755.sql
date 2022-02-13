USE  Scientists;
SELECT "This is SQL Exercise, Practice and Solution";
Select 10 + 15;
Select 1, 2, 3; 
Select 10 - 15;
select * from Scientists;
select * from Projects; 
select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects;
Select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects order by name desc;
Select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects order by hours desc limit 3;
Select CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as time from Projects;
select * from AssignedTo;
select distinct * From AssignedTo;
Select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects order by hours desc limit 1;
Select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects order by hours desc limit 1 offset 1 ; 
Select Name AS "Nome do Projeto", Hours AS "Tempo de Trabalho" From Projects order by hours asc limit 5;
select  concat("Existem ", count(name), " cientistas na tabela Scientists.") from Scientists;

