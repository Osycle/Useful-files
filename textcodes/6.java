/* 
				JAVA
*/

// Типы

long lg = 12344L; - Занимает 8 байта
int a = 1000; - Занимает 4 байта
short sh = 02; - Занимает 2 байта
byte bt = 127; - Занимает 1 байт

int a2 = (int)lg; - Преобразование типа


double - (±1 . m * 2^2 ±p) - Занимает 8 байта
float - Занимает 4 байта


import static java.lang.System.out; - импорт out

Scanner sc = new Scanner(System.in);
out.print("Введите строку: ")
sc.nextLine(); - Получить строку Вводимые данные в консоле //return string
out.println(s) - вывод на экран
s.charAt(2) - получает символ в строке //return char
s.equals(s2) - Сравнения строк
String.format("Привет, %s!", name); - Форматир строки

import java.util.List;
import java.util.ArrayList;

// ARRAY
import java.util.Collections;
List<String> persons = new ArrayList<String>();

Collections.sort(persons) - Сортировка коллекций
Collections.reverse(persons) - Сортировка коллекций

persons.add("Костя") - добавление в массив
persons.set(2, "Юлия") - изменение массива
persons.size() - Размер
persons.get(i) - Запрос массива
persons.contains("Дима") - ПРоверка // true



// co
super(color) - Вызов родительского конструктора
super.draw() - Вызов родительского метода



