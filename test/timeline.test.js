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
    "startAt": "2022-11-21T07:01:36.660Z",
    "stopAt": "2022-11-21T07:01:36.660Z",
    "points": 50
  }`
  let test_2 = `{
    "startAt": "2022-11-21T07:01:36.660Z",
    "stopAt": "2022-11-21T07:01:36.660Z",
    "points": 50
  }`
  let test_3 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "startAt": "2022-11-21T07:01:36.660Z",
    "stopAt": "2022-11-21T07:01:36.660Z"
  }`
  let test_4 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "startAt": "2022-11-21T07:01:36.660Z",
    "stopAt": "2022-11-21T07:01:36.660Z",
    "points": -1
  }`
  let test_5 = `{
    "queries": [],
    "startAt": "2022-10-21T07:01:36.660Z",
    "stopAt": "2022-11-21T07:01:36.660Z",
    "points": 50
  }`
  let test_6 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "stopAt": "2022-11-21T07:01:36.660Z",
    "points": 50
  }`
  let test_7 = `{
    "queries": [
      {
        "name": "all",
        "query": "Trump"
      }
    ],
    "startAt": "2022-11-21T07:01:36.660Z",
    "points": 50
  }`
describe('Тести для шляху "/api/timeline"', () => {
    
    describe('Отримати інформацію у виді графіку з ManticoreSearch', () => {
   
        test('Повинен повернути збережені дані у виді графику по запиту з БД, код відповіді - 200', async () => {
            let res = await request(app).post("/api/timeline")
            .send(test_1)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле queries відсутнє, код відповіді - 200', async () => {
          let res = await request(app).post("/api/timeline")
          .send(test_2)
          .set("Content-Type","application/json; charset=utf-8")
          expect(res.status).toEqual(200)
          expect(res)
      })
      test('Поле points відсутнє, код відповіді - 200', async () => {
        let res = await request(app).post("/api/timeline")
        .send(test_3)
        .set("Content-Type","application/json; charset=utf-8")
        expect(res.status).toEqual(200)
        expect(res)
    })
    test('Поле points < 0, код відповіді - 200', async () => {
      let res = await request(app).post("/api/timeline")
      .send(test_4)
      .set("Content-Type","application/json; charset=utf-8")
      expect(res.status).toEqual(200)
      expect(res)
  })
    test('Поле queries порожнє, код відповіді - 200', async () => {
      let res = await request(app).post("/api/timeline")
      .send(test_5)
      .set("Content-Type","application/json; charset=utf-8")
      expect(res.status).toEqual(200)
      expect(res)
  })
  test('Поле startAt відсутнє, код відповіді - 200', async () => {
    let res = await request(app).post("/api/timeline")
    .send(test_6)
    .set("Content-Type","application/json; charset=utf-8")
    expect(res.status).toEqual(200)
    expect(res)
  })
    test('Поле stopAt відсутнє, код відповіді - 200', async () => {
      let res = await request(app).post("/api/timeline")
      .send(test_7)
      .set("Content-Type","application/json; charset=utf-8")
      expect(res.status).toEqual(200)
      expect(res)
    })    

 
    })

})