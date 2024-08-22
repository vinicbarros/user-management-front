import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="w-3/4 relative">
      <input
        type="text"
        className="peer py-3 pl-10 pr-4 block w-full bg-foreground border transition ease-in-out border-tertiary focus:outline-none focus:border-secondary rounded-lg text-sm text-secondary disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Search by name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="absolute inset-y-0 start-4 flex items-center pointer-events-none peer-disabled:opacity-50 peer-disabled:pointer-events-none">
        <MagnifyingGlassIcon className="text-secondary size-4" />
      </div>
    </div>
  );
};
