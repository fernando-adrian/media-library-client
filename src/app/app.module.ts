import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { AddMediaFormComponent } from './components/add-media-form/add-media-form.component';
import { AddMediaSourceFormComponent } from './components/add-media-source-form/add-media-source-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    StarRatingsComponent,
    AddMediaFormComponent,
    AddMediaSourceFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
