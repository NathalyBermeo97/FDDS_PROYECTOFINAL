import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db, storage, Timestamp } from "../firebase";
import translateMessage from "../utils/Translate";
import { message } from "antd";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const handleUser = (user) => {
    if (user) {
      // usuario con sesion activa
      setUser(user);

      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      return false;
    }
  };

  async function register(data) {
    console.log("data", data);
    try {
      const userData = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("USER DATA", userData);
      const { uid } = userData.user;
      const { date } = data;
      console.log("date", date);
      const newDate = date.toDate();
      data["date"] = Timestamp.fromDate(newDate);

      await db
        .collection("users")
        .doc(uid)
        .set(data)
        .then(() => {
          console.log("Document successfully written!");
        });

      message.success("Usuario registrado");
      // handleUser(user);
      // return true;
    } catch (error) {
      console.log("error", error);
      // const errorCode = error.code;
      message.error(translateMessage(error));
      handleUser(false);
      throw error;
    }
  }

  async function fetchDataUser(uid) {
    try {
      const doc = await db.collection("users").doc(uid).get();
      const data = await doc.data();
      return data;

      //SetDataUser(data);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  async function registerFormInterships(data) {
    console.log("DATOSSSS FORMULARIO PASANTIAS", data);

    try {
      const { duration, photo } = data;
      console.log("photo:", photo);

      data["duration"] = [
        Timestamp.fromDate(duration[0].toDate()),
        Timestamp.fromDate(duration[1].toDate()),
      ];

      const ref = db.collection("interships").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`interships/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Oferta creada");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function registerFormEvents(data) {
    console.log("DATOSSSS FORMULARIO EVENTOS", data);

    try {
      const { date, time, photo } = data;
      console.log("photo:", photo);

      const newTime = time.toDate();
      data["time"] = Timestamp.fromDate(newTime);
      data["date"] = [
        Timestamp.fromDate(date[0].toDate()),
        Timestamp.fromDate(date[1].toDate()),
      ];

      const ref = db.collection("events").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`events/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Evento creado");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function registerFormCourses(data) {
    console.log("DATOSSSS FORMULARIO CURSOS", data);

    try {
      const { date, time, photo } = data;

      data["time"] = Timestamp.fromDate(time.toDate());
      data["date"] = [
        Timestamp.fromDate(date[0].toDate()),
        Timestamp.fromDate(date[1].toDate()),
      ];

      const ref = db.collection("courses").doc();
      const id = ref.id;
      const newData = { ...data, photo: "" };
      await ref.set(
        {
          ...newData,
          id,
        },
        { merge: true }
      );

      console.log("Document successfully written!");

      //create storage ref

      let storageRef = storage.ref();
      const imgFile = storageRef.child(`courses/${id}`);
      let task = imgFile.put(photo[0].originFileObj);
      task.on(
        "state_changed",

        function progress(snap) {},

        function error(err) {},

        async function complete(err) {
          // Upload completed successfully, now we can get the download URL

          task.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
            console.log("public url:", downloadURL);

            ref.set({ photo: downloadURL }, { merge: true });

            console.log("public url saved on docs");
          });
        }
      );
      message.success("Curso creado");
    } catch (error) {
      console.log("ERROR", error);
      message.error(translateMessage(error));
    }
  }

  async function login(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // handleUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        message.error(translateMessage(errorCode));
        handleUser(false);
      });
  }

  async function logout() {
    try {
      await auth.signOut();
      handleUser(false);
    } catch (error) {}
  }

  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  //
  // const confirmPasswordReset = (password, code) => {
  //   const resetCode = code || getFromQueryString('oobCode');
  //
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(resetCode, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // }

  useEffect(() => {
    // try {
    const init = () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("SESIÓN ACTIVA", user);
          const userData = await fetchDataUser(user.uid);

          handleUser({ ...user, ...userData });

          // history.replace(Routes.HOME);
        } else {
          // User is signed out
          console.log("SIN SESIÓN", user);
          handleUser(false);
        }
      });
    };

    init();
    // } catch (error) {
    //   console.log("NO USER");
    // }
  }, []);

  return {
    user,
    register,
    login,
    logout,
    registerFormEvents,
    registerFormInterships,
    registerFormCourses,
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
