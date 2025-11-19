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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
                />
              </svg>
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
              Information{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M13.26 10.5h2v1h-2z" />
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M8.4 15L8 13.77H6.06L5.62 15H4l2.2-6h1.62L10 15Zm8.36-3.5a1.47 1.47 0 0 1-1.5 1.5h-2v2h-1.5V9h3.5a1.47 1.47 0 0 1 1.5 1.5ZM20 15h-1.5V9H20Z"
                />
                <path fill="currentColor" d="M6.43 12.77h1.16l-.58-1.59z" />
              </svg>
            </NavLink>
          </li>

          <li className="py-2 px-5">
            <NavLink
              to="/Users"
              className={({ isActive }) =>
                isActive ? 'btn btn-primary' : 'btn'
              }
            >
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </g>
              </svg>{' '}
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
            <b>Logout</b>{' '}
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
                <path
                  stroke-dasharray="36"
                  stroke-dashoffset="36"
                  d="M12 4h-7c-0.55 0 -1 0.45 -1 1v14c0 0.55 0.45 1 1 1h7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="36;0"
                  />
                </path>
                <path
                  stroke-dasharray="14"
                  stroke-dashoffset="14"
                  d="M9 12h11.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="14;0"
                  />
                </path>
                <path
                  stroke-dasharray="6"
                  stroke-dashoffset="6"
                  d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.8s"
                    dur="0.2s"
                    values="6;0"
                  />
                </path>
              </g>
            </svg>
          </button>
        </section>
      </nav>
    </>
  );
};

export default Header;
