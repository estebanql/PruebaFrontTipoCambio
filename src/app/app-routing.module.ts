import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvertComponent } from './page/convert/convert.component';
import { UpdateComponent } from './page/update/update.component';
import { Convert } from './model/convert';


const routes: Routes = [
  { path: 'convert', component: ConvertComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', component: ConvertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
