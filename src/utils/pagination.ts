import type { User, PaginationResult } from '@interfaces/User';

export function paginateArray<T>(
    array: T[],
    currentPage: number,
    itemsPerPage: number
): PaginationResult<T> {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(array.length / itemsPerPage);

    return {
        currentItems,
        totalPages,
        indexOfFirstItem,
        indexOfLastItem,
    };
}

export function filterUsers(users: User[], searchTerm: string): User[] {
    if (!searchTerm.trim()) {
        return users;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return users.filter(user =>
        user.name.toLowerCase().includes(lowerSearchTerm) ||
        user.username.toLowerCase().includes(lowerSearchTerm)
    );
}