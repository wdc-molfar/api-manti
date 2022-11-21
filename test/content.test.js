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
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 1,
    "limit": 50
  }`

  let test_2 = `{
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`
  let test_3 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`

  let test_4 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "test"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`
  let test_5 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0
  }`
  let test_6 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": -1
  }`

let test_7 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "limit": 50
  }`

let test_8 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": -1,
    "limit": 50
  }`
  let test_9 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`
  let test_10 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`
  let test_11 = `{
    "queries": [],
    "return": [
      "subject"
    ],
    "startAt": "2022-11-21T07:17:41.663Z",
    "stopAt": "2022-11-21T07:17:41.663Z",
    "startIndex": 0,
    "limit": 50
  }`

describe('Тести для шляху "/api/content"', () => {
    
    describe('Отримати інформацію з ManticoreSearch', () => {
   
        test('Повинен повернути збережені дані по запиту з БД, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_1)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле queries відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_2)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле return відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_3)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле return "test" відсутнє в БД, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_4)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле limit відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_5)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле limit < 0, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_6)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startIndex відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_7)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startIndex < 0, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_8)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startAt відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_9)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле stopAt відсутнє, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_10)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле stopAt пусте, код відповіді - 200', async () => {
            let res = await request(app).post("/api/content")
            .send(test_11)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
    })

})