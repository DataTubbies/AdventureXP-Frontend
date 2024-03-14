interface FormInputProps {
  label: string;
  name: string;
  type: string;
}

export default function FormInput({ label, name, type }: FormInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold dark:text-white ">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
        required
      />
    </div>
  );
}
