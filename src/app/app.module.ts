import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from 'src/Basic/basic.component';
import { FormsModule } from '@angular/forms';
import { MathComponent } from '../math/math.component';
import { NumberComponent } from '../number/number.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LogicalComponent } from 'src/logical/logical.component';
import { ContactComponent } from 'src/contact/contact.component';
import { AboutComponent } from '../about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MathComponent,
    NumberComponent,
    NavbarComponent,
    LogicalComponent,
    ContactComponent,
    AboutComponent
   
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
