import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>
      ),
      path: "/",
    },
    {
      name: "Students",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m4-2a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      ),
      path: "/students",
    },
    {
      name: "Roles",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 .597.263 1.137.684 1.51C13.105 13.089 14.024 13.5 15 13.5c1.657 0 3-1.12 3-2.5s-1.343-2.5-3-2.5c-.976 0-1.895.411-2.316.99A2.004 2.004 0 0012 11z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v3.5m0 0H9m3 0h3" />
        </svg>
      ),
      path: "/roles",
    },
  ];
  const location = useLocation();
  console.log(location);
  return (
    <aside className="w-64 bg-white h-screen shadow-lg border-r py-4">
      <div className="text-center mb-3 border-b pb-2 ">
        <h1 className="text-xl font-semibold text-gray-800">🎓 Student App</h1>
        <p className="text-sm text-gray-500">Manage students and roles</p>
      </div>
      <nav>
        <ul className="">
          {menuItems.map((item) => (
            <li key={item.name} className="border-b text-gray-700 hover:text-white text-sm font-medium">
              <Link
                to={item.path}
                className="flex items-center gap-3 p-2   hover:bg-gray-500  transition-all "
              >
                {item.icon}
                <span >{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
