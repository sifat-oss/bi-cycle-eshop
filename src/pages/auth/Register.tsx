/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "@/components/form/CZForm";
import PHInput from "@/components/form/CZInput";
import Image7 from "../../images/login7.png";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();

  const defaultValues = {
    name: "customer",
    email: "customer3@test.com",
    password: "customer123456",
  };

  const [register] = useRegisterMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Register in...");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log(userInfo);
      const res = await register(userInfo).unwrap();
      toast.success("Register successful", { id: toastId, duration: 2000 });

      if (res?.data?.needsPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/login`);
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
        className=" w-96 rounded-md shadow-md relative top-1/4 left-40 p-5 md:p-8"
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <PHInput type="text" name="name" label="Name:" />
          <PHInput type="text" name="email" label="Email:" />
          <div className="relative">
            <PHInput type="text" name="password" label="Password:" />
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </PHForm>
      </div>
    </div>
  );
};

export default Register;
