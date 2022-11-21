# @molfar/api-manti. Специфікація модуля

## Functions

<dl>
<dt><a href="#aggregate">aggregate(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#content">content(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#dictionary">dictionary(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#timeline">timeline(req, res)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

<a name="aggregate"></a>

## aggregate(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | Запит до серверу |
| req.content.queries | <code>String</code> | Запит |
| req.content.aggregateBy | <code>String</code> | Поле по якому проводити агрегацію |
| req.content.order | <code>String</code> | Сортування результатів (за замовченням asc) |
| req.content.limit | <code>String</code> | Максимальна кількість результатів у відповіді |
| req.content.startAt | <code>String</code> | Дата з якої починати пошук |
| req.content.stopAt | <code>String</code> | Дата до якої шукати результати |
| res | <code>Object</code> | Відповідь від серверу |

<a name="content"></a>

## content(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | Запит до серверу |
| req.content.queries | <code>String</code> | Запит |
| req.content.return | <code>String</code> | Поля які необхідно видати |
| req.content.limit | <code>String</code> | Максимальна кількість результатів у відповіді |
| req.content.startIndex | <code>String</code> | Індекс з якого починати пошук |
| req.content.startAt | <code>String</code> | Дата з якої починати пошук |
| req.content.stopAt | <code>String</code> | Дата до якої шукати результати |
| res | <code>Object</code> | Відповідь від серверу |

<a name="dictionary"></a>

## dictionary(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | Запит до серверу |
| req.query | <code>String</code> | Запит |
| req.params | <code>String</code> | ["type"] Поле по яку потрібно агрегувати інформацію |
| req.params | <code>String</code> | ["item"] Персона, по якій проводити пошук |
| req.query.limit | <code>String</code> | Максимальна кількість результатів у відповіді |
| req.query.startAt | <code>String</code> | Дата з якої починати пошук |
| req.query.stopAt | <code>String</code> | Дата до якої шукати результати |
| res | <code>Object</code> | Відповідь від серверу |

<a name="timeline"></a>

## timeline(req, res) ⇒ <code>Promise</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>Object</code> | Запит до серверу |
| req.content.queries | <code>String</code> | Запит |
| content.points | <code>String</code> | Кількість точок для графіка, що потрібно вивести |
| req.content.startAt | <code>String</code> | Дата з якої починати пошук |
| req.content.stopAt | <code>String</code> | Дата до якої шукати результати |
| res | <code>Object</code> | Відповідь від серверу |

