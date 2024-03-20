interface FormSelectProps {
  label: string;
  name: string;
  opt1: string | undefined;
  val1: string | undefined;
  opt2: string | undefined;
  val2: string | undefined;
  opt3: string | undefined;
  val3: string | undefined;
  opt4: string | undefined;
  val4: string | undefined;
}

const styling = "bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5";

export default function FormSelect({ label, name, opt1, val1, opt2, val2, opt3, val3, opt4, val4 }: FormSelectProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold dark:text-white">{label}</label>
      <select name={name} id={name} className={styling} required>
        <option value={val1}>{opt1}</option>
        <option value={val2}>{opt2}</option>
        <option value={val3}>{opt3}</option>
        <option value={val4}>{opt4}</option>
      </select>
    </div>
  );
}
