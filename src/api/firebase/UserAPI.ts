import {UserInterface} from "../../models/User";
import firebase from "firebase";

const collection = 'users';

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
                                id: d.id,
                            };
                        }) as UserInterface[]
                    );
                })
                .catch((err) => reject(err));
        });
    }
}


export const UserApi = new UserAPI();
