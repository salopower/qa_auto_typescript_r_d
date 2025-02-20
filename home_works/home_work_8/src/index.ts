import { fetchUser } from './api/fetch-user';
import { ShortUserInfo } from './models/short-user-info';
import { UserEntity } from './abstraction/user-entity';

async function main(): Promise<void> {
    try {
        const user = await fetchUser(1);
        console.log('*** Full User Info ***\n', user);

        const shortUser = new ShortUserInfo(user);
        console.log('*** Short User Info ***\n');
        shortUser.displayInfo();

        const userEntity = new UserEntity(user);
        console.log('*** User Entity Info ***\n');
        userEntity.displayInfo();
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
