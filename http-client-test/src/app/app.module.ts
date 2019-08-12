import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './page/index/index.component';
import { UserTableComponent } from './page/user-table/user-table.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderPipe } from './pipe/order.pipe';
import { UserCreateComponent } from './page/user-create/user-create.component';
import { ConfirmComponent } from './page/confirm/confirm.component';
import { AboutComponent } from './page/about/about.component';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UserTableComponent
  },
  {
    path: "users/:id",
    component: UserEditComponent
  },
  {
    path: "newuser",
    component: UserCreateComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    UserTableComponent,
    UserEditComponent,
    FilterPipe,
    OrderPipe,
    UserCreateComponent,
    ConfirmComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmComponent]
})
export class AppModule { }
