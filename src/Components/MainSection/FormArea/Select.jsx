export default function Select({
  isExpense,
  handleInput,
  value,
  incomeCategory,
  expenseCategory,
}) {
  return (
    <div className="mt-3">
      <label
        htmlFor="category"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Category
      </label>
      <div className="mt-2">
        <select
          name="category"
          autoComplete="category-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
          onChange={handleInput}
          value={value}
        >
          <option value="">-- Choose a category --</option>
          {isExpense
            ? expenseCategory.map((category, index) => (
                <option key={index}>{category}</option>
              ))
            : incomeCategory.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
        </select>
      </div>
    </div>
  );
}
