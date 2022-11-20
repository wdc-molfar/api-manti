---
title: API-MANTI. Сервіс пошуку з ManticoreSearch v1.0.1
language_tabs:
  - http: HTTP
  - javascript: JavaScript
language_clients:
  - shell: curl
  - javascript: axios
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api-manti-manticoresearch">API-MANTI. Сервіс пошуку з ManticoreSearch v1.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Надає можливості пошуку збережених документів в ManticoreSearch

Base URLs:

* <a href="http://localhost:3443">http://localhost:3443</a>

Email: <a href="mailto:boldak.andrey@gmail.com">jace-ita</a> Web: <a href="http://localhost:3443/">jace-ita</a> 
License: <a href="http://localhost:8080/license.html">MIT License</a>

<h1 id="api-manti-manticoresearch-default">Default</h1>

## post__api_timeline

> Code samples

```http
POST /api/timeline HTTP/1.1
Content-Type: application/json
Host: localhost:3443
Content-Length: 121

{"queries":[{"name":"all","query":"Trump"}],"startAt":"2019-08-24T14:15:22Z","stopAt":"2019-08-24T14:15:22Z","points":50}
```

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:3443/api/timeline',
  headers: {'Content-Type': 'application/json'},
  data: {
    queries: [{name: 'all', query: 'Trump'}],
    startAt: '2019-08-24T14:15:22Z',
    stopAt: '2019-08-24T14:15:22Z',
    points: 50
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /api/timeline`

*query for get timeline*

query for get timeline from Manticore

> Body parameter

```json
{
  "queries": [
    {
      "name": "all",
      "query": "Trump"
    }
  ],
  "startAt": "2019-08-24T14:15:22Z",
  "stopAt": "2019-08-24T14:15:22Z",
  "points": 50
}
```

<h3 id="post__api_timeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="post__api_timeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error in server|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_aggregation

> Code samples

```http
POST /api/aggregation HTTP/1.1
Content-Type: application/json
Host: localhost:3443
Content-Length: 157

{"queries":[{"name":"all","query":"Trump"}],"aggregateBy":"source","startAt":"2019-08-24T14:15:22Z","stopAt":"2019-08-24T14:15:22Z","order":"asc","limit":50}
```

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:3443/api/aggregation',
  headers: {'Content-Type': 'application/json'},
  data: {
    queries: [{name: 'all', query: 'Trump'}],
    aggregateBy: 'source',
    startAt: '2019-08-24T14:15:22Z',
    stopAt: '2019-08-24T14:15:22Z',
    order: 'asc',
    limit: 50
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /api/aggregation`

*query for get aggregation*

query for get aggregation from Manticore

> Body parameter

```json
{
  "queries": [
    {
      "name": "all",
      "query": "Trump"
    }
  ],
  "aggregateBy": "source",
  "startAt": "2019-08-24T14:15:22Z",
  "stopAt": "2019-08-24T14:15:22Z",
  "order": "asc",
  "limit": 50
}
```

<h3 id="post__api_aggregation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="post__api_aggregation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error in server|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__api_content

> Code samples

```http
POST /api/content HTTP/1.1
Content-Type: application/json
Host: localhost:3443
Content-Length: 156

{"queries":[{"name":"all","query":"Trump"}],"return":["subject"],"startAt":"2019-08-24T14:15:22Z","stopAt":"2019-08-24T14:15:22Z","startIndex":0,"limit":50}
```

```javascript
import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://localhost:3443/api/content',
  headers: {'Content-Type': 'application/json'},
  data: {
    queries: [{name: 'all', query: 'Trump'}],
    return: ['subject'],
    startAt: '2019-08-24T14:15:22Z',
    stopAt: '2019-08-24T14:15:22Z',
    startIndex: 0,
    limit: 50
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`POST /api/content`

*query for get content*

query for get content from Manticore

> Body parameter

```json
{
  "queries": [
    {
      "name": "all",
      "query": "Trump"
    }
  ],
  "return": [
    "subject"
  ],
  "startAt": "2019-08-24T14:15:22Z",
  "stopAt": "2019-08-24T14:15:22Z",
  "startIndex": 0,
  "limit": 50
}
```

<h3 id="post__api_content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="post__api_content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error in server|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__api_dict_person

> Code samples

```http
GET /api/dict/person HTTP/1.1
Host: localhost:3443

```

```javascript
import axios from "axios";

const options = {method: 'GET', url: 'http://localhost:3443/api/dict/person'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /api/dict/person`

*query for create dictionary*

query for get content from Manticore

<h3 id="get__api_dict_person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|success|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|error in server|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-manti-manticoresearch--">Загальна інформація</h1>

## get__

> Code samples

```http
GET / HTTP/1.1
Accept: text/html
Host: localhost:3443

```

```javascript
import axios from "axios";

const options = {method: 'GET', url: 'http://localhost:3443/', headers: {Accept: 'text/html'}};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

`GET /`

*Отримати загальний опис сервісу*

Повертає сторінку загального опису

> Example responses

> 200 Response

```
"Not found"
```

<h3 id="get__-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Успішна відповідь|string|

<aside class="success">
This operation does not require authentication
</aside>

