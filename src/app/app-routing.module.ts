import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';
import { BasicComponent } from 'src/Basic/basic.component';
import { ContactComponent } from 'src/contact/contact.component';

import { LogicalComponent } from 'src/logical/logical.component';

import { MathComponent } from 'src/math/math.component';
import { NumberComponent } from 'src/number/number.component';

const routes: Routes = [
  {path:"",component:BasicComponent},
  {path:"Basic",component:BasicComponent},
  {path:"logical",component:LogicalComponent},
  {path:"math",component:MathComponent},
  {path:"number",component:NumberComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
