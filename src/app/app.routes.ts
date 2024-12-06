import { Routes } from '@angular/router';
import { MainPrincipleComponent } from './components/main-principle/main-principle.component';
import { GroupFamilyFormComponent } from './Pages/group-family-form/group-family-form.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { StartRondaComponent } from './components/start-ronda/start-ronda.component';
import { SecretFriendlyComponent } from './components/secret-friendly/secret-friendly.component';
import { RoundFormComponent } from './Pages/round-form/round-form.component';

export const routes: Routes = [ 
  { path: '', component: MainPrincipleComponent }, // Ruta inicial
  { path: 'GroupFamilyForm', component: GroupFamilyFormComponent } ,
  { path: 'UserCreate/:idGroupFamily', component:  UserCreateComponent}, 
  { path: 'SecretFriendly', component: SecretFriendlyComponent }, 
  { path: 'StartRonda', component: StartRondaComponent }, 
  { path: 'RoundForm', component: RoundFormComponent }, 
];
