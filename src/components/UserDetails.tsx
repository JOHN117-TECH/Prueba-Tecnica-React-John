import useTheme from '@hooks/useTheme';
import { UserDetailsProps } from '@interfaces/UserDetails';
import { Users } from 'lucide-react';
import { FC } from 'react';

const UserDetails: FC<UserDetailsProps> = ({ selectedUser }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`
      rounded-lg shadow-md p-6 sticky top-8`}
    >
      <h2
        className={`${
          theme === 'sunset' ? 'text-gray-800' : 'text-white-800'
        }text-xl font-semibold mb-4`}
      >
        User Details
      </h2>
      {selectedUser ? (
        <div className="space-y-4">
          <div
            className={`${
              theme === 'sunset' ? 'bg-sky-50' : 'bg-green-50'
            } rounded-lg p-4 text-center`}
          >
            <div
              className={`${
                theme === 'sunset' ? 'bg-sky-600' : 'bg-green-600'
              } rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3`}
            >
              <span className="text-3xl font-bold text-white">
                {selectedUser.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-bold text-xl text-gray-800">
              {selectedUser.name}
            </h3>
            <p
              className={`${
                theme === 'sunset' ? 'text-gray-600' : 'text-white'
              }`}
            >
              @{selectedUser.username}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-700' : 'text-white'
                }font-semibold mb-1`}
              >
                Email
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }`}
              >
                {selectedUser.email}
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-700' : 'text-white'
                }font-semibold mb-1`}
              >
                CellPhone
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }`}
              >
                {selectedUser.phone}
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-700' : 'text-white'
                }
                font-semibol mb-1`}
              >
                Website
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }
                `}
              >
                {selectedUser.website}
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-700' : 'text-white'
                }
                font-semibold mb-1`}
              >
                Company
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }`}
              >
                {selectedUser.company.name}
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-500' : 'text-white'
                }text-xs italic"`}
              >
                {selectedUser.company.catchPhrase}
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-700' : 'text-white'
                }font-semibol  mb-1`}
              >
                Address
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }`}
              >
                {selectedUser.address.street}, {selectedUser.address.suite}
              </p>
              <p
                className={`${
                  theme === 'sunset' ? 'text-gray-600' : 'text-white'
                }`}
              >
                {selectedUser.address.city}, {selectedUser.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <Users className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p>Select a user to view their details</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
