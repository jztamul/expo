import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC3j89ng9N0DcrT7uQuHH3qCyamV7VNlyU",
  authDomain: "colour-prediction-ac3e9.firebaseapp.com",
  databaseURL: "https://colour-prediction-ac3e9-default-rtdb.firebaseio.com",
  projectId: "colour-prediction-ac3e9",
  storageBucket: "colour-prediction-ac3e9.appspot.com",
  messagingSenderId: "1095779547068",
  appId: "1:1095779547068:web:6b3d8ad69bfcd1532d1db9",
  measurementId: "G-GLQBF350MQ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
