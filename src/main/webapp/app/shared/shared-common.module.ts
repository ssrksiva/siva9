import { NgModule } from '@angular/core';

import { EcommerceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EcommerceSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EcommerceSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EcommerceSharedCommonModule {}
