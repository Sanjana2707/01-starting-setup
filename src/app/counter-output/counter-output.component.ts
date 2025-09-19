import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;  
  doubleCount$: Observable<number>;
  constructor(private store:Store<{counter:number}>) {   
  //this.count$=store.select('counter'); //counter is the key we defined in app.module.ts which is used to map the reducer 
      this.count$=store.select(selectCount); // we can also use a selector function to get the data from the store
      this.doubleCount$=store.select(selectDoubleCount); // we can also use a selector function to get the data from the store
  
}
}
