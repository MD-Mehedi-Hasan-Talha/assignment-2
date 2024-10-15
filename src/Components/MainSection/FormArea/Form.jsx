import Input from "./Input";
import Select from "./Select";

export default function Form({
  handleAddCalculation,
  handleEditCalculation,
  formValue,
  setFormValue,
  incomeCategory,
  expenseCategory,
}) {
  const handleInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      formValue.amount === 0 ||
      formValue.date === "" ||
      formValue.category === ""
    )
      return;

    if (formValue.isEdit) {
      handleEditCalculation(formValue);
    } else {
      let nextFormValue = {
        ...formValue,
        id: crypto.randomUUID(),
      };

      handleAddCalculation(nextFormValue);
    }

    setFormValue({
      ...formValue,
      amount: 0,
      date: "",
      category: "",
      isEdit: false,
    });
  };

  const handleIsExpense = (isExpense) => {
    setFormValue({
      ...formValue,
      isExpense,
    });
  };

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        Expense Tracker
      </h2>

      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              formValue.isExpense && "active"
            }`}
            onClick={() => handleIsExpense(true)}
          >
            Expense
          </div>
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              !formValue.isExpense && "active"
            }`}
            onClick={() => handleIsExpense(false)}
          >
            Income
          </div>
        </div>

        <Select
          isExpense={formValue.isExpense}
          handleInput={handleInput}
          value={formValue.category}
          incomeCategory={incomeCategory}
          expenseCategory={expenseCategory}
        />

        <Input
          label="Amount"
          type="number"
          name="amount"
          placeholder="12931"
          value={formValue.amount}
          handleInput={handleInput}
        />

        <Input
          label="Date"
          type="date"
          name="date"
          placeholder=""
          value={formValue.date}
          handleInput={handleInput}
        />

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
}
