<?
		//wordpress

		
		
//		Якоря
register_activation_hook(__FILE__, 'textRandom_install'); - Якорь для Активаций плагина
register_uninstall_hook(__FILE__, 'textRandom_uninstall'); - Якорь для ДЕактиваций плагина
register_deactivation_hook(__FILE__, 'textRandom_delete'); - Якорь для Удаления плагина

add_action('admin_menu', 'textrandom_admin_menu') - Стандартный якорь
get_bloginfo( 'template_directory' ) - Получает инфу с страницы("https://developer.wordpress.org/reference/functions/get_bloginfo/")
// База данных
$wpdb - переменная для доступа к БД
$wpdb->query($sql) - Отправка запроса
$table_name = $wpdb->prefix . 'textrandom'; - Имя таблицы

// ???????????

add_menu_page("page_title",
							"menu_title",
							8,
							"uName",
							"function") - добавление пункта меню

add_submenu_page("parent_uName",
							"page_title",
							"menu_title",
							8,
							"uName",
							"function") - добавление ПОДпункта меню;
							
add_posts_page() - Добавление меню в "Записи";

get_var('SHOW TABLES LIKE $table_name') - Получить что то
get_results($query, ARRAY_A	); - массив в массиве с БД
get_row($query, ARRAY_A	); - массив с БД
get_col($query, 2) - массив с БД по столбу
wp_kses_stripslashes($string) - Удаляет ненужные Слеши
wp_enqueue_script( 'my-js', '/js/jquery.js', false ); - Подключение скриптов
init - Хук при каждой инициализаций HTML


home_url() - Главная
