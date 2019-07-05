import { Route } from '@angular/router';
import { TestComponent } from './test.component';

export const Test_ROUTE: Route = {
    path: '',
    component: TestComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};