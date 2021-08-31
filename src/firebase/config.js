import firebase from 'firebase/app'
require('firebase/auth')

console.log(firebase.apps.length === 0)
if(firebase.apps.length === 0)
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID
  })


export default firebase
