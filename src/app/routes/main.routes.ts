import { MainComponent } from './../main/main.component';
import { FoliosDPComponent } from './../dobleplay/components/folios-dp/folios-dp.component';
import { ActivacionesComponent } from './../activaciones/components/activaciones/activaciones.component';
import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    { path: 'DoblePlay', component: FoliosDPComponent },
    { path: 'Activaciones', component: ActivacionesComponent },
    {
        path: '',
        component: FoliosDPComponent,
        pathMatch: 'full'
    },
    { path: '**', component: FoliosDPComponent }
];

// export const mainRoutes: Routes = [
//     {
//       path: 'DoblePlay',
//       component: FoliosDPComponent,
//       children: [
//         { path: '', redirectTo: 'DoblePlay', pathMatch: 'full' },
//         { path: 'DoblePlay', component: FoliosDPComponent},
//         { path: 'Activaciones', component: ActivacionesComponent}
//         { path: '**', component: FoliosDPComponent }
//       ]
//     }
// ];


// const appRoutes: Routes = [
//     { path: 'DoblePlay', component: FoliosDPComponent },
//     { path: 'Activaciones', component: ActivacionesComponent },
//     {
//         path: '',
//         component: FoliosDPComponent,
//         pathMatch: 'full'
//     },
//     { path: '**', component: FoliosDPComponent }
// ];
