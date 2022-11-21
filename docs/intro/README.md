# Програмний модуль @molfar/api-manti | Вступ

**Програмний модуль @molfar/api-manti – "Програмний модуль веб-сервісу для інформаційного пошуку повідомлень"**, який написаний мовою програмування JavaScript, призначений для інформаційного пошуку збережених повідомлень в базі даних [ManticoreSearch](https://manticoresearch.com/).

### Зміст
- [Позначення та найменування програмного модуля](#name)
- [Програмне забезпечення, необхідне для функціонування програмного модуля](#software)
- [Функціональне призначення](#function)
- [Опис логічної структури](#structure)
- [Використовувані технічні засоби](#hardware)
- [Виклик та завантаження](#run)

<a name="name"></a>
<h2>Позначення та найменування програмного модуля</h2>

Програмний модуль має позначення **"@molfar/api-manti"**.

Повне найменування програмного модуля – **"Програмний модуль веб-сервісу для інформаційного пошуку повідомлень"**.


<a name="software"></a>
<h2>Програмне забезпечення, необхідне для функціонування програмного модуля</h2>

Для функціонування програмного модуля, написаного мовою програмування JavaScript, необхідне наступне програмне забезпечення та пакети:

- `babel-cli` [v6.26.0](https://www.npmjs.com/package/babel-cli/v/6.26.0)
- `babel-core` [v6.26.3](https://www.npmjs.com/package/babel-core/v/6.26.3)
- `babel-loader` [v8.2.2](https://www.npmjs.com/package/babel-loader/v/8.2.2)
- `babel-preset-env` [v1.7.0](https://www.npmjs.com/package/babel-preset-env/v/1.7.0)
- `colors` [v1.4.0](https://www.npmjs.com/package/colors/v/1.4.0)
- `connect-timeout` [v1.9.0](https://www.npmjs.com/package/connect-timeout/v/1.9.0)
- `dateformat` [v4.5.1](https://www.npmjs.com/package/dateformat/v/4.5.1)
- `dotenv` [v10.0.0](https://www.npmjs.com/package/dotenv/v/10.0.0)
- `elegant-spinner` [v2.0.0](https://www.npmjs.com/package/elegant-spinner/v/2.0.0)
- `express` [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)
- `fs-readstream-seek` [v1.1.1](https://www.npmjs.com/package/fs-readstream-seek/v/1.1.1)
- `manticoresearch` [v2.0.2](https://www.npmjs.com/package/manticoresearch/v/2.0.2)
- `moment` [v2.29.1](https://www.npmjs.com/package/moment/v/2.29.1)
- `morgan` [v1.10.0](https://www.npmjs.com/package/morgan/v/1.10.0)
- `prism-themes` [v1.9.0](https://www.npmjs.com/package/prism-themes/v/1.9.0)
- `jest` [v27.4.3](https://www.npmjs.com/package/jest/v/27.4.3)
- `jest-html-reporters` [v2.1.6](https://www.npmjs.com/package/jest-html-reporters/v/2.1.6)
- `jest-openapi` [v0.14.1](https://www.npmjs.com/package/jest-openapi/v/0.14.1)
- `jest-stare` [v2.3.0](https://www.npmjs.com/package/jest-stare/v/2.3.0)
- `log-update` [v4.0.0](https://www.npmjs.com/package/log-update/v/4.0.0)
- `split-file` [v2.2.1](https://www.npmjs.com/package/split-file/v/2.2.1)
- `supertest` [v6.1.6](https://www.npmjs.com/package/supertest/v/6.1.6)
- `swagger-jsdoc` [v6.1.0](https://www.npmjs.com/package/swagger-jsdoc/v/6.1.0)
- `swagger-stats | API Observability` [v0.99.2](https://www.npmjs.com/package/swagger-stats/v/0.99.2)
- `Swagger UI Express` [v4.1.6](https://www.npmjs.com/package/swagger-ui-express/v/4.1.6)
- `widdershins` [v4.0.1](https://www.npmjs.com/package/widdershins/v/4.0.1)
- `vuepress` [v1.8.2](https://www.npmjs.com/package/vuepress/v/1.8.2)
- `vuepress-theme-cool` [v1.3.1](https://www.npmjs.com/package/vuepress-theme-cool/v/1.3.1)
- `Yaml.js` [v0.3.0](https://www.npmjs.com/package/yamljs/v/0.3.0)
- `Docker` [v20.10](https://docs.docker.com/engine/release-notes/#version-2010)
- `Kubernetes` [v1.22.4](https://github.com/kubernetes/kubernetes/releases/tag/v1.22.4)

<a name="function"></a>
<h2>Функціональне призначення</h2>

Програмний модуль призначений для інформаційного пошуку збережених повідомлень в базі даних [ManticoreSearch](https://manticoresearch.com/).

<a name="structure"></a>
<h2>Опис логічної структури</h2>

Програмний модуль складається з:
- `api` - HTTP-сервер
- `controllers` – контролер запитів
- `routers` – диспетчер запитів
- `searcher` - пошуковик


На HTTP-сервер `api`, який складається з визначеної кількості шляхів `routers`, приходить запит, який обробляється контролером запитів `controllers`. Контролер `controllers` за певним запитом використовує відповідні сервіси, що виконують певну логіку.

<a name="hardware"></a>
<h2>Використовувані технічні засоби</h2>

Програмний модуль експлуатується на сервері під управлінням `Node.js`. В основі управління всіх сервісів є система оркестрації `Kubernetes`, де всі контейнери працюють з використанням `Docker`.

<a name="run"></a>
<h2>Виклик та завантаження</h2>

Завантаження програмного модуля забезпечується введенням в WEB-браузері адреси завантажувального модуля [http://{hostname}](http://localhost:3443/) з можливими вказівками:
- [/](http://localhost:3443/) метод `GET` для виклику сторінки із загальним описом сервісу
- [/metrics](http://localhost:3443/metrics) для виклику сторінки статистики сервісу
- [/timeline](http://localhost:3443/timeline) метод `POST` для отримання інформації з ManticoreSearch у вигляді графіку
- [/aggregation](http://localhost:3443/aggregation) метод `POST` для агрегації даних з ManticoreSearch
- [/content](http://localhost:3443/content) метод `POST` для отримання інформації з ManticoreSearch
- [/dict/person](http://localhost:3443/dict/person) метод `GET` для створення словника
