import { getDatabase, ref, set, get } from "firebase/database";

export const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  console.log("db", db);
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
};

export const readUserData = async () => {
  const db = getDatabase();
  const result = await get(ref(db, `categories`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });

  return result;
};
