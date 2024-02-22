import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { cannotBeForBiddenDomainValidator } from './email-domain.validator';
import { confirmPassword } from './password.validator';
import { uniqueEmailValidator } from './unique-email.validator';
import { pseudoCannotContainValidator } from './pseudo.validator';
import { passwordDontContainPseudo } from './exo-password.validator';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  signupForm = new FormGroup({
    //un seul validateur sur le champ
    /* email: new FormControl('default@default.com', Validators.required) */
    //plusieurs validators sur le champ
    email: new FormControl('default@default.com', [Validators.required, Validators.email, cannotBeForBiddenDomainValidator],uniqueEmailValidator),
    password: new FormGroup({
      field: new FormControl('', []),
      confirm: new FormControl('', [])
    },confirmPassword)
  });

  // on va rechercher l'input (le form control) via son nom avec la méthode get
  get EmailControl(){
    return this.signupForm.get('email') as FormControl; // ici le as FormControl nous dispense de devoir mettre le ? dans la condition @if(EmailControl.invalid dans le html
  }

  get passwordControl(){
    return this.signupForm.get('password') as FormGroup
  }

  submit(){
    console.log(this.signupForm);
  }

  signupExo = new FormGroup({
    pseudo: new FormControl('',Validators.required, pseudoCannotContainValidator),
    password: new FormControl('',Validators.required)
  },passwordDontContainPseudo)

  get pseudoControl(){
    return this.signupExo.get('pseudo') as FormControl
  }

  get exoPasswordControl(){
    return this.signupExo.get('password') as FormControl
  }
}
