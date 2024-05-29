import { Routes } from '@angular/router';
import { commonGuard } from './user/shared/security/guards/common.guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren: ()=> import('./user/user.module').then(m=> m.UserModule)
    },
    {
        path:'feed',
        loadChildren: ()=> import('./feed/feed.module').then(m=> m.FeedModule),
        //canActivate: [commonGuard],
    }
];
