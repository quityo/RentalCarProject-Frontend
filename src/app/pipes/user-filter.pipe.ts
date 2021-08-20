import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';
@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: User[], filterUserText: string): User[] {
    filterUserText = filterUserText ? filterUserText.toLocaleLowerCase():""
    return filterUserText ? value.filter((u:User)=>
    u.firstName.toLocaleLowerCase().indexOf(filterUserText) !== -1 ||
    u.lastName.toLocaleLowerCase().indexOf(filterUserText) !== -1 ||
    u.email.toLocaleLowerCase().indexOf(filterUserText) !== -1 ||
    u.companyName.toLocaleLowerCase().indexOf(filterUserText) !== -1):value;
  }
}