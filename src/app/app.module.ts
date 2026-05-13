import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EffectsDirective } from './directives/effects.directive';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { FormatPhoneNumberPipe } from './pipes/format-phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EffectsDirective,
    AdvantageComponent,
    ProductComponent,
    ShortDescriptionPipe,
    FormatPhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
