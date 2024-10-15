import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";

export default function FullList({
  calculation,
  onDelete,
  onUpdate,
  incomeCategory,
  expenseCategory,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <IncomeList
        calculation={calculation}
        onDelete={onDelete}
        onUpdate={onUpdate}
        incomeCategory={incomeCategory}
      />

      <ExpenseList
        calculation={calculation}
        onDelete={onDelete}
        onUpdate={onUpdate}
        expenseCategory={expenseCategory}
      />
    </div>
  );
}
