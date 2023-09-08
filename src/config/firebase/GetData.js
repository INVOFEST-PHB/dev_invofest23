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
export const getWorkshopAPI = (userId, jenisWorkshop) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const WorkshopRef = ref(db, jenisWorkshop + "/" + userId);

    // Attach an event listener to listen for changes in the data
    onValue(WorkshopRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(`get data Workshop: ${jenisWorkshop} :`,data);

        // Transform the data into an array of objects
        const dataObject = Object.keys(data).map((key) => ({
          id: key,
          dataObject: data[key],
        }));

        // Dispatch an action to update the Redux store with the fetched data
        dispatch({ type: 'SET_WORKSHOP', value: dataObject });

        // Resolve the Promise with the fetched data
        resolve(dataObject);
      } else {
        // Reject the Promise with an error message if no data is found
        reject("No data found for the user");
      }
    });
  });
};


export const getSeminarAPI = (uid) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const biodataRef = ref(db, "seminar/" + uid);
    // Attach an event listener to listen for changes in the data
    onValue(biodataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('get data seminar:', data)
        // Resolve the Promise with the retrieved biodata
        const dataObject = [];
         Object.keys(snapshot.val()).map(key=>{
          dataObject.push({
          id : key,
          dataObject : snapshot.val()[key]
        })
     });
        dispatch({type: 'SET_SEMINAR', value: dataObject})
        resolve(data);
      } else {
        // Reject the Promise with an error message
        // reject("No data found for the user");
      }
    });
  });
};
export const getTalkshowAPI = (uid) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    const biodataRef = ref(db, "talkshow/" + uid);
    // Attach an event listener to listen for changes in the data
    onValue(biodataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('get data Talkshow:', data)
        // Resolve the Promise with the retrieved biodata
        const dataObject = [];
         Object.keys(snapshot.val()).map(key=>{
          dataObject.push({
          id : key,
          dataObject : snapshot.val()[key]
        })
     });
        dispatch({type: 'SET_TALKSHOW', value: dataObject})
        resolve(data);
      } else {
        // Reject the Promise with an error message
        // reject("No data found for the user");
      }
    });
  });
};