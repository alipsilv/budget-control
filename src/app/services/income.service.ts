import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class IncomeService {

	public newIncomeSubject = new Subject<any>();
    
	constructor(private http: Http) { }

	getAllIncome() {
			return this.http.get('data/income-data.json').map( res => res.json());
	}

	addIncome(data){
        this.newIncomeSubject.next(data);
	}


}
