import { Routes } from '@angular/router';
import { PicturepostComponent } from './picturepost/picturepost.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';

export const routes: Routes = [
    {
        path:'picturepost',
        component:PicturepostComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'show',
        component:ShowComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'filter',
        component:FilterPipe
    }
   
];
