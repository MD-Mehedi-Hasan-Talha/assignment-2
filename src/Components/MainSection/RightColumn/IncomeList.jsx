import { useState } from "react";
import FilterList from "./FilterList";
import { Income } from "./Icons/Icons";
import SingleItem from "./SingleItem";
import SortList from "./SortList";

export default function IncomeList({
  calculation,
  onDelete,
  onUpdate,
  incomeCategory,
  data,
}) {
  const { incomeSort, setIncomeSort, incomeFilter, setIncomeFilter } = data;

  const [sortOrder, setSortOrder] = useState(null);
  const [filter, setFilter] = useState([]);

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <Income />
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div className="flex gap-1">
          <SortList
            sortIsOpen={incomeSort}
            setSortIsOpen={setIncomeSort}
            setSortOrder={setSortOrder}
          />

          <FilterList
            filterIsOpen={incomeFilter}
            setFilterIsOpen={setIncomeFilter}
            filter={filter}
            setFilter={setFilter}
            category={incomeCategory}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {calculation
          .filter(
            (item) =>
              !item.isExpense &&
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
