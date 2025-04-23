const Sidebar = () => {
    const menuItems = [
      {
        name: "Dashboard",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
          </svg>
        ),
      },
      {
        name: "Students",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m4-2a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
        ),
      },
      {
        name: "Roles",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 11c0 .597.263 1.137.684 1.51C13.105 13.089 14.024 13.5 15 13.5c1.657 0 3-1.12 3-2.5s-1.343-2.5-3-2.5c-.976 0-1.895.411-2.316.99A2.004 2.004 0 0012 11z" />
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 13v3.5m0 0H9m3 0h3" />
          </svg>
        ),
      },
    ];
  
    return (
      <aside className="w-64 bg-white h-screen shadow border-r">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">🎓 Student App</h1>
        </div>
  
        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-all"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default Sidebar;
  