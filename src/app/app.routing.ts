import { Routes, RouterModule } from '@angular/router';
import { airplaneListaComponent } from './airplane-lista/airplane-lista.component';
import { airplaneFormComponent } from './airplane-form/airplane-form.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
     
        {path : 'novo', component : airplaneFormComponent},
        {path:  '', component : airplaneListaComponent },
        {path : 'editar/:id', component : airplaneFormComponent},


];


export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);