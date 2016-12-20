'use strict';

var firebase = require('firebase-admin');
var serviceAccount = "./serviceAccountKey.json"

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://nacho-crumbs.firebaseio.com'
});

//var ref = firebase.database().ref('subjects');
var ref = firebase.database().ref('ziv');
/*var subjectsRef = ref.child('subjects');

var subjectRef = subjectsRef.push({a:'a'});
var subjectKey = subjectRef.key;
var trans = {};
var subject = {
    'title': 'Blood'
};

trans['subjects1/' + subjectKey] = subject;
trans['log/' + subjectKey] = subject;

ref.update(trans);
*/
//var messagesRef = ref.child('messages');

/*messagesRef.push({
    name: 'ziv',
    admin: true,
    count: 1,
    text: "hey ziv"
});*/
// ref.root.once('value')......
/*ref.child('log').parent.child('subjects').once('value').then(function(snap) {
    console.log(snap.key + "\n");
    console.log(snap.ref.toString() + "\n");
    console.log(JSON.stringify(snap.val()) + "\n\n");
});
*/
//ref.child('log').on('value', function(snap) {
//    console.log(JSON.stringify(snap.val()) + "\n\n");
//});

ref.child('log').orderByKey().limitToLast(1).on('child_added', function(snap) {
    console.log(snap.val() + "\n\n");
});