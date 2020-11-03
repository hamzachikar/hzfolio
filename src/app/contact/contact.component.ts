import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private service:ContactService,private _snackBar: MatSnackBar) { }
  contactForm:FormGroup;
  ngOnInit(): void {
    this.contactForm=new FormGroup({
      'name':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'message':new FormControl(null,[Validators.required])
    });
  }
  onSubmit(){
    if(this.contactForm.valid){
      let data={
        email:this.contactForm.controls.email.value,
        name:this.contactForm.controls.name.value,
        message:this.contactForm.controls.message.value
      }
      this.service.create(data).then(() => {
        this._snackBar.openFromComponent(SnackBarComponent, {
          duration:5000,
          horizontalPosition:'center',
          verticalPosition: 'bottom',
        });
        this.contactForm.reset();
      });;
    }
    else{

    }
  }
}
