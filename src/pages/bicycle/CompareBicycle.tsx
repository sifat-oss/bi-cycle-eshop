import { useState } from "react";
import { useGetAllBicyclesQuery } from "@/redux/features/bicycleManagement/bicycle";
import ProductCard from "@/components/products/ProductCard";

const CompareBicycles = () => {
  const { data, isLoading } = useGetAllBicyclesQuery([]);
  const bicycles = data?.data || [];

  const [selectedBicycle1, setSelectedBicycle1] = useState(null);
  const [selectedBicycle2, setSelectedBicycle2] = useState(null);
  const [selectedBicycle3, setSelectedBicycle3] = useState(null);

  const handleSelectChange = (event, setSelectedBicycle) => {
    const selected = bicycles.find(
      (bicycle) => bicycle.name === event.target.value
    );
    setSelectedBicycle(selected);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-5 p-5 md:p-10 md:pt-10 px-5 md:px-10 lg:px-20">
      <h1 className="text-2xl font-semibold text-center">Compare Bicycles</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <select
          className="p-2 border border-gray-300 text-black rounded-md"
          onChange={(e) => handleSelectChange(e, setSelectedBicycle1)}
        >
          <option value="">Select Bicycle 1</option>
          {bicycles.map((bicycle) => (
            <option key={bicycle.name} value={bicycle.name}>
              {bicycle.name}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 text-black rounded-md"
          onChange={(e) => handleSelectChange(e, setSelectedBicycle2)}
        >
          <option value="">Select Bicycle 2</option>
          {bicycles.map((bicycle) => (
            <option key={bicycle.name} value={bicycle.name}>
              {bicycle.name}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 text-black rounded-md"
          onChange={(e) => handleSelectChange(e, setSelectedBicycle3)}
        >
          <option value="">Select Bicycle 3</option>
          {bicycles.map((bicycle) => (
            <option key={bicycle.name} value={bicycle.name}>
              {bicycle.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-5">
        {selectedBicycle1 && <ProductCard bicycle={selectedBicycle1} />}
        {selectedBicycle2 && <ProductCard bicycle={selectedBicycle2} />}
        {selectedBicycle3 && <ProductCard bicycle={selectedBicycle3} />}
      </div>
    </div>
  );
};

export default CompareBicycles;
