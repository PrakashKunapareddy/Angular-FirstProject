import { Component } from '@angular/core';
import { ButtonUDComponent } from '../../button-ud/button-ud.component';

@Component({
  selector: 'app-formexample',
  standalone:true,
  templateUrl: './formexample.component.html',
  styleUrl: './formexample.component.css',
  imports:[ButtonUDComponent]
})
export class FormexampleComponent {
  
}
