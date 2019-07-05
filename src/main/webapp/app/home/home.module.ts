import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommerceSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { HomeService } from './home.service';
import { TestService } from 'app/test/test.service';

@NgModule({
    imports: [EcommerceSharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[HomeService]
})
export class EcommerceHomeModule {}
