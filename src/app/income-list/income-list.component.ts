import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {IncomeService} from './../services/income.service';

@Component({
	selector: 'app-income-list',
	templateUrl: './income-list.component.html',
	styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {

	incomes: Array<any>;
	error: string;

	constructor(
		private http: Http,
		private incomeService: IncomeService
	) { }

	ngOnInit() {
		this.incomeService.getAllIncome()
		.subscribe(
			data => this.incomes = data,
			error => this.error = error.statusText
		);

		this.incomeService.newIncomeSubject.subscribe(
			data => this.incomes.push(data)
		);
	}

}
