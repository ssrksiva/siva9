import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestComponent } from './test.component';
import { EcommerceSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { TestService } from './test.service';
import { Test_ROUTE } from './test.route';

@NgModule({
    imports: [EcommerceSharedModule, RouterModule.forChild([Test_ROUTE])],
    declarations: [TestComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports:[TestComponent]
})
export class TestModule {}