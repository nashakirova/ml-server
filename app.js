
const express = require('express');
const nodePickle = require('node-pickle');
const fs = require('fs');
const jpickle = require('jpickle');
const binary = fs.readFileSync('./models/neuralnetwork.pkl','binary');
const model = jpickle.loads(binary);

const app = express();
app.use(express.json());
const port = process.env.port || 3001;
app.listen(port, () => {console.log('server sterted');});
app.get('/model', (request, response) => {
    // Convert pickled object to JSON object
    nodePickle.load(model)
    .then(data => {
    response.json(data);
    });
});
app.post('/model',(request, response) => {
response.send('all ok');
});
