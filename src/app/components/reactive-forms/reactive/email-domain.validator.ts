import { AbstractControl, ValidationErrors } from "@angular/forms";

export function cannotBeForBiddenDomainValidator(control: AbstractControl):ValidationErrors | null {
    const splittedEmail = control.value.split('.');
    // récup le dernier élèment du tableau qui correspondra à l'extention de l'email
    const emailExtension = splittedEmail[splittedEmail.length -1];

    if (emailExtension === "default"){
        return {
            actualExtension: emailExtension
        }
    }
    return null;
}