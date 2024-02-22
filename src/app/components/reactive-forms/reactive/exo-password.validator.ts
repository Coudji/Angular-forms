import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordDontContainPseudo(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const pseudo = control.get('pseudo')?.value;
    console.log(password);
    console.log(pseudo);
    
    

    if (password.includes(pseudo)){
        return {
            invalidPassword: true
        }
    }

    return null
}