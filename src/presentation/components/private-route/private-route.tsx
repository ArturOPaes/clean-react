import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { currentAccountState } from '@/presentation/components'
import { useRecoilValue } from 'recoil'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken ? (
    <Route {...props} />
  ) : (
    <Route {...props} component={() => <Redirect to="/login" />} />
  )
}

export default PrivateRoute
