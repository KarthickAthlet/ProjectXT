import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

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
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
