import { Component, OnInit } from '@angular/core';
import {IncomeService} from './../services/income.service';

@Component({
	selector: 'app-income-form',
	templateUrl: './income-form.component.html',
	styleUrls: ['./income-form.component.css']
})
export class IncomeFormComponent implements OnInit {

	frequencyList: Array<string> = ['','Weekly', 'Monthly', 'Annually'];

	constructor(private incomeService: IncomeService ) { }

	ngOnInit() {
	}

	onSubmit(data): void{
		this.incomeService.addIncome(data);
	}

}
