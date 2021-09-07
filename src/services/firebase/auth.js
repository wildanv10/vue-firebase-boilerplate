import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const register = (user) => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const login = (user) => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error));
  });
};

const logout = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
};

const getAuthState = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) resolve(user);
      else reject("signed out");
    });
  });
};

const getCurrentUser = () => {
  return getAuth().currentUser;
};

export default {
  register,
  login,
  logout,
  getAuthState,
  getCurrentUser,
};
