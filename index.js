const express = require('express');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
