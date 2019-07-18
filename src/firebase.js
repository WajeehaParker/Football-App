import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuE6l-zBcFN3rdxuVMmXr0lFJ6Bw9AzfA",
  authDomain: "m-city-5552e.firebaseapp.com",
  databaseURL: "https://m-city-5552e.firebaseio.com",
  projectId: "m-city-5552e",
  storageBucket: "gs://m-city-5552e.appspot.com/",
  messagingSenderId: "820163077188",
  appId: "1:820163077188:web:a517a051fcdc1392"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB=firebase.database();
const firebaseMatches=firebaseDB.ref('matches');
const firebasePromotions=firebaseDB.ref('promotions');
const firebaseTeams=firebaseDB.ref('teams');
const firebasePlayers=firebaseDB.ref('players');


export{firebase, firebaseMatches, firebasePromotions, firebaseTeams, firebaseDB, firebasePlayers};
