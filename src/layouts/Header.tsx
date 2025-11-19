import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '@hooks/index';

const Header = () => {
  const navigate = useNavigate();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'sunset' ? 'dark' : 'sunset');
  };

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/Login');
  };

  return (
    <>
      <nav className="p-4 w-full flex flex-col sm:flex-row items-center justify-between bg-base-200 shadow-sm gap-3">
        <ul className="menu bg-base-200 sm:menu-horizontal rounded-box">
          <li className="py-2 px-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn'
              }
            >
              Home
            </NavLink>
          </li>

          <li className="py-2 px-5">
            <NavLink
              to="/Information"
              className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn'
              }
            >
              Information API
            </NavLink>
          </li>

          <li className="py-2 px-5">
            <NavLink
              to="/Users"
              className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn'
              }
            >
              User
            </NavLink>
          </li>
        </ul>

        <section className="flex gap-3 max-sm:flex-col">
          <article className="flex flex-col items-center justify-center max-sm:hidden">
            <span>
              Welcome{' '}
              <em>
                <b>ADMIN</b>
              </em>
            </span>
          </article>

          <button
            onClick={() => toggleTheme()}
            className={`btn btn-outline px-2 mx-1 ${
              theme === 'sunset'
                ? 'text-white bg-slate-950'
                : 'text-white bg-violet-500'
            } `}
          >
            {theme === 'sunset' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </g>
                </svg>
              </>
            )}
          </button>

          <button
            onClick={logout}
            className={`btn px-4 mx-1 ${
              theme === 'sunset'
                ? 'text-black bg-amber-300'
                : 'text-white bg-violet-600'
            } `}
          >
            <b>Logout</b>
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
