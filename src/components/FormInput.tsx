interface FormInputProps {
  label: string;
  name: string;
  type: string;
}

export default function FormInput({ label, name, type }: FormInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-black-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
  );
}
