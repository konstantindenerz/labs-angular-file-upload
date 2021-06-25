const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload({
  createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//start app
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`App is listening on port ${port}.`)
);


app.post('/upload', async (req, res) => {
  try {
    console.log(req.files)
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded'
      });
    } else {
      let data = [];

      const file = req.files.file;
      file.mv('./Downloads/' + Date.now() + file.name);

      //push file details
      data.push({
        name: file.name,
        mimetype: file.mimetype,
        size: file.size
      });

      //return response
      res.send({
        status: true,
        message: 'Files are uploaded',
        data: data
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});
