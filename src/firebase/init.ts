import firebase from 'firebase/app';
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD2VLYIuj3dqswuqpFnuK2sB9LxWFp3dfs",
    authDomain: "sample-chat-554b6.firebaseapp.com",
    databaseURL: "https://sample-chat-554b6.firebaseio.com",
    projectId: "sample-chat-554b6",
    storageBucket: "sample-chat-554b6.appspot.com",
    messagingSenderId: "414720490488",
    appId: "1:414720490488:web:86a9c9605408c9aedb340d"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp;