import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

// firebase configuration imports
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { PrismComponent } from 'angular-prism';
import { CodeHighlightComponent } from './components/code-highlight/code-highlight.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { DescriptionContainerComponent } from './components/description-container/description-container.component';
import { CodeUploaderComponent } from './components/code-uploader/code-uploader.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { PresentationSliderComponent } from './components/presentation-slider/presentation-slider.component';
import { FileStructureComponent } from './components/file-structure/file-structure.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    PrismComponent,
    CodeHighlightComponent,
    SideNavigationComponent,
    DescriptionContainerComponent,
    CodeUploaderComponent,
    ImageUploaderComponent,
    PresentationSliderComponent,
    FileStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
