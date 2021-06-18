

// Общее
parseFloat(Str)
parseInt(Str) - Преобразование строки к числу

this.name - указывает на глобальный объект
//Функций
arguments.length - Кол-во фактических переданных параметров в функцию
arguments[0] - Показывает фактические параметры
func.length - Показывает количество ожидаемых параметров
func.call(obj, 10, 20) - Вызови как метод Объекта с Параметрами 10, 20
func.apply(obj, [10, 20]); - Используй как Метод Объекта с Параметрами в массиве 

//	Цыклы
while (i < 10 /*Пока тут true*/){
	//Делай всё что тут
	console.log(i);
	i += 1;
}

//Массивы
a.length - длина массива
a.filter(func) - Фильтрует
for (var i=0, i<a.length; i++) console.log(user[i]); - //Подбор элементов массива с undefined
for (var i in user) console.log(user[i]); //Подбор элементов массива пропуская undefined В i ТОЛЬКО СВОЙСТВА
a.toString() - Преобразует массив в строку
a.join (' | ') - Преобразует массив в строку с помощью разделителя
a.concat(arr1, arr2) - Сложение массивов // return new array
a.slice(начальнаяПозиц, конечнаяПозиц) - Получает части массива
a.reverse(); - Сортировка задом на перёд
a.sort() - Сортирует как строку (Можно передать callback функцию) function mySort(a, b){return a-b};

a.pop(); - Извлечение последнего элемента массива //return Извлечённое
a.push(arr1, arr2) - Добавление после последнего елемента массива //return Новую длинну
a.shift() - Извлекает первый элемент массива //return Извлечённое
a.unshift() - Добавление перед первым елеменом массива //return Новую длинну
a.splice(Позиция, Кол-воВырезаймого) - Удаляет массив с позиций //return Удалённые массивы
a.splice(Позиция, Кол-воВырезаймого, Добавить) - Удаляет массив с позиций и вставляет
a.indexOf([value], с какой позиций искать) - Ищет значение в массивах

a.forEach(callback) - Кидает массив в callback функцию
a.map(callback) - Кидает массив в callback функцию и возвращает новый массив // return array

//Строки
s.toLowerCase(); - Преобразует в верхний регистр
s.toUpperCase(); - Преобразует в нижний регистр
"255".toString(16) -  Преобразует в 16 формат "FF"
parseInt("FF", 16) - Преобразует в "FF" формат 16
String.fromCharCode(65) -  Преобразует код в символ  "A"
s.charCodeAt(2) - Преобразует символ в код (2 символ)
s.charAt(4); - Получает символ из стороки
s.slice(начальнаяПозиц, конечнаяПозиц) - Получает части строк // return Строку
s.substring(начальнаяПозиц, конечнаяПозиц) - Получает части строк // return Строку
s.substring(0, s.length - 1) - Удалить последний символ
s.indexOf('пр', с какой позиций искать); - Поиск по строке
s.lastIndexOf('пр', с какой позиций искать); - Поиск по строке с конца
s.replace(заменяемый, заменитель) - Заменяет слово в строке
s.split(' ', сколько то элементов) - Разбивение сторки в массив

s.search(reg) - К строке применяет регулярное выражение // return Позицию
reg.test(s) - Примение к регулярному выражению строку // return BOOLEAN
s.replace (/(reg)/, "$1") - применяется и к s replace
s.match(/(reg)/) - Находит вхождение в строке // return array
		"vasya@mail.ru".match(/(\w+)@(\w+)\.(\w{2,})/i);
/(reg)/.exec(s) - Находит вхождение в регулярном вырожений // return array
| - или
? - Может быть может не быть одно значение
* - Может быть сколько угодно или не быть
+ - Минимум одно, максимум неограниченно
^ - Ограничивает начало (отрицание если применяется [внути])
$ - Ограничивает конец
. - Любой символ кроме перевода строки(\n)
(reg) - Группирует в переменную $1 и т.д.
[^0-9] - \D
[0-9] - \d
/[^a-zA-Z0-9_]/ - \W
/[a-zA-Z0-9_]/ - \w
/as{2,4}d/ - Определённое количество вхождений
/reg/i - Регистро-независимость
/reg/m - Мульти лайн (включая \n)
/reg/g - выбирает всё что попадается (включая \n)
var = /(['"])[^'"]*\1/ - Всё что в кавычках(Парсинг строг)
//Объекты
property in obj - Проверка свойства в объекте //return false


//Конструктор...

obj.constructor - Получает сведенье о конструкторе
funcConstr.constructor.prototype - Меняет свойста Функций Конструктора
.valueOf - возвращает примитивное значение указанного объекта (само тело)
//Дата
var d = new Date(2017, 1, 8, 20, 45)
var r = new Date(1486568700000)
d.getDay(); - Возвращает день
d.getTime() - Получаем Таймстемп

//try & catch
try - Попытка, действия
catch(e) - Поймать на ошибках
throw new Error("Ошибочка") - Генерирует ошибку(кидает в catch(e))
e.name - Error
e.massege - Ошибочка
//----------------------------
						Window - properties
//History
	history.length - кол-во посещённых страниц
	history.back() - Шаг назад
	history.forward() - Шаг вперёд
	history.go(5) - 5 Шагов (Можно отрицательные значение)
//Navigator
	navigator.geolocation.getCurrentPosition(function(){})
//Screen
	screen.width - Разрешение экрана ширина
	screen.height - Разрешение экрана высота
	screen.availWidth - Доступная ширана (без 'пуска windows')
	screen.availHeight - Доступная высота
//Location
	location.href: - Возварщает URL целеком	"http://www.site.ru:81/about/index.php?x=10#metka"
	location.protocol: "http:" - Вернёт протокол
	location.hostname: "www.site.ru" - Вернёт имя хоста
	location.port: "81" - Вернёт порт
	location.host: "www.site.ru:81" - Вернёт имя хоста с портом
	location.pathname: "/about/index.php" - Возвращает всё, что после имени хоста и до QueryString-а
	location.search: "?x=10" - Возварщает QueryString
	location.hash: "#metka" - Возварщает "#....."
	location.reload(true); - Перезапрашивает страницу F5 (true - Ctr+F5)
	location.replace("http://www.site.ru") - Направляет на адресс заменяя предидущию стр. на эту
	location.assing("http://www.site.ru") - Направляет на адресс добавляя в историю страницы
//Document
	document.write("<div>Что то</div>"); - Дописывает Html код	
	document.links - Сслыки
	document.images - Картинки
	document.forms - Формы
	document.forms.nameForm.elementsInForm.nameInput 
	
						Window - Method
						
alert() - Модальное окно
confirm() - Вопрос с двумя вариантами
prompt() - Вопрос с строчным ответом
setTimeout("alert('setTimeout')", 3000) - Таймер
setInterval("alert('setTimeout')", 3000) - Периодический таймер
clearTimeout(param) - Отменяет таймер
clearInterval(param) - Отменяет периодический таймер
open("http://ya.ru", "x", "параметры открытия") - Открывает вкладку в браузере
opener - Ссылка на открываемое окно
close() - Закрывает окно 

//----------------АТРИБУТЫ  ЕЛЕМЕНТА ЭТО ЕГО МЕТОД или СВОЙСТВА!!!!!!!!!

.style.backgroundColor = 'Yellow' - Стили
//FORM
//----------------К ИМЕНАМ (name="") МОЖНО обращаться как к МЕТОДУ или СВОЙСТВА
f.reset(); - Сбросить
f.submit(); - Отправить
f.method - Метод
f.elements - Сколько элементов










//УЗЛЫ
----------
1. ELEMENT - Элемент ("<p>. . .</p>")
2. ATTRIBUTE - Атрибут элемента ("align='center'")
3. TEXT - Текстовый узел ("Это текст, пробелы и \r\n")
8. COMMENT - Комментарий ("<!--comment-->")
9. DOCUMENT - Узел документа ("document.что-то.что-то")
----------
	..Свойства..{				
		parantNode - Ссылка на родительский элемент			
		childNodes - Коллекция детей
		firstChild - Первый ребёнок
		lastChild - Последний ребёнок
		nextSibling - Следующий сосед
		previosSibling - Предыдущий сосед
		ownerDocument - Сам документ
		
		nodeName - (Для элемента возвращает имя тега) и что то вроде этого
		nodeType - Возвращает тип узла (1, 2, 9)
		nodeValue - Возвращает значение текствого узла
}
	..Методы..{
		hasChildNodes()
		e.cloneNode(true) - копирование элементов
		div.appendChild(element_name) - Вставь как ребёнка в div
		div.insertBefore(e1, e2) - воткни e1 перед e2
		replaceChild(e1, e2) - Удали e1 и вставь вместо него e2
		removeChild(e) - Удаление элементов
}									

.textContent - Выбирает текстовые узлы на любой глубине
	1..Елементы..
//Свойства
Свойства Node
tagName - Имя тега
//Методы
body.getElementsByTagName("Тег") - Выбирает все теги с названием "Тег"
hasAttribute(a) - Имеет ли аттрибут(bool)
getAttribute(a) - Значение этого атрибута возвращается
setAttribute(a, v) - Задаёт значение аттрибутам
removeAttribute(a) - Удаляет атрибут
 9..Ducument..
//Свойства
Свойства Node
documentElement
body
styleSheets
//Методы
Методы Node
getElementsByTagName(e)
getElementById(id)
//Создание узлов
createElement(element_name) - Создание элементов
createTextNode(string) - Создание текстового узла
createDocumentFragment()
createComment(string) - Создание комментариев
	
//Сложнее
//Регистрация события
function addHandler(el, ev, func){
	try{
		el.addEventListener(ev, func, false);
	}catch(x){
		el.attachEvent("on"+ev, func);
	}
}
//Отмена регистраций события
function removeHandler(el, ev, func){
	try{
		el.removeEventListener(ev, func);
	}catch(x){
		el.detachEvent("on"+ev, func);
	}
}
//Отмена регресса событий
function stopH(e){
	e = e || event;
	console.log(e.target);
	e.stopPropagation();
	try{
		e.preventDefault();
	}catch(x){
		e.returnValue = false;
	}
}

///////////ПРОЧЕЕ
	var scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	document.querySelectorAll(".class")

	alert( 'Высота с учетом прокрутки: ' + scrollHeight );
//DOCUMENT.ELEMENT
el.getClientRects()[0].top - Возвращает размеры блоков
el.getBoundingClientRect().top - Возвращает размеры блоков (Привязанный)

//WINDOW.SCROLL & other
window.scrollTo(0, 600) - Заскроллить 'К конкретному месту'
window.scrollBy(0, 600) - Заскроллить 'От этого места ещё'
window.scrollY - Показать сколько засроллинно по оси Y
scrollLeft/scrollTop - Получение текущей прокрутки
pageYOffset - Смещение страницы по оси 'Y'