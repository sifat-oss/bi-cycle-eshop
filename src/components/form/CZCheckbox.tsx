import { Checkbox } from "@/components/ui/checkbox";

interface CZCheckboxProps {
  name: string;
  label: string;
}

export default function CZCheckbox({ name, label }: CZCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={name} />
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
