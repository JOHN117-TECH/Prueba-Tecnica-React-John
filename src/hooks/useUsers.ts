import { useState, useEffect } from 'react';
import type { User } from '@interfaces/User';
import axios from 'axios';

interface UseUsersReturn {
    users: User[];
    loading: boolean;
    error: string | null;
}

const useUsers = (): UseUsersReturn => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async (): Promise<void> => {
            try {
                setLoading(true);
                const { data } = await axios.get<User[]>(
                    'https://jsonplaceholder.typicode.com/users'
                );

                if (!data) {
                    throw new Error('Error al cargar usuarios');
                }
                setUsers(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
}

export default useUsers;