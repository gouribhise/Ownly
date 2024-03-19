import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
 
 
function AuthWrapper({children}) {
    const {
        isLoading,
        error,
      } = useAuth0();
      if(isLoading){
return <div>
 <h1>loading...</h1>
</div>
      }
      if(error){
return <div>
    <h1>{error.message}</h1>
</div>
      }
  return <> {children}</>;
}
 

export default AuthWrapper;