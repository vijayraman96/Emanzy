import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Dashboard = () => {
   
const responseFacebook = (response:any) => {
  console.log(response);
}
  return (
    <div>
      <p>Hi people</p>
      <FacebookLogin
    appId="3601169450150870"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
    </div>
  )
}

export default Dashboard
