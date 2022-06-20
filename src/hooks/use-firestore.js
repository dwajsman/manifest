import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../lib/utils";

// Hook
export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState({});

  // get data from firestore with query
  const getData = async () => {
    try {
      setLoading((prev) => ({ ...prev, getData: true }));

      const dataRef = collection(db, "users");
      if (auth.currentUser) {
        const filterQuery = query(
          dataRef,
          where("userId", "==", auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(filterQuery);
        const dataDb = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataDb);
      } else {
        const querySnapshot = await getDocs(dataRef);
        const dataDb = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataDb);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, getData: false }));
    }
  };

  // get data all users from firestore
  const getDataUsers = async () => {
    try {
      setLoading((prev) => ({ ...prev, getDataUsers: true }));

      const dataRef = collection(db, "users");
      // const filterQuery = query(
      // 	dataRef,
      // 	where("userId", "==", auth.currentUser.uid)
      // );
      const querySnapshot = await getDocs(dataRef);
      const dataDb = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataDb);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, getDataUsers: false }));
    }
  };

  //  add data to firestore
  const addData = async (dataUser) => {
    console.log("datauser", dataUser);
    try {
      setLoading((prev) => ({ ...prev, addData: true }));
      const newDoc = {
        username: dataUser.username,
        fullName: dataUser.fullName,
        email: auth.currentUser.email,
        phone: dataUser.phone,
        role: "user",
        userId: auth.currentUser.uid,
      };

      const dataRef = collection(db, "users");

      await addDoc(dataRef, newDoc);
      setData([...data, newDoc]);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, addData: false }));
    }
  };

  // update data to firestore
  const updateData = async (dataUser) => {
    try {
      console.log(dataUser);
      setLoading((prev) => ({ ...prev, updateData: true }));
      const dataRef = doc(db, "users", dataUser.id);
      const newData = {
        username: dataUser.username,
        fullName: dataUser.fullName,
        phone: dataUser.phone,
        userId: auth.currentUser.uid,
      };
      await updateDoc(dataRef, newData);

      setData((prev) =>
        prev.map((item) => (item.id === dataUser.id ? newData : item))
      );
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, updateData: false }));
    }
  };

  // delete data to firestore
  const deleteData = async (idUser) => {
    try {
      setLoading((prev) => ({ ...prev, [idUser]: true }));
      const docRef = doc(db, "users", idUser);
      await deleteDoc(docRef);
      setData(data.filter((item) => item.id !== idUser));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, [idUser]: false }));
    }
  };

  // return data
  return {
    data,
    error,
    loading,
    getData,
    addData,
    getDataUsers,
    deleteData,
    updateData,
  };
};