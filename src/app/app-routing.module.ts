import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenefitsComponent } from './benefits/benefits.component';
import { SafetyComponent } from './safety/safety.component';
import { PoliciesComponent } from './policies/policies.component';


const routes: Routes = [
  { path: 'policies', component: PoliciesComponent },
  { path: 'safety', component: SafetyComponent },
  { path: '', component: BenefitsComponent },
  { path: '**', component: BenefitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
