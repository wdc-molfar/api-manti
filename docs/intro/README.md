# Програмний модуль @molfar/ms-registry | Вступ

**Програмний модуль @molfar/ms-registry – "Реєстр специфікацій API мікросервісів та робочих процесів"**, який написаний мовою програмування JavaScript, призначений для надання доступу до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою, а також для управління реєстром специфікацій, зокрема, реєстрації, оновлення та видалення специфікацій API мікросервісів і робочих процесів.

### Зміст
- [Позначення та найменування програмного модуля](#name)
- [Програмне забезпечення, необхідне для функціонування програмного модуля](#software)
- [Функціональне призначення](#function)
- [Опис логічної структури](#structure)
- [Використовувані технічні засоби](#hardware)
- [Виклик та завантаження](#run)

<a name="name"></a>
<h2>Позначення та найменування програмного модуля</h2>

Програмний модуль має позначення **"@molfar/ms-registry"**.

Повне найменування програмного модуля – **"Реєстр специфікацій API мікросервісів та робочих процесів"**.


<a name="software"></a>
<h2>Програмне забезпечення, необхідне для функціонування програмного модуля</h2>

Для функціонування програмного модуля, написаного мовою програмування JavaScript, необхідне наступне програмне забезпечення та пакети:

- `body-parser` [v1.19.0](https://www.npmjs.com/package/body-parser/v/1.19.0)
- `bunyan` [v1.8.15](https://www.npmjs.com/package/bunyan/v/1.8.15)
- `cookie-parser` [v1.4.5](https://www.npmjs.com/package/cookie-parser/v/1.4.5)
- `cors` [v2.8.5](https://www.npmjs.com/package/cors/v/2.8.5)
- `Docker` [v20.10](https://docs.docker.com/engine/release-notes/#version-2010)
- `express` [v4.17.1](https://www.npmjs.com/package/express/v/4.17.1)
- `Kubernetes` [v1.22.4](https://github.com/kubernetes/kubernetes/releases/tag/v1.22.4)
- `MongoDB NodeJS Driver` [v4.1.3](https://www.npmjs.com/package/mongodb/v/4.1.3)
- `Node.js` [v16.13.0](https://nodejs.org/download/release/v16.13.0/)
- `node-yaml-config` [v1.0.0](https://www.npmjs.com/package/node-yaml-config/v/1.0.0)
- `Prometheus client for node.js` [v14.0.0](https://www.npmjs.com/package/prom-client/v/14.0.0)
- `swagger-stats | API Observability` [v0.99.2](https://www.npmjs.com/package/swagger-stats/v/0.99.2)
- `Swagger UI Express` [v4.1.6](https://www.npmjs.com/package/swagger-ui-express/v/4.1.6)
- `Yaml.js` [v0.3.0](https://www.npmjs.com/package/yamljs/v/0.3.0)


<a name="function"></a>
<h2>Функціональне призначення</h2>

Програмний модуль призначений для надання доступу до реєстру специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою.

Також програмний модуль призначений для управління реєстром специфікацій, зокрема, реєстрації нових специфікацій, оновлення та видалення вже наявних у реєстрі специфікацій API мікросервісів і робочих процесів та описів повторюваного використання за назвою.

<a name="structure"></a>
<h2>Опис логічної структури</h2>

Програмний модуль складається з:
- `api` – HTTP-сервер
- `api/services` – контролер запитів
- `api/routes` – диспетчер запитів

На HTTP-сервер `api`, який складається з визначеної кількості шляхів, приходить запит, який обробляється контролером запитів `api/services`. Контролер `api/services` за певним запитом використовує відповідні сервіси, що виконують певну логіку.

<a name="hardware"></a>
<h2>Використовувані технічні засоби</h2>

Програмний модуль експлуатується на сервері під управлінням `Node.js`. В основі управління всіх сервісів є система оркестрації `Kubernetes`, де всі контейнери працюють з використанням `Docker`.

<a name="run"></a>
<h2>Виклик та завантаження</h2>

Завантаження програмного модуля забезпечується введенням в WEB-браузері адреси завантажувального модуля [http://{hostname}](http://localhost:8080/) з можливими вказівками:
- [/](http://localhost:8080/) для виклику сторінки із загальним описом сервісу
- [/spec](http://localhost:8080/spec) для виклику сторінки зі списоком всіх зареєстрованих специфікацій
- [/spec/{name}](http://localhost:8080/spec/{name}) метод `GET` – для отримання специфікації в форматі `YAML` за назвою
- [/spec/{name}](http://localhost:8080/spec/{name}) метод `DELETE` – для видалення специфікації за назвою
- [/spec/{name}](http://localhost:8080/spec/{name}) метод `POST` – для реєстрації та отримання специфікації за назвою в форматі `YAML`
- [/spec/{name}](http://localhost:8080/spec/{name}) метод `PUT` – для оновлення та отримання оновленої специфікації за назвою в форматі `YAML`