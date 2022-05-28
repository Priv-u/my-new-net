import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{ location, navigate, params }} />
    );
  }
  return ComponentWithRouterProp;
}

//NOTE функция взамен withRouter который использовался в react-router-dome 5.0.
//т.к. в версии 6. она не работает.
//Здесь используются Хуки, работу которых я еще не разбирал.
