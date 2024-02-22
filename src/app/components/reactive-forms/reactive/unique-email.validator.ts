import { AbstractControl, ValidationErrors } from "@angular/forms";

export async function uniqueEmailValidator(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const email = control.value;
            if(email === "default@default.com"){
                resolve ({
                    uniqueEmail:true
                });
            }
            resolve(null)
        },5000);
    });
}
