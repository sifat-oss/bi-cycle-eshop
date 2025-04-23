/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "@/components/form/CZForm";
import PHInput from "@/components/form/CZInput";
import Image7 from "../../images/login7.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { TUserFromToken } from "@/types";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const defaultValues = {
    email: "customer1@test.com",
    password: "customer123456",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const token = res.data.token;
      const user = verifyToken(token) as TUserFromToken;
      dispatch(setUser({ user: user, token: token }));
      toast.success("Login successful", { id: toastId, duration: 2000 });

      if (res?.data?.needsPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/`);
      }
    } catch (error) {
      toast.error("Invalid credentials", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div
      className="bg-black"
      style={{
        height: "100vh",
        backgroundImage: `url(${Image7})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div
        className=" w-96 rounded-md shadow-md relative top-1/3 left-40 p-5 md:p-8"
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <PHInput type="text" name="email" label="Email:" />
          <div className="relative">
            <PHInput
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password:"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 top-1/2 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Don't have an account?
              <a
                href="/register"
                className="text-blue-500 hover:underline ml-1"
              >
                Create One
              </a>
            </p>
          </div>
        </PHForm>
      </div>
    </div>
  );
};

export default Login;
