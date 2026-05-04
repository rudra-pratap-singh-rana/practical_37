const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/recipeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
);


app.use(express.json());

const foodRoutes = require('./routes/food');
app.use('/api/foods', foodRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});