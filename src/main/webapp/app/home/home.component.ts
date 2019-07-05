import { Component, OnInit, EventEmitter, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';
import { Router } from '@angular/router';
import { TestService } from 'app/test/test.service';
import { PersistenceService, StorageType } from 'angular-persistence';
import { TestComponent } from 'app/test/test.component';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    count:any;
    
    object:any;
    array: any=[{id:'1',image:'../../content/images/hipster.png',price:'20',name:'Check',description:'hello',priceUnit:'Rs.'},{id:'2',image:'../../content/images/hipster.png',price:'16',name:'Check1',description:'hai',priceUnit:'$'}];

    constructor(private principal: Principal, private loginModalService: LoginModalService, private eventManager: JhiEventManager,private testService:TestService,private router:Router,private persistenceService: PersistenceService) {

    }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    indexTracker(index: number, value: any) {
        return index;
      }

    goSearch(value:any) {
        // console.log(value);
        // console.log(value1);
        
        // var test=[];
        this.object=this.array.filter(x => x.id == value);
        // test.push(this.array[value]);
        // console.log(test);
        // this.object=test;
        console.log(this.object);
        this.persistenceService.set('important',0);
        console.log(this.persistenceService.get('object'));
        console.log(this.persistenceService.get('myNameProperty'));
        console.log(this.persistenceService.get('myName'));
        // this.object=this.array[value1];
        // this.testService.setArray(this.array.filter(x => x.id === value));
        // console.log(this.testService.getArray());
        
        this.testService.object=this.object;
        // [queryParams]="{prop: 'xxx'}"
       
        // this.count=99;
        // queryParams={count:99};
        this.router.navigate(['test']);
        
      }

      
}
