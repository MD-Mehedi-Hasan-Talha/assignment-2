import { useState } from "react";
import Form from "./FormArea/Form";
import RightColumn from "./RightColumn/RightColumn";

const incomeCategory = ["Salary", "Outsourcing", "Bond", "Dividend"];
const expenseCategory = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];

export default function MainSection() {
  const [calculation, setCalculation] = useState([]);
  const [formValue, setFormValue] = useState({
    isExpense: true,
    amount: 0,
    date: "",
    category: "",
    isEdit: false,
  });

  const handleAddCalculation = (newCalculation) => {
    setCalculation([...calculation, newCalculation]);
  };

  const handleEditCalculation = (editItem) => {
    const updatedItem = calculation.map((item) => {
      if (item.id === editItem.id) {
        return editItem;
      }
      return item;
    });

    setCalculation(updatedItem);
  };

  const handleDeleteCalculation = (deleteItemId) => {
    const updatedCalculation = calculation.filter(
      (item) => item.id !== deleteItemId
    );
    setCalculation(updatedCalculation);
  };

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Form
          handleAddCalculation={handleAddCalculation}
          handleEditCalculation={handleEditCalculation}
          formValue={formValue}
          setFormValue={setFormValue}
          incomeCategory={incomeCategory}
          expenseCategory={expenseCategory}
        />
        <RightColumn
          calculation={calculation}
          onDelete={handleDeleteCalculation}
          onUpdate={setFormValue}
          incomeCategory={incomeCategory}
          expenseCategory={expenseCategory}
        />
      </section>
    </main>
  );
}
