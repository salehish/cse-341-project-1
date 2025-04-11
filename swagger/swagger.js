const swaggerAutogen = require('swagger-autogen')();

const doc = {
  openapi: '3.0.0',
  info: {
    title: 'Contacts API',
    description: 'API to manage contacts',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description:'Local server'
    },
  ],
};

const outputFile = './swagger/swagger-output.json'; 
const endpointsFiles = ['./server.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
