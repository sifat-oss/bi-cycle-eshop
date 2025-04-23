import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { toast } from "sonner";

type TPrivateRoutes = {
  children: ReactNode;
};

const PrivateRoutes = ({ children }: TPrivateRoutes) => {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (!user) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    toast.error("Please log in to proceed with your order");
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoutes;
