import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appReducer } from './ngrx/app.reducer';
import { AppEffects } from './ngrx/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './content/menu/menu.component';
import { MatTableModule } from '@angular/material/table';
import { InboxComponent } from './content/inbox/inbox.component';
import { EmailComponent } from './content/email/email.component';
import { EmailDetailsComponent } from './content/email/detail/detail.component';
import { ToolbarComponent } from './content/email/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'; 
import { storageMetaReducer } from './ngrx/storage.metaReducer';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MenuComponent,
    GlobalHeaderComponent,
    InboxComponent,
    EmailComponent,
    EmailDetailsComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {
      metaReducers: [storageMetaReducer]
    }),
    StoreModule.forFeature('appState', appReducer),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    LayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatTableModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
