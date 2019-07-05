import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HasAnyAuthorityDirective } from 'app/shared';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class TestService {
    private id: string;
    private array:any;
    
     object:any;
    constructor(private http: HttpClient) { }
    setId(id: string) {
        this.id = id;
    }
    setArray(array: any) {
        this.array = array;
    }
    getArray()
    {
        return this.array;
    }
    
}