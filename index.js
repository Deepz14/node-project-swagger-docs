const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const PORT = process.env.PORT || 5000;

let courses = [
    {
        id: 11,
        name: 'Reactjs',
        price: '299'
    },
    {
        id: 22,
        name: 'Angular',
        price: '499'
    },
    {
        id: 33,
        name: 'Django',
        price: '799'
    }
]

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

app.get('/api/courseObject', (req, res) => {
    res.status(200).json({
        id: 10,
        name: 'Javascript',
        price: 399
    })
})

app.get('/api/courses', (req, res) => {
    res.status(200).send(courses)
})

app.post('/api/courses', (req, res) => {
    courses.push(req.body);
    res.send(req.body);
})

app.get('/api/mycourse/:courseId', (req, res) => {
    const findCourse = courses.find((course) => course.id === Number(req.params.courseId));
    res.status(200).send(findCourse);
})

app.get('/api/coursesquery/', (req, res) => {
    let location = req.query.location
    let device = req.query.device

    res.status(200).send({location, device})
})

app.get('/api/:token', (req, res) => {
    const getToken = req.params.token
    res.status(200).send(getToken)
})

app.listen(PORT, () => {
    console.log(`server started running on the PORT: ${PORT}`);
})
