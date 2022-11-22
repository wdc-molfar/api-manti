(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{331:function(t,e,r){"use strict";r.r(e);var a=r(16),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"програмнии-модуль-molfar-api-manti-програма-та-методика-випробувань"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#програмнии-модуль-molfar-api-manti-програма-та-методика-випробувань"}},[t._v("#")]),t._v(" Програмний модуль @molfar/api-manti | Програма та методика випробувань")]),t._v(" "),e("h2",{attrs:{id:"об-єкт-випробувань"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#об-єкт-випробувань"}},[t._v("#")]),t._v(" Об'єкт випробувань")]),t._v(" "),e("p",[t._v("Об'єктом випробувань є "),e("strong",[t._v('Програмний модуль @molfar/api-manti – "Програмний модуль веб-сервісу для інформаційного пошуку повідомлень"')]),t._v(", який написаний мовою програмування JavaScript та призначений для інформаційного пошуку збережених повідомлень в базі даних "),e("a",{attrs:{href:"https://manticoresearch.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ManticoreSearch"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"мета-випробувань"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#мета-випробувань"}},[t._v("#")]),t._v(" Мета випробувань")]),t._v(" "),e("p",[t._v("Перевірити надійність функціонування програмного модуля @molfar/api-manti та його окремих функцій.")]),t._v(" "),e("h2",{attrs:{id:"вимоги-до-програмного-модуля"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмного-модуля"}},[t._v("#")]),t._v(" Вимоги до програмного модуля")]),t._v(" "),e("p",[t._v("Програмний модуль повинен задовільнати наступним вимогам.")]),t._v(" "),e("p",[t._v("Функціонування програмного модуля "),e("strong",[t._v("не має призводити до збою (фатального порушення роботи системи)")]),t._v(" та "),e("strong",[t._v("видавати діагностику стану системи та повідомлення про будь-які помилки, що виникли")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v('програмний модуль у відповідь на запит "Отримати загальний опис сервісу" повинен повернути сторінку загального опису, код відповіді – 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати статистику сервісу" повинен повернути сторінку статистики, код відповіді – 302')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути збережені дані у виді графику по запиту з БД, код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле queries відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле points відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле points < 0", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле queries порожнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле startAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch у вигляді графіку" повинен повернути "Поле stopAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути агреговані дані, код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле queries відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле aggregateBy відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Агрегація даних по відсутньому полю в БД", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле order відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Сортування відповіді by desc", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле limit відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле startAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле stopAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле order не вірне значення", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле limit < 0", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати агрегацію даних з ManticoreSearch" повинен повернути "Поле масиву query пусте", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути збережені дані по запиту з БД, код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле queries відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле return відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле return "test" відсутнє в БД", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле limit відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле limit < 0", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле startIndex відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле startIndex < 0", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле startAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле stopAt відсутнє", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Отримати інформацію з ManticoreSearch" повинен повернути "Поле stopAt пусте", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути збережені дані по запиту з БД, код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поле в запиті type відсутнє в БД", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поле limit встановлено", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поля limit,startAt встановлено", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поля limit,startAt,stopAt встановлено", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поле startAt > stopAt", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поле startAt > поточного", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поле stopAt < поточного", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поля limit,startAt,stopAt встановлено і type datatime", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Створити словник" повинен повернути "Поля limit,startAt,stopAt встановлено і type em", код відповіді - 200')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Перевірка пошуку в ManticoreSearch" повинен повернути помилку "getaddrinfo ENOTFOUND undefined"')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Перевірка пошуку в ManticoreSearch" повинен повернути дані, що id < -1')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Перевірка пошуку в ManticoreSearch" повинен повернути пусті дані, так як початок < 0')]),t._v(" "),e("li",[t._v('програмний модуль у відповідь на запит "Перевірка пошуку в ManticoreSearch" повинен повернути пусті дані, так як кінець < 0')])]),t._v(" "),e("h2",{attrs:{id:"вимоги-до-програмноі-документаціі"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#вимоги-до-програмноі-документаціі"}},[t._v("#")]),t._v(" Вимоги до програмної документації")]),t._v(" "),e("p",[t._v("Склад програмної документації, пропонованої на випробуванні:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.cntd.ru/document/1200007652",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.402-78."),e("OutboundLink")],1),t._v(" ЕСПД. Опис програми")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.cntd.ru/document/1200007650",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.301-79."),e("OutboundLink")],1),t._v(" ЕСПД. Програма та методика випробувань. Вимоги до змісту та оформлення")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.cntd.ru/document/1200007651",target:"_blank",rel:"noopener noreferrer"}},[t._v("ГОСТ 19.401-78."),e("OutboundLink")],1),t._v(" ЕСПД. Текст програми. Вимоги до змісту та оформлення")])]),t._v(" "),e("h2",{attrs:{id:"засоби-і-порядок-випробувань"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#засоби-і-порядок-випробувань"}},[t._v("#")]),t._v(" Засоби і порядок випробувань")]),t._v(" "),e("p",[t._v("Для запуску комплексів тестів використовуються менеджер пакетів для мови програмування JavaScript – "),e("code",[t._v("npm (Node Package Manager)")]),t._v(", та команда")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),e("p",[t._v("Порядок проведення випробувань:")]),t._v(" "),e("ol",[e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для шляху "/""')]),t._v(", запустивши файл "),e("code",[t._v("root.test.js")])]),t._v(" "),e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для шляху "/timeline""')]),t._v(", запустивши файл "),e("code",[t._v("timeline.test.js")])]),t._v(" "),e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для шляху "/aggregation""')]),t._v(", запустивши файл "),e("code",[t._v("aggregation.test.js")])]),t._v(" "),e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для шляху "/content""')]),t._v(", запустивши файл "),e("code",[t._v("content.test.js")])]),t._v(" "),e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для шляху "/dict/person""')]),t._v(", запустивши файл "),e("code",[t._v("dict.test.js")])]),t._v(" "),e("li",[t._v("Виконати комплекс тестів "),e("strong",[t._v('"Тести для файлу searcher.js"')]),t._v(", запустивши файл "),e("code",[t._v("searcher.test.js")])])]),t._v(" "),e("p",[t._v("Для обробки результатів тестування та створення протоколу випробувань в HTML використовується "),e("code",[t._v("Jest reporter")]),t._v(" версії "),e("a",{attrs:{href:"https://www.npmjs.com/package/jest-html-reporters/v/2.1.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("2.1.6"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"методи-випробувань"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#методи-випробувань"}},[t._v("#")]),t._v(" Методи випробувань")]),t._v(" "),e("p",[t._v("Для проведення випробувань пропонується наступий переліків комплексів тестів та окремих тестових прикладів:")]),t._v(" "),e("ul",[e("li",[t._v("Комплекс тестів "),e("strong",[t._v('"Тести для шляху "/""')]),t._v(", що міститься у файлі "),e("code",[t._v("root.test.js")]),t._v(", має наступні тестові приклади:\n"),e("ul",[e("li",[t._v('Тест перевірки запиту "/" -  "Отримати загальний опис сервісу"')]),t._v(" "),e("li",[t._v('Тест перевірки запиту "/metrics" - "Отримати статистику сервісу"')])])]),t._v(" "),e("li",[t._v("Тест "),e("strong",[t._v('"Тести для шляху "/api/timeline""')]),t._v(", що міститься у файлі "),e("code",[t._v("timeline.test.js")]),t._v(', для перевірки запиту "Отримати інформацію з ManticoreSearch у вигляді графіку"')]),t._v(" "),e("li",[t._v("Тест "),e("strong",[t._v('"Тести для шляху "/api/aggregation""')]),t._v(", що міститься у файлі "),e("code",[t._v("aggregation.test.js")]),t._v(', для перевірки запиту "Отримати агрегацію даних з ManticoreSearch"')]),t._v(" "),e("li",[t._v("Тест "),e("strong",[t._v('"Тести для шляху "/api/content""')]),t._v(", що міститься у файлі "),e("code",[t._v("content.test.js")]),t._v(', для перевірки запиту "Отримати інформацію з ManticoreSearch"')]),t._v(" "),e("li",[t._v("Тест "),e("strong",[t._v('"Тести для шляху "/api/dict/person""')]),t._v(", що міститься у файлі "),e("code",[t._v("dict.test.js")]),t._v(', для перевірки запиту "Cтворити словник"')]),t._v(" "),e("li",[t._v("Тест "),e("strong",[t._v('"Тести для файлу searcher.js"')]),t._v(", що міститься у файлі "),e("code",[t._v("searcher.test.js")]),t._v(", для перевірки пошуку в ManticoreSearch")])]),t._v(" "),e("h2",{attrs:{id:"додаток"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#додаток"}},[t._v("#")]),t._v(" Додаток")]),t._v(" "),e("p",[t._v("Вміст тестових файлів, результати тестування програмного модуля та розширена інформація про тестове покриття, яке в середньому склало 63.54%, наведено в:")]),t._v(" "),e("p",[e("a",{attrs:{href:"../testReport/test-report.html",target:"blank"}},[t._v("Протокол випробувань")])]),t._v(" "),e("p",[e("a",{attrs:{href:"../coverage/lcov-report/index.html",target:"blank"}},[t._v("Тестове покриття")])])])}),[],!1,null,null,null);e.default=v.exports}}]);