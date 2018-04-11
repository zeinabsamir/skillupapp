import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {  DirectoryComponent } from './directory/directory.component';



export const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'directory',
      component: DirectoryComponent,
    },
  ]);
