import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute({ redirectPath = '/login', token }) {
  if (!token) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
