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
    <>
      <nav className=" containers mx-auto navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="hover:bg-transparent flex gap-5 items-center px-1">
            {li}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
