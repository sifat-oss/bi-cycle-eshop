import ProductCard from "@/components/products/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBicyclesQuery } from "@/redux/features/bicycleManagement/bicycle";
import { TQueryParam } from "@/types";
import { ChangeEvent, useState } from "react";

const AllBicycle = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { data, isLoading } = useGetAllBicyclesQuery([
    { name: "sort", value: sort },
    ...params,
  ]);

  const bicyclesData = data?.data || [];

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleParamChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newParam = { name: event.target.name, value: event.target.value };
    setParams((prevParams) => {
      const filteredParams = prevParams.filter(
        (param) => param.name !== newParam.name
      );
      return newParam.value ? [...filteredParams, newParam] : filteredParams;
    });
  };

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
        </div>
      </div>
    );
  }

  const filteredBicycles = bicyclesData.filter(
    (bicycle) =>
      bicycle.name.toLowerCase().includes(search.toLowerCase()) ||
      bicycle.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 pt-5 md:pt-10 pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl uppercase font-semibold text-center">
        All Bicycles
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-end items-end">
        <input
          type="text"
          placeholder="Search Bicycles"
          value={search}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 text-black rounded-md"
        />
        <select
          value={String(
            params.find((param) => param.name === "brand")?.value || ""
          )}
          onChange={handleParamChange}
          className="p-2 border border-gray-300 text-black rounded-md"
          name="brand"
        >
          <option value="">All Brands</option>
          <option value="Trek">Trek</option>
          <option value="Giant">Giant</option>
          <option value="Specialized">Specialized</option>
        </select>
        <select
          value={String(
            params.find((param) => param.name === "type")?.value || ""
          )}
          onChange={handleParamChange}
          className="p-2 border border-gray-300 text-black rounded-md"
          name="type"
        >
          <option value="">All Types</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select
          value={sort}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 text-black rounded-md"
          name="sort"
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {filteredBicycles.map((bicycle) => (
            <ProductCard key={bicycle.name} bicycle={bicycle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBicycle;
