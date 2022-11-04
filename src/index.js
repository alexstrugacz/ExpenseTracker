import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyBwmsNdPj-Kdszor0aRunAduqy_ND-UDl4",
  authDomain: "expensetracker-8bb26.firebaseapp.com",
  projectId: "expensetracker-8bb26",
  storageBucket: "expensetracker-8bb26.appspot.com",
  messagingSenderId: "319086887686",
  appId: "1:319086887686:web:6a9163de037a1427e71487",
  measurementId: "G-FBBT9QVMPT",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
