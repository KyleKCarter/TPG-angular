import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParksComponent } from './parks/parks.component';
import { ResortsComponent } from './resorts/resorts.component';
import { RidesComponent } from './rides/rides.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path: 'resorts/:resort/:park',
        component: RidesComponent
      },
      {
        path: 'resorts/:resort',
        component: ParksComponent
      },
      {
        path: 'resorts',
        component: ResortsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}