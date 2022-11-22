'use strict';

const jestOpenAPI = require('jest-openapi').default
const request = require('supertest')
const path = require('path')

jestOpenAPI(path.join(__dirname, '../oas.yaml'))
let app = require( '../app.js' )
jest.setTimeout(30000)
describe('Тести для шляху "/api/dict/person"', () => {
    
    describe('Отримати інформацію з ManticoreSearch', () => {
   
        test('Повинен повернути збережені дані по запиту з БД, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле в запиті type відсутнє в БД, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/temp")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле limit встановлено, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поля limit,startAt встановлено, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10&startAt=2022-10-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поля limit,startAt,stopAt встановлено, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10&startAt=2022-10-21T07:17:41.663Z&stopAt=2022-11-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startAt > stopAt, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10&startAt=2022-11-21T07:17:41.663Z&stopAt=2022-10-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле startAt > поточного, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10&startAt=2025-11-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поле stopAt < поточного, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/person?limit=10&stopAt=2021-10-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поля limit,startAt,stopAt встановлено і type datatime, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/datatime?limit=10&startAt=2022-10-21T07:17:41.663Z&stopAt=2022-11-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
        test('Поля limit,startAt,stopAt встановлено і type em, код відповіді - 200', async () => {
            let res = await request(app).get("/api/dict/em?limit=10&startAt=2022-10-21T07:17:41.663Z&stopAt=2022-11-21T07:17:41.663Z")
            expect(res.status).toEqual(200)
            expect(res)
        })
 
    })

})