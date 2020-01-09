import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private fb: FormBuilder,private service:UserService) { 
    
  }

  ngOnInit() {
    this.register= this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }
  get f() { return this.register.controls;}
  
async onRegister(){
  console.log(this.register.value);
  var staus:any = await this.service.saveUser(this.register.value);
  console.log(staus);
}


}
