import { getDatabase, onValue, ref } from "firebase/database";

// This is an action creator that fetches Lomba data based on a user ID and competition type (jenisLomba).
export const getLombaAPI = (userId, jenisLomba) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const lombaRef = ref(db, jenisLomba + "/" + userId);

    // Attach an event listener to listen for changes in the data
    onValue(lombaRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(`get data: ${jenisLomba} :`,data);

        // Transform the data into an array of objects
        const dataObject = Object.keys(data).map((key) => ({
          id: key,
          dataObject: data[key],
        }));

        // Dispatch an action to update the Redux store with the fetched data
        dispatch({ type: 'SET_LOMBA', value: dataObject });

        // Resolve the Promise with the fetched data
        resolve(dataObject);
      } else {
        // Reject the Promise with an error message if no data is found
        reject("No data found for the user");
      }
    });
  });
};
