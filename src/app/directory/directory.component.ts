import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [];

  constructor(private logger: LoggingService) {}

     logIt() {
       this.logger.loging();
     }
  ngOnInit() {
  }

}
