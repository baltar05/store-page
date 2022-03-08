import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import { CartComponent } from './cart/cart.component';
import { ThumbSliderComponent} from "./thumb-slider/thumb-slider.component";
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CartComponent,
    ThumbSliderComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
