/* eslint-disable @typescript-eslint/no-unused-vars */
import CZCheckbox from "@/components/form/CZCheckbox";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import { Separator } from "@/components/ui/separator";
import { useAddBicycleMutation } from "@/redux/features/bicycleManagement/bicycle";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateBicycle = () => {
  const [addBicycle] = useAddBicycleMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding bicycle...");

    try {
      const bicycleData = {
        ...data,
        wheel: {
          ...data.wheel,
          size: Number(data.wheel.size),
        },
        gear: {
          ...data.gear,
          number_of_gears: Number(data.gear.number_of_gears),
        },
        price: Number(data.price),
        quantity: Number(data.quantity),
        inStock: data.quantity > 0,
      };

      console.log("Bicycle Data:", bicycleData);

      const res = await addBicycle(bicycleData).unwrap();
      console.log("Response:", res);

      toast.success("Bicycle added successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to add bicycle", { id: toastId });
    }
  };

  return (
    <div className="px-5 bg-white">
      <h1 className="text-3xl font-bold text-center">Create Bicycle</h1>
      <CZForm onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 md:gap-5">
          {/* General Info */}
          <div className="space-y-4">
            <h2 className="md:text-xl font-bold">
              Generale Info <span className="text-red-500">*</span>
            </h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="text" name="name" label="Bicycle Name" />
              <CZInput type="text" name="brand" label="Brand" />
              <CZInput type="text" name="model" label="Model" />
              <CZInput name="description" label="Description" type="textarea" />
              <CZInput name="type" label="Type" type="text" />

              {/* <CZSelect
                label="Type"
                name="type"
                options={bicycleTypeOptions}
                control={control}
              /> */}
              <CZInput type="text" name="weight" label="Weight (kg)" />
              <CZInput name="price" label="Price ($)" type="number" />
              <CZInput name="quantity" label="Quantity" type="number" />
            </div>
          </div>

          {/* Frame Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              Frame Details <span className="text-red-500">*</span>
            </h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* <CZSelect
                name="frame.material"
                label="Frame Material"
                options={frameMaterialOptions}
                control={control}
              />
              <CZSelect
                name="frame.size"
                label="Frame size(cm)"
                options={frameSizeOptions}
                control={control}
              />
              <CZSelect
                name="frame.color"
                label="Frame Color"
                options={frameColorOptions}
                control={control}
              /> */}

              <CZInput
                name="frame.material"
                label="Frame Material"
                type="text"
              />
              <CZInput name="frame.size" label="Frame size(cm)" type="text" />
              <CZInput name="frame.color" label="Frame Color" type="text" />
            </div>
          </div>

          {/* Wheel Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Wheel Details & Gear Details</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="number" name="wheel.size" label="Wheel Size" />
              <CZInput
                type="text"
                name="wheel.rim_material"
                label="Rim Material"
              />
              {/* <CZSelect
                name="wheel.tire_type"
                label="Tire Type"
                options={[
                  { value: "Tubeless", label: "Tubeless" },
                  { value: "Tubed", label: "Tubed" },
                ]}
                control={control}
              /> */}
              <CZInput name="wheel.tire_type" label="Tire Type" type="text" />
              <CZInput type="text" name="gear.shifters" label="Shifters" />
              <CZInput
                type="text"
                name="gear.derailleurs.front"
                label="Front Derailleur"
              />
              <CZInput
                type="text"
                name="gear.derailleurs.rear"
                label="Rear Derailleur"
              />
              <CZInput
                type="number"
                name="gear.number_of_gears"
                label="Number of Gears"
              />
            </div>
          </div>

          {/* Brakes */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              Brakes, Suspension & Handlebar{" "}
              <span className="text-red-500">*</span>
            </h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="text" name="brakes.type" label="Brake Type" />
              <CZInput type="text" name="brakes.brand" label="Brake Brand" />
              <CZInput
                type="text"
                name="suspension.type"
                label="Suspension Type"
              />
              <CZInput
                type="text"
                name="suspension.front_fork"
                label="Front Fork"
              />
              <CZInput
                type="text"
                name="handlebar.type"
                label="Handlebar Type"
              />
              <CZInput
                type="text"
                name="handlebar.material"
                label="Handlebar Material"
              />
              <CZInput
                type="text"
                name="handlebar.width"
                label="Handlebar Width"
              />
            </div>
          </div>

          {/* Saddle & Pedals */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              Saddle & Pedals <span className="text-red-500">*</span>
            </h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="text" name="saddle.type" label="Saddle Type" />
              <CZInput type="text" name="saddle.brand" label="Saddle Brand" />
              <CZInput type="text" name="pedals.type" label="Pedal Type" />
              <CZInput
                type="text"
                name="pedals.material"
                label="Pedal Material"
              />
            </div>
          </div>

          {/* Accessories */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Accessories</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZCheckbox name="accessories.bell" label="Bell" />
              <CZCheckbox name="accessories.kickstand" label="Kickstand" />
              <CZCheckbox name="accessories.rear_rack" label="Rear Rack" />
              <CZCheckbox name="accessories.fenders" label="Fenders" />
              <CZCheckbox name="accessories.lights.front" label="Front Light" />
              <CZCheckbox name="accessories.lights.rear" label="Rear Light" />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-4 mt-5">
            <h2 className="text-xl font-bold">
              Images <span className="text-red-500">*</span>
            </h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput
                type="text"
                name="image.front_view"
                label="Front View Image"
              />
              <CZInput
                type="text"
                name="image.side_view"
                label="Side View Image"
              />
              <CZInput
                type="text"
                name="image.back_view"
                label="Back View Image"
              />
              <CZInput
                type="text"
                name="image.rear_view"
                label="Rear View Image"
              />
              <CZInput
                type="text"
                name="image.close_up_gears"
                label="Close-up of Gears"
              />
            </div>
          </div>
        </div>
      </CZForm>
    </div>
  );
};

export default CreateBicycle;
