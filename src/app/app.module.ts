import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { NgxLoadingModule } from 'ngx-loading';
import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from './effects/book.effect';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      BookEffect
    ]),
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
