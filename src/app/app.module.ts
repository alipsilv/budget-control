import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { IncomeFormComponent } from './income-form/income-form.component';

import { HttpModule } from '@angular/http';

import {IncomeService} from './services/income.service';

@NgModule({
  declarations: [
    AppComponent,
    IncomeListComponent,
    IncomeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [IncomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
