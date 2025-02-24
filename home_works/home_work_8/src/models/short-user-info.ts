import { User } from './user';

export class ShortUserInfo {
    public id: number;
    public name: string;
    public email: string;
    public city: string;

    public constructor(user: User) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.city = user.address.city;
    }

    public displayInfo(): void {
        console.log(`Short User Info: ID=${this.id}, Name=${this.name}, Email=${this.email}, City=${this.city}`);
    }
}
