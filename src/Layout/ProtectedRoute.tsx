import { logout, selectCurrentToken } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyToken';
import { ReactNode } from 'react';
import { JwtPayload } from "jsonwebtoken";

import { Navigate } from 'react-router-dom';

interface CustomJwtPayload extends JwtPayload {
    role?: string; // Add the `role` property here
}
type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);

  let user: CustomJwtPayload | undefined;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
