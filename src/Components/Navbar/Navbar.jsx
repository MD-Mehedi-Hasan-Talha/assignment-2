import Logo from "/image/favicon.svg";

const navigations = ["Home", "App", "Account", "Export"];

export default function Navbar() {
  return (
    <nav>
      <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
        <div>
          <img src={Logo} className="h-14" />
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4 text-gray-500 font-medium">
            {navigations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
          Get App
        </div>
      </div>
    </nav>
  );
}
