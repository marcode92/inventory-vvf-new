import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full',
    },
    {
        path:'home',
        loadComponent:() =>
            import('./inv-home/inv-home').then(x => x.InvHome)
    },
    {
        path:'model',
        loadComponent:() =>
            import('./inv-model/inv-model').then(x => x.InvModel)
    }

];
