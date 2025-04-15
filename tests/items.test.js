const request = require('supertest');
const app = require('../app'); 

describe('GET /items/:id', () => {
  it('should return an item when valid id is provided', async () => {
    const res = await request(app).get('/items/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body.name).toBe('Item 1');
  });

  it('should return 404 when item is not found', async () => {
    const res = await request(app).get('/items/999');
    expect(res.status).toBe(404);
    expect(res.text).toBe('Item not found.');
  });
});
