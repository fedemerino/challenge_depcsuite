import supertest from 'supertest';

const request = supertest('http://localhost:3000');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
