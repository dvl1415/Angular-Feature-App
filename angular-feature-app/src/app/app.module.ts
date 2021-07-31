import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTestComponent } from './components/student-test/student-test.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductComponent } from './components/product/product.component';
import { DirectiveComponent } from './structural-directives/directive/directive.component';
import { NgSwitchComponent } from './structural-directives/ng-switch/ng-switch.component';
import { NgIfComponent } from './structural-directives/ng-if/ng-if.component';
import { NgClassComponent } from './attribute-directives/ng-class/ng-class.component';
import { NgStyleComponent } from './attribute-directives/ng-style/ng-style.component';
import { CustomDirective } from './directives/custom.directive';
import { EmojiDirective } from './directives/emoji.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { PipeComponent } from './components/pipe/pipe.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ChildOneComponent } from './components/child-one/child-one.component';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { ParentThreeComponent } from './components/parent-three/parent-three.component';
import { ChildThreeComponent } from './components/child-three/child-three.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { LifeCycleChildComponent } from './components/life-cycle-child/life-cycle-child.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentCustomerComponent } from './components/parent-customer/parent-customer.component';
import { ChildCustomerComponent } from './components/child-customer/child-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTestComponent,
    EmployeeComponent,
    ProductComponent,
    DirectiveComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
    CustomDirective,
    EmojiDirective,
    CustomPipe,
    PipeComponent,
    GenderPipe,
    ParentComponent,
    ChildComponent,
    ChildOneComponent,
    ParentOneComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    ParentThreeComponent,
    ChildThreeComponent,
    LifeCycleHooksComponent,
    LifeCycleChildComponent,
    ParentCustomerComponent,
    ChildCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
