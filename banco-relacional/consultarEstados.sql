select * from estados 

select sigla as 'UF', nome as 'Nome do Estado' from estados
WHERE REGIAO = 'Sul'

select sigla as 'UF', nome as 'Nome dos Estado', populacao as 'Habitantes' from estados
where populacao >= 10
order by populacao desc