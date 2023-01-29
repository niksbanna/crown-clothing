import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up-page/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const unSubscribeFromAuth = useRef(null);

  useEffect(() => {
    unSubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      setIsLoading(true);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          setIsLoading(false);
        });
      } else {
        setCurrentUser(userAuth);
        setIsLoading(false);
      }
    });
    return () => {
      unSubscribeFromAuth.current();
    };
  }, []);
  console.log(isLoading ? "Loading user..." : currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>

    </div>
  );
}

export default App;
