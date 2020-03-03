import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommonNavigationComponent,
    AdminNavigationComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
