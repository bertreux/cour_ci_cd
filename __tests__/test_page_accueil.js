const request = require('supertest');
const server = require('../server');

describe('Test de l\'accueil du serveur', () => {
  it('Retourne un message de bienvenue', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});