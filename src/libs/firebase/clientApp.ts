import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const createFirebaseApp = () => {
  const clientCredentials = {
    apiKey: "AIzaSyCB3guDpHeQXk0UoHjEjuF-azRtIZl_u1s",
    authDomain: "shingo-chijiiwa.firebaseapp.com",
    projectId: "shingo-chijiiwa",
    storageBucket: "shingo-chijiiwa.appspot.com",
    messagingSenderId: "578443901125",
    appId: "1:578443901125:web:e908ad4bcb9bba102f98ac",
    measurementId: "G-LKYPRVMZRG",
  };

  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);
    // Check that `window` is in scope for the analytics module!
    if (typeof window !== "undefined") {
      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
      if ("measurementId" in clientCredentials) {
        getAnalytics();
      }
    }
    return app;
  }
};
