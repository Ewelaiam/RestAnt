import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShoppingComponent } from './shopping/shopping.component';
import { SearchPrice, GetRatePipe, GetSearchPipe} from './filter/filter.component';
import { FormComponent } from './form/form.component';
import { DishesMenuComponent } from './dishes-menu/dishes-menu.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DishMoreInformationComponent } from './dish-more-information/dish-more-information.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { FilterFieldComponent } from './dishes-menu/filter-field/filter-field.component';
import { ForumComponent } from './dish-more-information/forum/forum.component';
import {CommentboxComponent} from "./dish-more-information/forum/commentbox/commentbox.component";
import {CommentsComponent} from "./dish-more-information/forum/comments/comments.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PersistenceComponent } from './admin-view/persistence/persistence.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UsersRolesComponent } from './admin-view/users-roles/users-roles.component';
import { DishesManagerComponent } from './dishes-manager/dishes-manager.component';
import {AuthService} from "./auth-service/auth.service";
import { MenuEditorComponent } from './dishes-manager/menu-editor/menu-editor.component';
import { StartComponent } from './start/start.component';


@NgModule({
    declarations: [
        AppComponent,
        DishComponent,
        ShoppingComponent,
        SearchPrice,
        GetRatePipe,
        GetSearchPipe,
        FormComponent,
        DishesMenuComponent,
        NavComponent,
        PageNotFoundComponent,
        DishMoreInformationComponent,
        AboutUsComponent,
        FilterFieldComponent,
        ForumComponent,
        CommentboxComponent,
        CommentsComponent,
        LogInComponent,
        SignUpComponent,
        PersistenceComponent,
        AdminViewComponent,
        UsersRolesComponent,
        DishesManagerComponent,
        MenuEditorComponent,
        StartComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule { }
