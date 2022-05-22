const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1> Welcome to the Application! </h1>')
})

app.get('/api/instagram/', (req, res) => {
    const response = {
        username: 'deepz_gram',
        followers: 250,
        following: 600
    }
    res.status(200).json(response);
})

app.get('/api/facebook/', (req, res) => {
    const response = {
        username: 'Deepak Deepz',
        friends: '800',
        dob: '14 April 1999'
    }

    res.status(200).json(response);
})

app.get('/api/:token', (req, res) => {
    const getToken = req.params.token
    res.status(200).json({
        token: getToken
    })
})

app.listen(PORT, () => {
    console.log(`server started running on the PORT: ${PORT}`);
})
