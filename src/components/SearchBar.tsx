import useTheme from '@hooks/useTheme';
import { SearchBarProps } from '@interfaces/SearchBar';
import { Search } from 'lucide-react';
import { FC } from 'react';

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const { theme } = useTheme();

  return (
    <div className="relative mb-2">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="search for name or user..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition ${
          theme === 'sunset' ? 'bg-white  border-sky-600' : ''
        }`}
      />
    </div>
  );
};

export default SearchBar;
