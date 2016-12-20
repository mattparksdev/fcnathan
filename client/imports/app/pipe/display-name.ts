import { Pipe, PipeTransform } from '@angular/core';
 
import User from '../../../../both/model/user';
 
@Pipe({ name: 'displayName' })
class DisplayName implements PipeTransform 
{
    transform(user: User): string {
        if (!user) {
            return '';
        }

        if (user.username) {
            return user.username;
        }

        if (user.emails) {
            return user.emails[0].address;
        }

        return '';
    }
}

export default DisplayName;