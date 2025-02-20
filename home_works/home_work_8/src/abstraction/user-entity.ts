import { BaseEntity } from './base-entity';
import { User } from '../models/user';

export class UserEntity extends BaseEntity {
    public name: string;
    public email: string;

    public constructor(user: User) {
        super(user.id);
        this.name = user.name;
        this.email = user.email;
    }

    public displayInfo(): void {
        console.log(`User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
}
