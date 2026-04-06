import { NavLink } from 'react-router';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Listed Books',
    path: '/listed-books',
  },
  {
    id: 3,
    name: 'Pages to Read',
    path: '/pages-to-read',
  },
];

const NavBar = () => {
  const li = navLinks.map(item => (
    <li key={item.id}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'text-green-500 border border-green-500 font-bold px-4 py-2 rounded-lg'
            : 'px-4 py-2 rounded-lg'
        }
        to={item.path}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="pb-4">
      <nav className=" bg-white/10 backdrop-blur-md containers flex items-center gap-2 justify-between px-3 py-5 shadow">
        <div>
          <h2 className="text-2xl font-bold">Book Vibe</h2>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden items-center md:flex">{li}</ul>

        {/* right Buttons */}
        <div className="flex items-center gap-4">
          <button className="btn bg-buttonPrimary text-white text-md  rounded-lg">
            Sign In
          </button>
          <button className="btn bg-buttonSrc text-white text-md  rounded-lg">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
