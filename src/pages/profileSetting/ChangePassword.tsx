/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSubmit = async (info: any) => {
    const toastId = toast.loading("Changing password...");

    try {
      const passwordData = {
        oldPassword: info.oldPassword,
        newPassword: info.newPassword,
      };

      await changePassword(passwordData).unwrap();
      toast.success("Password changed successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to change password", { id: toastId });
    }
  };

  return (
    <CZForm onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        {/* Old Password Input */}
        <div className="relative">
          <CZInput
            type={showOldPassword ? "text" : "password"}
            label="Old Password"
            name="oldPassword"
          />
          <button
            type="button"
            className="absolute right-3 top-[60%] transform -translate-y-1/2"
            onClick={() => setShowOldPassword((prev) => !prev)}
          >
            {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* New Password Input */}
        <div className="relative">
          <CZInput
            type={showNewPassword ? "text" : "password"}
            label="New Password"
            name="newPassword"
          />
          <button
            type="button"
            className="absolute right-3 top-[60%] transform -translate-y-1/2"
            onClick={() => setShowNewPassword((prev) => !prev)}
          >
            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
    </CZForm>
  );
};

export default ChangePassword;
