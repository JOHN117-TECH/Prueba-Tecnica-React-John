import useTheme from '@hooks/useTheme';
import { UserCardProps } from '@interfaces/UserCard';
import { Users, Mail, Phone, Globe, Building } from 'lucide-react';
import { FC } from 'react';

const UserCard: FC<UserCardProps> = ({ user, onClick }) => {
  const { theme } = useTheme();
  return (
    <div
      onClick={() => onClick(user)}
      className={`border  rounded-lg p-5 hover:shadow-lg transition-all duration-200 cursor-pointer ${
        theme === 'sunset'
          ? 'hover:border-sky-400 bg-white border-gray-200 '
          : 'hover:border-green-400 bg-gray-800 text-white'
      } `}
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={` ${
            theme === 'sunset' ? 'bg-sky-100' : 'bg-green-100'
          } rounded-full p-3`}
        >
          <Users
            className={`w-6 h-6 ${
              theme === 'sunset' ? 'text-sky-600' : 'text-green-600'
            }`}
          />
        </div>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
          ID: {user.id}
        </span>
      </div>

      <h3
        className={` ${
          theme === 'sunset' ? 'text-gray-800' : ' text-white'
        }font-bold text-lgmb-1`}
      >
        {user.name}
      </h3>
      <p
        className={` ${
          theme === 'sunset' ? 'text-gray-500' : ' text-white'
        }text-sm mb-3`}
      >
        @{user.username}
      </p>

      <div className="space-y-2 text-sm">
        <div
          className={` ${
            theme === 'sunset' ? 'text-gray-600' : ' text-white'
          }flex items-center`}
        >
          <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{user.email}</span>
        </div>
        <div
          className={` ${
            theme === 'sunset' ? 'text-gray-600' : ' text-white'
          }flex items-cente`}
        >
          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{user.phone}</span>
        </div>
        <div
          className={` ${
            theme === 'sunset' ? 'text-gray-600' : ' text-white'
          }flex items-cente`}
        >
          <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{user.website}</span>
        </div>
        <div
          className={` ${
            theme === 'sunset' ? 'text-gray-600' : ' text-white'
          }flex items-center`}
        >
          <Building className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{user.company.name}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
