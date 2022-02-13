select * From hr.employees;

-- 01. Acha o Maior Salário.
select max(salary) 
from hr.employees; 

-- 02. Diderença entre o maior salário e o menor.
select max(salary) - min(salary) 
from hr.employees;

-- 03. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
select JOB_ID, avg(salary) as 'média' 
from hr.employees
Group by JOB_ID 
Order by SALARY desc; 

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
Select concat('Total para pagar todos funcionário é de $', sum(salary)) as Total 
from hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
select 
max(salary) AS 'MAIOR SALÁRIO',
min(salary) AS 'MENOR SALÁRIO',
round(avg(salary), 2) AS 'MEDIA SALARIAL',
sum(salary) AS 'SOMA SALÁRIOS'
from hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, COUNT(*) AS 'total' 
From hr.employees
where JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
Select JOB_ID, SUM(salary) as 'SOMA' 
from hr.employees
Group by JOB_ID 
Order by SALARY desc;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
Select JOB_ID, SUM(salary) as 'SOMA' 
from hr.employees
Group by JOB_ID
having JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
Select JOB_ID, avg(salary) as 'MEDIA' 
from hr.employees
WHERE JOB_ID <> 'IT_PROG'
Group by JOB_ID 
order by salary desc;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
Select DEPARTMENT_ID, 
	count(*) as 'N Funcionários', 
	avg(salary) as 'MEDIA' 
from hr.employees
Group by DEPARTMENT_ID
Having `N Funcionários` > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 
SET SQL_SAFE_UPDATES = 0;

 Update hr.employees
 Set phone_number = replace(phone_number, '515', '777')
 Where phone_number LIKE '515%';


-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
Select * 
From hr.employees
Where length(first_name)>= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
Select EMPLOYEE_ID, FIRST_NAME, YEAR(hire_date) 'hire_year' 
From hr.employees;
    
-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
Select EMPLOYEE_ID, FIRST_NAME, Day(hire_date) 'hire_Dai' 
From hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
Select EMPLOYEE_ID, FIRST_NAME, YEAR(hire_date) 'hire_Month' 
From hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
Select Ucase(CONCAT(FIRST_NAME, " ", LAST_NAME))
From hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
Select LAST_NAME,
	HIRE_DATE
From hr.employees
WHERE month(HIRE_DATE) =07 AND YEAR(HIRE_DATE)=1987;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
ect FIRST_NAME,
	LAST_NAME, 
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) 'DAYS_WORKED'
From hr.employees;