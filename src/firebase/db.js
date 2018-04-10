import { db } from './firebase';
import firebase from 'firebase'

// User API
// Add createdAt, updatedAt, type, etc.
export const doCreateUser = (id, email, type) =>
  db.collection(`users`).set({
    id,
    email,
    type
  });

export const onceGetUsers = () => {
  // db.ref('users').once('value');
  // db.collection('users').get().then('value');

  return db.collection("users").get().then(users => {
    users.forEach(user => {
      // user.data() is never undefined for query user snapshots
      console.log(user.id, " => ", user.data());
      return {
        id: user.id,
        email: user.email
      }
    });
  });

}


// Other db APIs ...
