import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
     addNewServer = true;
     serverCreated = 'No Server is Created';

     constructor(){
      setTimeout(()=>{
        this.addNewServer=false;
      },2000)
     }
     
     ngOnInit() {
     }
     serverCreation(){
      this.serverCreated='Server Created Successfully';
     }
}
