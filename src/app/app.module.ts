import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComponentOneComponent} from './component-one/component-one.component';
import {NgClassComponent} from './ng-class/ng-class.component';
import {NgStyleComponent} from './ng-style/ng-style.component';
import {ClassBindingComponent} from './class-binding/class-binding.component';
import {StyleBindingComponent} from './style-binding/style-binding.component';
import {NgIfComponent} from './ng-if/ng-if.component';
import {NgForComponent} from './ng-for/ng-for.component';
import {NgSwitchComponent} from './ng-switch/ng-switch.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InlineTemplateComponent} from './inline-template/inline-template.component';
import {InlineStyleComponent} from './inline-style/inline-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    NgClassComponent,
    NgStyleComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    InlineTemplateComponent,
    InlineStyleComponent,
    NgModelComponent,
    NgModelGroupComponent,
    FormControlComponent,
    FormGroupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
