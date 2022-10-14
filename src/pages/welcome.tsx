import { getAuth, signInWithPopup } from "firebase/auth";
import type { NextPage } from "next";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { getApp } from "firebase/app";
import { useRouter } from "next/router";
import Head from "next/head";

const firebaseApp = getApp();
const auth = getAuth(firebaseApp);
const Welcome: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const router = useRouter();

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>CodeBlog | LogIn</title>
      </Head>
      <div>
        <h1>カレッジアカウントでログイン</h1>
        <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
      </div>
      {user ? <>user sign in</> : <>logouted</>}
    </>
  );
};

export default Welcome;
