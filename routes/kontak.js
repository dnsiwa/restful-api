//-----------import express-----------
const express = require('express')
const router = express.Router()
const db = require('../db');

//tampilkan semua data kontak
router.get('/',(req, res) => {
    let sql = "SELECT * FROM kontak";
    let query = db.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
  //tampilkan data kontak berdasarkan id
  router.get('/:id',(req, res) => {
    let sql = "SELECT * FROM kontak WHERE kontak_id="+req.params.id;
    let query = db.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
  //Tambahkan data kontak baru
  router.post('/',(req, res) => {
    let data = {no_ktp: req.body.no_ktp, nama: req.body.nama, no_hp: req.body.no_hp, alamat: req.body.alamat};
    let sql = "INSERT INTO kontak SET ?";
    let query = db.query(sql, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
  //Edit data kontak berdasarkan id
  router.put('/:id',(req, res) => {
    let sql = "UPDATE kontak SET no_ktp='"+req.body.no_ktp+"', nama='"+req.body.nama+"', no_hp='"+req.body.no_hp+"', alamat='"+req.body.alamat+"' WHERE kontak_id="+req.params.id;
    let query = db.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
   
  //Delete data kontak berdasarkan id
  router.delete('/:id',(req, res) => {
    let sql = "DELETE FROM kontak WHERE kontak_id="+req.params.id+"";
    let query = db.query(sql, (err, results) => {
      if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });
//-----------export-----------
module.exports = router