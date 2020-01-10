import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { airplanesService } from '../airplanes.service';
import { Location} from '@angular/common';


@Component({
  selector: 'app-airplane-form',
  templateUrl: './airplane-form.component.html',
  styleUrls: ['./airplane-form.component.css']
})


@NgModule({
  declarations: [],
  imports: [
          ReactiveFormsModule
  ]
    
})


export class airplaneFormComponent implements OnInit {

  form : FormGroup;
  submitted:boolean = false;


  constructor(private fb : FormBuilder , private service: airplanesService) { 
    

  }

  ngOnInit() {
    this.form =  this.fb.group({
      nome : [null,[Validators.required, Validators.minLength(3),Validators.maxLength(20)]]
    })
  }

  onSumit(){
    this.submitted = true;
    //console.log(this.form.value);


    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        success => console.log('Salvo com Sucesso'),
        
        error => console.error(error)
      )
      alert('Salvo com Sucesso');
      window.location.href = "http://localhost:4200";
      
      
      
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset;
    //console.log('valeu');
  }

  hasErrors(field:string){
    return this.form.get(field).errors;
  }



}
