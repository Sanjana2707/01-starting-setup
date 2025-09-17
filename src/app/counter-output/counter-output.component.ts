import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  count$: Observable<number>;  // $ sign is a convention to indicate its an observable

  constructor(private store:Store<{counter:number}>) {   // inject store , we can use since its provided in root and the type of store is defined here because we have to tell what kind of data we are expecting from the store orlese typescript wont know what kind of data we are expecting from the store
         this.count$=store.select('counter'); //counter is the key we defined in app.module.ts which is used to map the reducer and select is used to get the data from the store

  
}
}
