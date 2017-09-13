const cron = require('node-cron');
const MangoTree = require('./helper/mangotree')
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDn1TEJlick5eX6QUdyT3i1jyd7GNhFC7c",
    authDomain: "pohon-mangga.firebaseapp.com",
    databaseURL: "https://pohon-mangga.firebaseio.com",
    projectId: "pohon-mangga",
};
firebase.initializeApp(config);

let mangoTree = new MangoTree();
var database = firebase.database();

function cronMangga() {
  var task = cron.schedule('*/2 * * * * *', function(){
    if (mangoTree.healthyStatus != false) {
      mangoTree.grow();
      mangoTree.produceMangoes();
      mangoTree.harvest();
      database.ref('mangga').set({
        umur: mangoTree.age,
        tinggi: mangoTree.height,
        harvested: mangoTree.harvested
      });
      // console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
    }
    else {
      console.log('The mango tree has met its end. :sad:\n');
      task.stop();
    }
  });
}


module.exports = {cronMangga};
