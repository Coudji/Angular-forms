import { AbstractControl, ValidationErrors } from "@angular/forms";

export async function pseudoCannotContainValidator(control: AbstractControl):Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        const banwords :string[] = ["nano", "windows", "microsoft"];
        const pseudo: string = control.value
        function checkBanWords(pseudo: string, banwords: string[]){
            return banwords.some(banword => pseudo.includes(banword))
        }
        setTimeout(() => {
            
            if(checkBanWords(pseudo, banwords)){
               resolve({
                invalidPseudo:true
               })
            } 
            resolve(null)
        }, 1000);
    })
} 