const mariadb = require('mariadb');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const connection = mariadb.createPool(config.databaseOptions);
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/list', function(request, result){
  connection.getConnection()
    .then(conn => {
        conn.query("SELECT distinct cm.chef_master_id, cm.chef_name, fm.food_name, fm.food_descr, fm.food_price_descr, fm.image_loc FROM evt_cat ec, chef_master cm, food_master fm, evt_master em, evt_detail ed WHERE ec.evt_cat_id = em.evt_cat_id AND cm.chef_master_id = fm.chef_master_id AND em.evt_master_id = ed.evt_master_id AND fm.food_master_id = ed.food_master_id AND fm.food_active_flag = 'Y' AND ec.evt_cat_id = 1 ORDER BY cm.chef_name ASC;")
        .then((res) => {
          result.send(res);
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
    }).catch(err => {
      console.log("error")
    });
})


app.listen(3001);