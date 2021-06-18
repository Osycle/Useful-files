

/*
										---JQUERY---
*/
$("").ready(function) - Когда готов
$(function(){}); - Конечная загрузка

.css("color", "red") - Стили
.addClass("mylist"); - Присвоение класса
.removeClass("mylist"); - Удалине класса
.hasClass
.toggleClass("mylist"); - У кого есть удалить, а у кого нет присвоить 
.is(".mylist") - Имеет ли класс(boolean - тип)
.filter(".mylist"); - (Отфильтруй) выбрать теги с классом ".mylist"
.not(".mylist"); - Выбрать теги, которые нет  ".mylist"
.has("span"); - выбрать теги, у которых есть "span" 
.children("li") - Выбрать детей тега
.find("li") - Выбрать всех потомков  

.eq(2) - Выбрать когото по счёту коллекций
.siblings(); - соседи
.first() - Первый ребёнок (из выборки слева)
.next() - Следующый сосед
.prev() - Предыдущий сосед
.parent() - Родитель
.parents() - Предки
.closest() - Превый ближайший предок
.text("Хай") - Присваивает текст
.html("<span>Хай</span>") - Добавляет html ТЕГ и текст
.add("div") - Добавь div в выборку (в коллекцию)
.andSelf() - самого себя
.attr("method", "get") - Добавляет аттрибут
.removeAttr() - Удаление аттрибута

.end() - Возварщается обратно к свему объекту(контекстку)
e.preventDefault()
.prepend("hello") - Добавление в начало (Зеркальный способ prependTo) // insertBefore
.append("hello") - Добавление в конец (Зеркальный способ appendTo) // appendChild
.after("after") - Добавление следующим соседом (Зеркальный способ insertAfter)(тегом) //nextSibling
.before("before") - Добавление предыдуший соседом (Зеркальный способ insertBefore) //previosSibling
.clone() - Копирует
.remove() - Удаляет элемент
.detach() - Вырезает элемент ( Сохраняет событии )
.replaceWith('..') - Заменяет элемент


// Формы
$("form").attr("action", function(index, val){
	return val+"?param=23"
}) - Изменение значения аттрибута
$("input[type='text']").val("Hello") - Выборка input и дай им значение "Hello"
$("select").val("5") - Выбери "select" в котором "value = 5"
$("input[type='text']").each(function(index, el){
	console.log(index, $(el).val());
}) - .each() - Берёт выборку и вызывает функцию обратного вызова

// Событии
$("*").add([document, window]).on("click", function(e){e.stopPropagation()}) - Отмена баблинга у всех
.off("click") - Отмена событии
.on("click", "li", function(){} ) - Присвоение событии 2-ой параметр для будуших объектов
.on("click", {x:10, y:2-}, function(e){e.data.x, e.data.y}) - Передача данных объектом (в data)
.on("mouseenter mouseleave", function(e){}) - Одноразавое сабытия
	e.type - Тип событии
	e.which - Номер клавиш или мыши
	e.target - Сам объект та котором произошло событие
	e.currentTarget - Последующие событие
	e.pageX + e.pageY - Координаты в странице
.trigger("click") - исполни свойство
"click.pre" - суффиксы

.hide() - display none
.show() - display block
.toggle() - меняет значение (скрыть||показать)
.slideToggle()
.fadeToggle()
.slideUp() - Слайдинг none
.slideDown() - Слайдинг block
.fadeOut() - display none ( opacity 0)
.fadeIn() - display block ( opacity 1)
$.fx.speeds._default - Скорости по умолчанию

// Анимация
1.
.animate({}, 300, 'linear', function(complete))
2.
.animate(
					{css},
					{
						duration: 200,
						complete: function(){}
						step: function(){}
					}
				);
3.
.animate(
					{"top": "+=20px","left": "+=300px"},
					{duration: 200}
				)
				.animate(
					{"width": "+=200px","height": "+=30px"},
					{duration: 800, queue: true}
				);
4.
.animate(
	{
		"opacity": "toggle",
		"height": "toggle"
	}
);
				

.width() - Получчение ширины
.outerWidth	- Ширина без отступов			

$.fn.func = function(speed, func){ - Написание функций в jQuery
							return $(this).animate(
								{"opacity": "toggle"},
								speed || 2000, function(){
									$.isFunction(fn) && fn.call(this);
								}
							);
						}; 

$.grep(arr, function(val, key){return val<23}) - Работа с массивами и объекты (типо .filter)

/*
										---AJAX---
*/
var r = XMLHttpRequest() - XML Запрос
r.open("GET", url, true) - Подготовка запроса ("Метод", "Адрес", "Асинхронность") true == Синхронно
r.send() - Отправка запроса
r.responseText - Текст запроса 
r.onreadystatechange - Вызов функций по статусу (1 2 3 4)
r.readyState - Сам статус (1 2 3 4)
r.statusText - Текст статуса "OK", "Not found"
r.status - Номер статуса "200", "404"
r.getResponseHeader("Content-Type") - Получние заголовка
r.getAllResponseHeaders() - Получние всех заголовков
r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") - Установление заголовка для "POST"


// jQuery AJAX
function ajPost(u, d, s, c){
	$.ajax({
		type: "POST",
		url: u,
		data: d,
		success: s,
		statusCode: {
		404: function(){alert( "page not found" );}
		},
		complete: c
	});
}

/*
										---GSAP.JS---
*/

var tl = new TimelineMax({
	repeat:0 //Повтор
	yoyo: true // Обратное проигравание
});

.to() 													// Начать с его точки
.from() 												// Начать от его точки
.fromTo(el, 1, {x:10}, {x: 60}) // Начать с точки до точки 
.set() 													// Назначить стиль

.addCallback(function(){console.log("ssd")})
tl.to( el, 1, {
	x: 500, 
	delay: 1,
	onStart: startAnima,
	onUpdate: progressAnima,
	onComplete: endAnima
} );

tl.pause();
tl.resume();
tl.seek(1.5);
tl.reverse();




/*
										---NODE.JS---
*/

var fs = require('fs'); - Подключение модуля
fs.readFile('file.txt') - Читает файл





/*
										---ANGULAR.JS---
*/


ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]" - Цикл

