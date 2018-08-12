import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';

import {FeedDataService} from './feed-data.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import {NgxPaginationModule} from 'ngx-pagination'; 



@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TagCloudModule,
    NgxPaginationModule
  ],
  providers: [FeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
