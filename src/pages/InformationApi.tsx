import { useEffect, useState } from 'react';
import axios from 'axios';
import { Album } from '@interfaces/InformationApi';
import LoaderSpinner from '@components/LoaderSpinner';
import { useTheme } from '@hooks/index';
import Swal from 'sweetalert2';

const InformationApi = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [allAlbums, setAllAlbums] = useState<Album[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<'id' | 'userId' | 'title'>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { theme } = useTheme();

  const fetchAlbums = async () => {
    try {
      const { data } = await axios.get<Album[]>(
        'https://jsonplaceholder.typicode.com/albums'
      );
      setAllAlbums(data);
      setAlbums(data.slice(0, 10));
    } catch (err) {
      setError('Error loading albums: ' + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleLoadMore = () => {
    const newCount = visibleCount + 10;
    setVisibleCount(newCount);
    setAlbums(allAlbums.slice(0, newCount));
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      title: '¿Eliminar este álbum?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setAllAlbums((prev) => prev.filter((album) => album.id !== id));
        setAlbums((prev) => prev.filter((album) => album.id !== id));
        Swal.fire('Eliminado', 'El álbum ha sido eliminado', 'success');
      }
    });
  };

  const filteredAlbums = allAlbums
    .filter((album) => album.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortOrder === 'asc'
          ? fieldA.localeCompare(fieldB)
          : fieldB.localeCompare(fieldA);
      }

      if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }

      return 0;
    });

  const visibleAlbums = filteredAlbums.slice(0, visibleCount);

  if (loading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return (
      <div className="w-full flex justify-center py-10">
        <div className="alert alert-error w-1/2 text-center">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Album List</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search for title"
          className="input input-bordered w-full max-w-xs border-b-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex items-center gap-3 sm:mr-20 max-sm:mr-0">
          <div
            className={`dropdown ${
              theme === 'sunset' ? 'bg-orange-400' : 'bg-purple-500'
            }`}
          >
            <div
              tabIndex={0}
              role="button"
              className={`btn m-1 ${
                theme === 'sunset' ? 'bg-orange-400' : 'bg-purple-500'
              } `}
            >
              Sort By:{' '}
              <span className="font-bold">{sortField.toUpperCase()}</span>
            </div>

            <ul
              tabIndex={0}
              className={`dropdown-content menu mt-2 ${
                theme === 'sunset' ? 'bg-orange-300' : 'bg-purple-600'
              } rounded-box z-[1] w-52 p-2 shadow`}
            >
              <li>
                <a onClick={() => setSortField('id')}>ID</a>
              </li>
              <li>
                <a onClick={() => setSortField('userId')}>User ID</a>
              </li>
              <li>
                <a onClick={() => setSortField('title')}>Title</a>
              </li>
            </ul>
          </div>
          <button
            className={`btn px-2 ${
              theme === 'sunset' ? 'bg-orange-300' : 'bg-purple-600'
            }`}
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            {sortOrder === 'asc' ? (
              <>
                <b>Asc ↑</b>
              </>
            ) : (
              <>
                <b>Desc ↓</b>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className={`${theme === 'sunset' && 'bg-slate-200'}`}>
            <tr>
              <th>
                <b>ID</b>
              </th>
              <th>
                <b>User ID</b>
              </th>
              <th>
                <b>Title</b>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visibleAlbums.map((album) => (
              <tr
                key={album.id}
                className={`${
                  theme === 'sunset' && 'odd:bg-gray-200 even:bg-slate-100'
                }`}
              >
                <td>{album.id}</td>
                <td>{album.userId}</td>
                <td>{album.title}</td>
                <td className="flex flex-row gap-10 items-center justify-center">
                  <button
                    className={` btn  btn-xs px-2 py-1 flex flex-row ${
                      theme === 'sunset' ? 'bg-cyan-500' : 'bg-emerald-400'
                    }`}
                    onClick={() => alert(`Detalles del álbum ${album.id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M9.48 2.5H1V21h22V5H11.48zm-2.482 9.498h2.004v2.004H6.998zm4 0h2.004v2.004h-2.004zm6.004 0v2.004h-2.004v-2.004z"
                      />
                    </svg>
                    <b>Details</b>
                  </button>
                  <button
                    className={` btn  btn-xs px-2 py-4 flex flex-row ${
                      theme === 'sunset' ? 'bg-rose-600' : 'bg-orange-400'
                    }`}
                    onClick={() => handleDelete(album.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"
                      />
                      <path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-center py-5">
        {albums.length < allAlbums.length && (
          <button
            className={`btn px-2 ${
              theme === 'sunset' ? 'bg-emerald-400' : 'bg-rose-600'
            } `}
            onClick={handleLoadMore}
          >
            <b>See More </b>
            <article className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 8 8"
              >
                <path fill="currentColor" d="m2 3l2 2l2-2l1 1l-3 3l-3-3" />
              </svg>
            </article>
          </button>
        )}
      </div>
    </div>
  );
};

export default InformationApi;
