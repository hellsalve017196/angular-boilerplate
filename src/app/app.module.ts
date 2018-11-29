// core lib
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// importing firebase module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
// app component
import {AppComponent} from './app.component';
// enviroment
import {environment} from '../environments/environment';

// Routing modules
import {AppRoutingModule, routingComponents} from './/app-routing.module';

// importing service
import {AdminService} from './services/admin.service';
import { ModalComponent } from './modal/modal.component';






@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    routingComponents,
    ModalComponent,
  ],
  providers: [
    {
      provide: 'adminService',
      useClass: AdminService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
