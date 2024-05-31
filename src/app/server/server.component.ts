import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server', // --using as HTMl tag
    // selector: '[app-server]', --using as attribute 
    // selector: '.app-server', --using as class

    templateUrl:'./server.component.html'
})
export class ServerComponent{
    @Input() status:boolean = true;
    serverID: number = 10;
    serverStatus = 'offline';

    getServerStatus(){
       return this.serverStatus;
    }
}