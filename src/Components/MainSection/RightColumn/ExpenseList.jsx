import { useState } from "react";
import FilterList from "./FilterList";
import { Expense } from "./Icons/Icons";
import SingleItem from "./SingleItem";
import SortList from "./SortList";

export default function ExpenseList({
  calculation,
  onDelete,
  onUpdate,
  expenseCategory,
}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(null);
  const [filter, setFilter] = useState([]);

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <Expense />
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div className="flex gap-1">
          <SortList
            sortIsOpen={sortIsOpen}
            setSortIsOpen={setSortIsOpen}
            setSortOrder={setSortOrder}
          />

          <FilterList
            filterIsOpen={filterIsOpen}
            setFilterIsOpen={setFilterIsOpen}
            filter={filter}
            setFilter={setFilter}
            category={expenseCategory}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {calculation
          .filter(
            (item) =>
              item.isExpense &&
              (filter.length === 0 || filter.includes(item.category)) // here is the filtering functionality
          )
          .slice()
          .sort((a, b) =>
            sortOrder === "ascending"
              ? a.amount - b.amount
              : sortOrder === "descending" && b.amount - a.amount
          )
          .map((item) => (
            <SingleItem
              key={item.id}
              category={item.category}
              date={item.date}
              amount={item.amount}
              onDelete={() => onDelete(item.id)}
              onUpdate={() => onUpdate({ ...item, isEdit: true })}
            />
          ))}
      </div>
    </div>
  );
}
