import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static getValidatorsErrorMessage(
    validationName: string, validationValue?: any) {
    const config = {
      // tslint:disable-next-line:object-literal-key-quotes
      'required': 'Required',
      // tslint:disable-next-line:object-literal-key-quotes
      'InvalidName': 'Please Enter Valid Name'
    };
    return config[validationName];
  }

  constructor() { }

  static Namevaildators(control) {
    if (control.value.match('^[a-zA-Z]+$')) {
      return null;
    } else {
  // tslint:disable-next-line:object-literal-key-quotes
  return { 'InvalidName': true };
}

}

static Passvaildators(control) {
  if (control.value.match('^[A-Z,a-z,0-9]')) {
    return null;
  } else {
// tslint:disable-next-line:object-literal-key-quotes
return { 'InvalidPass': true };
}

}
}
