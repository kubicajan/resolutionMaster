import { UserInterface } from "../../models/User";
import firebase from "firebase";

const collection = "users";

class UserAPI {
  getAll(): Promise<UserInterface[]> {
    return new Promise((resolve, reject) => {
      const firebaseRef = firebase.firestore().collection(collection);

      firebaseRef
        .get()
        .then((doc) => {
          resolve(
            doc.docs.map((d) => {
              const data = d.data();

              return {
                ...data,
              };
            }) as UserInterface[]
          );
        })
        .catch((err) => reject(err));
    });
  }

  signUp(values: UserInterface): Promise<void> {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword("jan.kubica@gmail.com", "123456")
        .then((user) => {
          // Signed in
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // ..
        });

      // .then((user) => {
      //   const userRef = firebase
      //     .firestore()
      //     .doc(`${collection}/${user.user?.uid}`);
      //   userRef.get().then((doc) => {
      //     if (!doc.exists) {
      //       const { nickname } = values;
      //       const user: UserInterface = {
      //         nickname,
      //       };
      //       userRef.set(user);
      //       resolve();
      //     }
      //   });
      // });
    });
  }
}

export const UserApi = new UserAPI();
