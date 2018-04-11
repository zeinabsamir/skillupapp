import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rootRouting } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
