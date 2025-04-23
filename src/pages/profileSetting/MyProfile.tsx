/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import CZSelect from "@/components/form/CZSelect";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { useUpdateUserMutation } from "@/redux/features/userManagement/users";
import { UserProfile } from "@/types";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const MyProfile = ({ user }: { user: UserProfile }) => {
  const [updateUser] = useUpdateUserMutation();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (info: any) => {
    const toastId = toast.loading("Updating User...");

    try {
      const userData = {
        name: info.name || user.name,
        gender: info.gender || user.gender,
        dateOfBirth: info.dateOfBirth || user.dateOfBirth,
        contactNo: info.contactNo || user.contactNo,
        bloodGroup: info.bloodGroup || user.bloodGroup,
        presentAddress: info.presentAddress || user.presentAddress,
        permanentAddress: info.permanentAddress || user.permanentAddress,
        profileImg: info.profileImg || user.profileImg,
      };

      console.log("User Data:", userData);

      if (!user?._id) {
        throw new Error("User ID is missing");
      }

      const res = await updateUser({ id: user?._id, data: userData }).unwrap();
      console.log("Response:", res);

      toast.success("User updated successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to update profile", { id: toastId });
    }
  };
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between w-full">
        <h2 className="md:text-xl font-bold">My Profile</h2>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="border-none">
            <EditIcon /> Edit Profile
          </Button>
        </CollapsibleTrigger>
      </div>
      <Separator className="h-[2px] border-t-2 border-dotted border-vivid-amethyst" />
      {!isOpen && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 py-5">
          <div className="flex flex-col gap-1">
            <p className="font-inter opacity-80">Full Name</p>
            <h3 className="font-outfit text-xl font-bold opacity-80">
              Nur Hossain Farid
            </h3>
          </div>
          <div>
            <p className="font-inter opacity-80">Email</p>
            <h3 className="font-outfit text-xl font-bold opacity-80">
              faahsan1516@gmail.com
            </h3>
          </div>
          <div>
            <p className="font-inter opacity-80">Contact</p>
            <h3 className="font-outfit text-xl font-bold opacity-80">
              +8801841268946
            </h3>
          </div>
          <div>
            <p className="font-inter opacity-80">Full Name</p>
            <h3 className="font-outfit text-xl font-bold opacity-80">
              Nur Hossain Farid
            </h3>
          </div>
        </div>
      )}
      <CollapsibleContent className="space-y-2">
        <div className="w-full">
          <CZForm onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <CZInput
                    type="text"
                    name="name"
                    label="Name"
                    defaultValue={user?.name}
                  />
                  <CZInput
                    type="email"
                    name="email"
                    label="Email"
                    defaultValue={user?.email}
                    disabled
                  />
                  <CZSelect
                    name="gender"
                    label="Gender"
                    options={[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "others", label: "Others" },
                    ]}
                  />
                  <CZInput
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth"
                  />
                  <CZInput type="text" name="contactNo" label="Contact No" />
                  <CZSelect
                    name="bloodGroup"
                    label="Blood Group"
                    options={[
                      "A+",
                      "A-",
                      "B+",
                      "B-",
                      "AB+",
                      "AB-",
                      "O+",
                      "O-",
                    ].map((group) => ({ value: group, label: group }))}
                  />
                  <CZInput
                    type="text"
                    name="presentAddress"
                    label="Present Address"
                  />
                  <CZInput
                    type="text"
                    name="permanentAddress"
                    label="Permanent Address"
                  />
                  <CZInput
                    type="file"
                    name="profileImg"
                    label="Profile Image"
                  />
                </div>
              </div>
            </div>
          </CZForm>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MyProfile;
