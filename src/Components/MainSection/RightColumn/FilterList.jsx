import { Filter } from "./Icons/Icons";

export default function FilterList({
  filterIsOpen,
  setFilterIsOpen,
  filter,
  setFilter,
  category,
}) {
  const handleFilter = (category) => {
    setFilter(
      filter.includes(category)
        ? filter.filter((item) => item !== category)
        : [...filter, category]
    );
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setFilterIsOpen(true)}
        >
          <Filter />
        </button>
      </div>

      {filterIsOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-1" role="none">
            {category.map((cat, index) => (
              <label
                key={index}
                className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                  checked={filter.includes(cat)}
                  onChange={() => handleFilter(cat)}
                />
                <span className="ml-2">{cat}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
