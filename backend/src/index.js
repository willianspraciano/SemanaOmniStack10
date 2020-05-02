const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();

// MongoDB (Banco não relacional)
mongoose.connect('mongodb+srv://willian:praciano@cluster0-dwzsh.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

