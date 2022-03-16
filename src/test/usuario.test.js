
import request from "supertest";

import app from "../app.js";

describe('GET /usuarios',()=>{
    test('Se o status é 200',()=>{
        return request(app).get('/usuario')
        .then((response)=>{
            console.log(response);
            expect(response.statusCode).toBe(200)
        })
    })
})