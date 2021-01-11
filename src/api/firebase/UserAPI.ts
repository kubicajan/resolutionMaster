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
        .createUserWithEmailAndPassword(
          values.nickname + "@gmail.com",
          "123456"
        )
        .then((user) => {
          //adding user to firestore (if not yet there)
          const userRef = firebase
            .firestore()
            .doc(`${collection}/${values.nickname}`);
          userRef
            .get()
            .then((doc) => {
              if (!doc.exists) {
                const { nickname } = values;
                const user: UserInterface = { nickname };
                userRef.set(user);
                resolve();
              }
            })
            .catch((error) =>
              reject(
                console.error("Error finding user in Firestore db: ", error)
              )
            );
        })
        .catch((error) => reject(console.error("Error saving user ", error)));
    });
  }
}

export const UserApi = new UserAPI();
