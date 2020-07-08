import React from 'react'

export const Home = React.lazy(() => import('../containers/Home/Home'))
export const Profile = React.lazy(() => import('../containers/Profile/Profile'))
export const Orders = React.lazy(() => import('../containers/Orders/Orders'))
export const Promotions = React.lazy(() =>
  import('../containers/Promotions/Promotions'),
)
export const Login = React.lazy(() => import('../containers/Login/Login'))
export const NotFound = React.lazy(() =>
  import('../components/NotFound/NotFound'),
)
