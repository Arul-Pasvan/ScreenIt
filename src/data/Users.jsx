import { useState } from "react";
import { db, firebase } from "../../firebase";

export default () => {
  const [data, setData] = useState("");

  //   try {
  //     await db
  //       .collection("users")
  //       .doc(firebase.auth().currentUser.email)
  //       .get()
  //       .then((snap) => {
  //         const data = snap.data();
  //         setData(data);
  //         // console.log(data);
  //       });
  //   } catch (err) {
  //     console.log("Error getting Document", err);
  //   }
  //   return [data];

  db.collection("users")
    .doc(firebase.auth().currentUser.email)
    .get()
    .then((snap) => {
      const data = snap.data();
      setData(data);
      // console.log(data);
    })
    .catch((err) => {
      console.log("Error getting Document", err);
    });
  return [data];
};
