export default function Input({
  label,
  type,
  name,
  placeholder,
  handleInput,
  value,
}) {
  return (
    <div className="mt-3">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          autoComplete="off"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
          onChange={handleInput}
          value={value}
        />
      </div>
    </div>
  );
}
