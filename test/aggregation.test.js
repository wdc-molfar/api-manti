'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../app.js' )


let test_1 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": 50
  }`

  let test_2 = `{
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": 50
  }`
  let test_3 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": 50
  }`
  let test_4 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "test",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": 50
  }`
  let test_5 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "limit": 50
  }`
  let test_6 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "desc",
    "limit": 50
  }`
  let test_7 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc"
  }`
  let test_8 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "source",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "limit": 50,
    "order": "asc"
  }`
  let test_9 = `{
    "queries": [
        {
          "name": "all",
          "query": "Trump"
        }
      ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "limit": 50,
    "order": "asc"
  }`

  let test_10 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc1",
    "limit": 50
  }`
  let test_11 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": -5
  }`
  let test_12 = `{
    "queries": [],
    "aggregateBy": "source",
    "startAt": "2022-11-21T07:05:31.978Z",
    "stopAt": "2022-11-21T07:05:31.978Z",
    "order": "asc",
    "limit": 50
  }`
describe('Тести для шляху "/api/aggregation"', () => {
    
    describe('Отримати агрегацію даних з ManticoreSearch', () => {
   
        test('Повинен повернути агреговані дані, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_1)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле queries відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_2)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле aggregateBy відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_3)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Агрегація даних по відсутньому полю в БД, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_4)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле order відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_5)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Сортування відповіді by desc, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_6)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле limit відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_7)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startAt відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_8)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле stopAt відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_9)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле order не вірне значення, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_10)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле limit < 0, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_11)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле масиву query пусте, код відповіді - 200', async () => {
            let res = await request(app).post("/api/aggregation")
            .send(test_12)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
 
    })

})