import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Com1Component } from './com1/com1.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Com1Component,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    CustomPipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: '₺'}, CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
