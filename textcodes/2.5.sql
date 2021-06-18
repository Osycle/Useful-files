


USE superbase;
--Создание табицы
CREATE TABLE supertable (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL DEFAULT '',
	bd datetime
);

CREATE TABLE superuser - Создание таблицы
SELECT user, password FROM mysql.users; - Создание с копированием другой таблицы
CREATE TABLE simpletable LIKE supertable; - Копирование структуры таблицы

ALTER TABLE supertable CHANGE name firstname VARCHAR(40) DEFAULT 'Вася', Изменение таблмцы
MODIFY bd DATE; - Изменение типа

SET NAMES cp866 --Кодировка
DELETE FROM supertable WHERE id > 4 and < 8;
DELETE FROM supertable WHERE id 5 BETWEEN 7;
--События
CREATE EVENT superbattle
ON schedule EVERY 10 SECOND
DO INSERT INTO supertable (cols1, cols2)
VALUES (v1, v2);

SHOW VARIABLES LIKE '%schedule%' --Находим переменную
SET GLOBAL event_scheduler = 1; --Включаем событии
SELECT * FROM --Выборка
ALTER EVENT superbattle DISABLE;

SELECT group_concat(site) FROM sites --Группирует через запятую
