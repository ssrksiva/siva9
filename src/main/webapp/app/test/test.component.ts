import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { LocalStorageService } from 'ngx-webstorage';
import { PersistenceService, StorageType } from 'angular-persistence';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'jhi-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  myName: string;
  objectref:any;
  objectCheck:any;
  object: any;

  constructor(private testService: TestService, private persistenceService: PersistenceService) {
    persistenceService.defineProperty(this, 'myName', 'myNameProperty',
      { type: StorageType.SESSION, oneUse: false });
     

  }

  ngOnInit() {
    // this.objectref = this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // Defaults to 0 if no query param provided.
    //     this.objectCheck = params['object'];
    //   });
    //   this.object=JSON.parse(this.objectCheck);
     
    this.object = this.testService.object;
    console.log(this.persistenceService.get('object'));
    if (this.object) {
      this.persistenceService.set('object', JSON.stringify(this.object));
      console.log(this.persistenceService.get('object'));
      this.myName = this.object;
    }
    else {
      this.object = this.persistenceService.get('object');
      this.object = this.myName;
      console.log(this.object);
    }
  
    console.log(this.object);


  }

  getStyles() {
    let styles = {
      'background-color': 'transparent',
      'font-weight': 'bold'
    };
    return styles;
  }
  addToCart()
  {
    //service call for add to cart
  }
}
