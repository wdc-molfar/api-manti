'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../app.js' )


let data = `{
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

describe('Тести для шляху "/api/timeline"', () => {
    
    describe('Отримати інформацію з ManticoreSearch', () => {
   
        test('Повинен повернути збережені дані по запиту з БД, код відповіді - 200', async () => {
            let res = await request(app).post("/api/timeline")
            .send(data)
            .set("Content-Type","application/json; charset=utf-8")
            expect(res.status).toEqual(200)
            expect(res)
        })
 
    })

})