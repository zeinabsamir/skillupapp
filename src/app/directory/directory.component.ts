import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [
    {name: 'zeinab', belt: 'black'},
    {name: 'Ahmed', belt: 'red'},
    {name: 'lelia', belt: 'purple'},
  ];

  constructor(private logger: LoggingService) {}

     logIt() {
       this.logger.loging();
     }
  ngOnInit() {
  }

}
