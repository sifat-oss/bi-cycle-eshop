/* eslint-disable @typescript-eslint/no-unused-vars */
import CZCheckbox from "@/components/form/CZCheckbox";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import { Separator } from "@/components/ui/separator";
import { useUpdateBicycleMutation } from "@/redux/features/bicycleManagement/bicycle";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TBicycleData } from "@/types";

const UpdateBicycle = ({
  id,
  bicycle,
}: {
  id: string;
  bicycle: TBicycleData;
}) => {
  const [updateBicycle] = useUpdateBicycleMutation();

  const {
    name,
    brand,
    model,
    description,
    type,
    frame,
    wheel,
    gear,
    brakes,
    suspension,
    handlebar,
    saddle,
    pedals,
    weight,
    price,
    quantity,
    image,
  } = bicycle;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating bicycle...");

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

      console.log("Updated Bicycle Data:", bicycleData);

      const res = await updateBicycle({ id, data: bicycleData }).unwrap();
      console.log("Response:", res);

      toast.success("Bicycle updated successfully!", { id: toastId });
    } catch (error) {
      toast.error("Failed to update bicycle", { id: toastId });
    }
  };

  return (
    <div className="px-5 w-full">
      <h1 className="text-3xl font-bold text-center">Update Bicycle</h1>
      <CZForm onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="space-y-4">
            <h2 className="md:text-xl font-bold">General Info</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput
                type="text"
                name="name"
                label="Bicycle Name"
                defaultValue={name}
              />
              <CZInput
                type="text"
                name="brand"
                label="Brand"
                defaultValue={brand}
              />
              <CZInput
                type="text"
                name="model"
                label="Model"
                defaultValue={model}
              />
              <CZInput
                name="description"
                label="Description"
                type="textarea"
                defaultValue={description}
              />
              <CZInput
                name="type"
                label="Type"
                type="text"
                defaultValue={type}
              />
              <CZInput
                type="text"
                name="weight"
                label="Weight (kg)"
                defaultValue={weight}
              />
              <CZInput
                name="price"
                label="Price ($)"
                type="number"
                defaultValue={price.toString()}
              />
              <CZInput
                name="quantity"
                label="Quantity"
                type="number"
                defaultValue={quantity.toString()}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Frame Details</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput
                name="frame.material"
                label="Frame Material"
                type="text"
                defaultValue={frame?.material}
              />
              <CZInput
                name="frame.size"
                label="Frame size(cm)"
                type="text"
                defaultValue={frame?.size}
              />
              <CZInput
                name="frame.color"
                label="Frame Color"
                type="text"
                defaultValue={frame?.color}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Wheel Details & Gear Details</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput
                type="number"
                name="wheel.size"
                label="Wheel Size"
                defaultValue={wheel?.size?.toString() ?? ""}
              />
              <CZInput
                type="text"
                name="wheel.rim_material"
                label="Rim Material"
                defaultValue={wheel?.rim_material}
              />
              <CZInput
                name="wheel.tire_type"
                label="Tire Type"
                type="text"
                defaultValue={wheel?.tire_type}
              />
              <CZInput
                type="text"
                name="gear.shifters"
                label="Shifters"
                defaultValue={gear?.shifters}
              />
              <CZInput
                type="text"
                name="gear.derailleurs.front"
                label="Front Derailleur"
                defaultValue={gear?.derailleurs?.front}
              />
              <CZInput
                type="text"
                name="gear.derailleurs.rear"
                label="Rear Derailleur"
                defaultValue={gear?.derailleurs?.rear}
              />
              <CZInput
                type="number"
                name="gear.number_of_gears"
                label="Number of Gears"
                defaultValue={gear?.number_of_gears?.toString()}
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
              <CZInput type="text" name="brakes.type" label="Brake Type"
                defaultValue={brakes?.type}
               />
              <CZInput type="text" name="brakes.brand" label="Brake Brand"
                defaultValue={brakes?.brand}
               />
              <CZInput
                type="text"
                name="suspension.type"
                label="Suspension Type"
                defaultValue={suspension?.type}
              />
              <CZInput
                type="text"
                name="suspension.front_fork"
                label="Front Fork"
                defaultValue={suspension?.front_fork}
              />
              <CZInput
                type="text"
                name="handlebar.type"
                label="Handlebar Type"
                defaultValue={handlebar?.type}
              />
              <CZInput
                type="text"
                name="handlebar.material"
                label="Handlebar Material"
                defaultValue={handlebar?.material}
              />
              <CZInput
                type="text"
                name="handlebar.width"
                label="Handlebar Width"
                defaultValue={handlebar?.width}
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
              <CZInput type="text" name="saddle.type" label="Saddle Type"
                defaultValue={saddle?.type}
               />
              <CZInput type="text" name="saddle.brand" label="Saddle Brand"
                defaultValue={saddle?.brand}
               />
              <CZInput type="text" name="pedals.type" label="Pedal Type"
                defaultValue={pedals?.type}
               />
              <CZInput
                type="text"
                name="pedals.material"
                label="Pedal Material"
                defaultValue={pedals?.material}
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
                defaultValue={image?.front_view}
              />
              <CZInput
                type="text"
                name="image.side_view"
                label="Side View Image"
                defaultValue={image?.side_view}
              />
              <CZInput
                type="text"
                name="image.back_view"
                label="Back View Image"
                defaultValue={image?.back_view}
              />
              <CZInput
                type="text"
                name="image.rear_view"
                label="Rear View Image"
                defaultValue={image?.rear_view}
              />
              <CZInput
                type="text"
                name="image.close_up_gears"
                label="Close-up of Gears"
                defaultValue={image?.close_up_gears}
              />
            </div>
          </div>
        </div>
      </CZForm>
    </div>
  );
};

export default UpdateBicycle;
