import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import type { User } from '@interfaces/User';
import { useTheme, useUsers } from '@hooks/index';
import { paginateArray, filterUsers } from '@utils/pagination';
import {
  SearchBar,
  UserCard,
  Pagination,
  ErrorMessage,
  LoaderSpinner,
  UserDetails,
} from '@components/index';

function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { theme } = useTheme();
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 6;

  const filteredUsers = filterUsers(users, searchTerm);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage(1);
    }, 0);
  }, [searchTerm]);

  const { currentItems: currentUsers, totalPages } = paginateArray(
    filteredUsers,
    currentPage,
    usersPerPage
  );

  const handleSearchChange = (value: string): void => {
    setSearchTerm(value);
  };

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleUserClick = (user: User): void => {
    setSelectedUser(user);
  };

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div
          className={` ${
            theme === 'sunset' ? 'bg-white' : 'bg-slate-900'
          } rounded-lg shadow-md p-6`}
        >
          <h2
            className={` ${
              theme === 'sunset' ? 'text-gray-800' : 'text-white'
            }text-xl font-semibold  mb-4`}
          >
            List of Users
          </h2>

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <div
            className={` ${
              theme === 'sunset' ? 'text-gray-600' : 'text-white'
            }text-sm pb-2`}
          >
            Showing {currentUsers.length} de {filteredUsers.length} users
          </div>

          {currentUsers.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No se encontraron usuarios</p>
              <p className="text-sm">Intenta con otro término de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentUsers.map((user) => (
                <UserCard key={user.id} user={user} onClick={handleUserClick} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="lg:col-span-1">
        <UserDetails selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default UserManagement;
