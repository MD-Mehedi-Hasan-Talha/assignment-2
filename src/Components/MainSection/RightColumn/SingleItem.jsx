import { Delete, Edit } from "./Icons/Icons";

export default function SingleItem({
  category,
  date,
  amount,
  onDelete,
  onUpdate,
}) {
  let dateObj = new Date(date);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let formatDate = `${dateObj.getDate()} ${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;

  return (
    <div className="flex justify-between items-center py-2 relative group cursor-pointer">
      <div>
        <h3 className="text-base font-medium leading-7 text-gray-600">
          {category}
        </h3>
        <p className="text-xs text-gray-600">{formatDate}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
          BDT {amount}
        </p>

        <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all flex gap-1">
          <button
            className="hover:text-teal-600"
            role="button"
            title="Edit"
            onClick={onUpdate}
          >
            <Edit />
          </button>

          <button
            className="hover:text-red-600"
            role="button"
            title="Delete"
            onClick={() =>
              confirm("Are You Sure you want to Delete this item?") &&
              onDelete()
            }
          >
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
}
