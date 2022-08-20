import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DishMoreInformationComponent} from "./dish-more-information/dish-more-information.component";
import {DishesMenuComponent} from "./dishes-menu/dishes-menu.component";
import {FormComponent} from "./form/form.component";
import {ShoppingComponent} from "./shopping/shopping.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AboutUsComponent} from "./aboutUs/aboutUs.component";
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {PersistenceComponent} from "./admin-view/persistence/persistence.component";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import {DishesManagerComponent} from "./dishes-manager/dishes-manager.component";

import {AddDishGuard, AuthGuard, LogInGuard } from './guard/auth.guard';
import {MenuEditorComponent} from "./dishes-manager/menu-editor/menu-editor.component";
import {StartComponent} from "./start/start.component";



const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'login', component: LogInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'dishes', component: DishesMenuComponent},
  { path: 'addNewDish', component: FormComponent, canActivate: [AuthGuard]},
  { path: 'dishesManager', component: DishesManagerComponent, canActivate: [AuthGuard]},
  { path: 'dishDetails/:id', component: DishMoreInformationComponent, canActivate: [AuthGuard]},
  { path: 'dishDetails', component: DishesMenuComponent, canActivate: [AuthGuard]},
  { path: 'shoppingCart', component: ShoppingComponent, canActivate: [AuthGuard]},
  { path: 'adminView', component: AdminViewComponent, canActivate: [AuthGuard]},
  { path: 'menuEditor', component: MenuEditorComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/dishes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
