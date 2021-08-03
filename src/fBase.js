import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCa3Lpnxva1zK-wpwMLZpVzmr2o1dmkzBo",
	authDomain: "yeongeoli.firebaseapp.com",
	projectId: "yeongeoli",
	storageBucket: "yeongeoli.appspot.com",
	messagingSenderId: "980812735794",
	appId: "1:980812735794:web:414ec267058463dfba632b",
	measurementId: "G-F3P1SVWWD7",
};

firebase.initializeApp(firebaseConfig);

export const fbInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const dbstorage = firebase.storage();
