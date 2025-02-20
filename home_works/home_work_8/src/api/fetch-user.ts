import { User } from '../models/user';

export async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    const data: User = await response.json();
    return data;
}
