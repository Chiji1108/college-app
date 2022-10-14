import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseApp = getApp();
const auth = getAuth(firebaseApp);
const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {user ? <div>{user.email}</div> : <div>logouted</div>}
    </div>
  );
};

export default Home;
