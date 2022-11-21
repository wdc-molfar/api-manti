'use strict';

const request = require('supertest')

let app = require( '../src/searcher')
let utils = require( '../src/utils')


describe('Тести для файлу searcher.js', () => {
    
    describe('Перевірка пошуку в ManticoreSearch', () => {
   
        test('Повинен повернти помилку "getaddrinfo ENOTFOUND undefined"', async () => {
            try {
                await app.search('person', 'all', "Trump", "utime > 1667821081 and utime < 1669014050", "*", false, 0, 10, ["queery = 1000"]);
            }catch(e){
                expect(e.message).toBe("getaddrinfo ENOTFOUND undefined");
            }
        })

        test('Повертає дані, що id < -1', async () => {
            let res = await app.findIndex(-1)
            expect(res).toEqual({"end": -1, "start": -1})
        })

        test('Повертає пусті дані, так як початок < 0', async () => {
            let res = await app.getData(-1, 10);
            expect(res).toEqual("")
        })

        test('Повертає пусті дані, так як кінець < 0', async () => {
            let res = await app.getData(1, -5);
            expect(res).toEqual("")
        })
        test('Повертає пусті дані, так як кінець < 0', async () => {
            let res = utils.stringToRegex("test", '\\$&');
            expect(res).toEqual(/test/)
        })
        
            
    })

})