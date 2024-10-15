import FullList from "./FullList";
import Total from "./Total";

export default function RightColumn({
  calculation,
  onDelete,
  onUpdate,
  incomeCategory,
  expenseCategory,
}) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
            <Total
              title="Balance"
              balance={calculation.reduce((total, curr) => {
                if (curr.isExpense) {
                  return total - parseInt(curr.amount);
                } else {
                  return total + parseInt(curr.amount);
                }
              }, 0)}
            />

            <Total
              title="Total Income"
              balance={calculation.reduce((total, curr) => {
                if (!curr.isExpense) {
                  return total + parseInt(curr.amount);
                } else {
                  return total;
                }
              }, 0)}
            />

            <Total
              title="Total Expense"
              balance={calculation.reduce((total, curr) => {
                if (curr.isExpense) {
                  return total + parseInt(curr.amount);
                } else {
                  return total;
                }
              }, 0)}
            />
          </dl>
        </div>
      </div>

      <FullList
        calculation={calculation}
        onDelete={onDelete}
        onUpdate={onUpdate}
        incomeCategory={incomeCategory}
        expenseCategory={expenseCategory}
      />
    </div>
  );
}
