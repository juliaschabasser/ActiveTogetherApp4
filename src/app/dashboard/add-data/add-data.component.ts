import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Validators, FormBuilder } from '@angular/forms';
import { courses } from '../../shared/data';

@Component({
  selector: 'app-add-data',
  standalone: true,  // standalone-Komponente
  imports: [SharedModule],  // Import der benötigten Module
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {
  }
  public registrationForm: any;
  public courses = courses;

  ngOnInit(): void {
    this.registrationForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      courses: ['', Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  onSubmit() {
    if(this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
