var express = require('express')
const router = express.Router()

const timeline = require('../controllers/timelineController')
const aggregation = require('../controllers/aggregationController')
const content = require('../controllers/contentController')
const dict = require('../controllers/dictionaryController')
/**
 * @swagger
 * 
 *  /api/timeline:
 *    post:
 *      summary: query for get timeline
 *      description: query for get timeline from Manticore
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                 queries:
 *                   description: queries of request
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                          example: all
 *                        query:
 *                          type: string
 *                          example: Trump
 *                 startAt: 
 *                   type: string
 *                   format: date-time
 *                 stopAt:
 *                   type: string
 *                   format: date-time
 *                 points: 
 *                   type: integer
 *                   example: 50
 *      responses:
 *        200:
 *          description: success
 *        500:
 *          description: error in server
 */
router.post('/timeline', timeline)

/**
 * @swagger
 * 
 *  /api/aggregation:
 *    post:
 *      summary: query for get aggregation
 *      description: query for get aggregation from Manticore
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                 queries:
 *                   description: queries of request
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                          example: all
 *                        query:
 *                          type: string
 *                          example: Trump
 *                 aggregateBy: 
 *                   type: string
 *                   example: source
 *                 startAt: 
 *                   type: string
 *                   format: date-time
 *                 stopAt:
 *                   type: string
 *                   format: date-time
 *                 order: 
 *                   type: string
 *                   example: asc 
 *                 limit: 
 *                   type: integer
 *                   example: 50
 *      responses:
 *        200:
 *          description: success
 *        500:
 *          description: error in server
 */
router.post('/aggregation', aggregation)

/**
 * @swagger
 * 
 *  /api/content:
 *    post:
 *      summary: query for get content
 *      description: query for get content from Manticore
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                 queries:
 *                   description: queries of request
 *                   type: array
 *                   items:
 *                      type: object
 *                      properties:
 *                        name:
 *                          type: string
 *                          example: all
 *                        query:
 *                          type: string
 *                          example: Trump
 *                 return:
 *                   type: array
 *                   items: 
 *                      type: string
 *                      example: subject
 *                 startAt: 
 *                   type: string
 *                   format: date-time
 *                 stopAt:
 *                   type: string
 *                   format: date-time
 *                 startIndex: 
 *                   type: integer
 *                   example: 0 
 *                 limit: 
 *                   type: integer
 *                   example: 50
 *      responses:
 *        200:
 *          description: success
 *        500:
 *          description: error in server
 */
 router.post('/content', content)

 /**
 * @swagger
 * 
 *  /api/dict/person:
 *    get:
 *      summary: query for create dictionary
 *      description: query for get content from Manticore
 *      responses:
 *        200:
 *          description: success
 *        500:
 *          description: error in server
 * 
 */
 router.get('/dict/:type', dict)
 router.get('/dict/:type/:item', dict)

module.exports = router

