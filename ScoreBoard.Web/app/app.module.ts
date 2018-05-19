import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatSidenavModule,
    MatListModule, MatTableModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import 'hammerjs';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, MatButtonModule, 
                    MatCardModule, MatMenuModule, MatToolbarModule, 
                    MatIconModule, MatSidenavModule, MatListModule,
                    MatTableModule, CdkTableModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
