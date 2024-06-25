import { getAccessTokenFromStorage, getRefreshTokenFromStorage, getUserIdToStorage } from '@services'
import { useRouter } from 'next/navigation';
import React from 'react'

// check for userId, accessToken, and refreshToken in the local storage if not then move to login page else return the component
const AuthenticateRoute = (
  Component: React.FC
) => {

  const userId = getUserIdToStorage();
  const accessToken = getAccessTokenFromStorage();
  const refreshToken = getRefreshTokenFromStorage();
  const router = useRouter();

  const isAuthenticated = userId && accessToken && refreshToken;

  if(!isAuthenticated) {
    router.replace('/login');
  }

  () => {
    if (isAuthenticated) {
      return <Component />;
    }
    return (
      <div>REDIRECTING</div>
    )
  }
}

export default AuthenticateRoute