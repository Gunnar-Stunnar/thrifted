"use strict";

const convert = require('heic-convert');
const { promisify } = require('util');
const fs = require('fs');

const integrationSdk = require('../../sdk');
//const util_func = require('util');

const generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function cloudUpload(outputBuffer, res){
  // puts the file into storage then sends it to Share_tribe
  const Id_string = generateRandomString(5); // stop overlap of files
  promisify(fs.writeFile)('./tmp/temp'+Id_string+'.jpg', outputBuffer)
    .then(
      () => {
        // send file to SDK
        integrationSdk.images.upload({
          image: './tmp/temp'+Id_string+'.jpg'
        }, {
          expand: true
        }).then(info => {
          // Delete file
          fs.unlink('./tmp/temp'+Id_string+'.jpg', function(err){
            if(err){
              console.log(err);
            }
          });
          //send file info to user
          res.json(info.data);
        }).catch((err) => {
          console.log(err);
          res.status(400).send("Bad File");
        });

      }
    ).catch(
    (err)=>{
      console.log(err);
      res.status(502).json({Message:"Server Error"});
    }
  );

}

/*
  When image is posted, returns the share_tribe image Link
 */
const imageUpload = function(req, res, next) {
  //console.log("File Upload...");
  if (req.file.mimetype === "image/heic") {
    convert({
      buffer: req.file.buffer, // the HEIC file buffer
      format: 'JPEG',      // output format
      quality: 0.5           // the jpeg compression quality, between 0 and 1
    })
      .then((outputBuffer) => {
        cloudUpload(outputBuffer, res);
      })
      .catch((error) => {
        console.log(error);
        res.json({
          Message: "File not Received"
        });
      });
  } else {
    cloudUpload(req.file.buffer, res);
  }

};

module.exports = imageUpload;
