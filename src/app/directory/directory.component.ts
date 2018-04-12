import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [];

  constructor(private logger: LoggingService, private dataService: DataService) {}

     logIt() {
       this.logger.loging();
     }
  ngOnInit() {
    /*this.dataService.fetchData().subscribe(
      (data) => this.ninjas = data
    ); */
     this.fbGetData();
  }
     fbGetData() {
       firebase.database().ref('/').on('child_added', snapshot => {
         console.log(snapshot.val());
         this.ninjas.push(snapshot.val());
       });
     }
}
