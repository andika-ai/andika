import { PricingPlan } from '@andika/model';
import { PricingPlanService } from '@andika/services';
import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { SubSink } from 'subsink'

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-pricing-plan-table',
  templateUrl: './pricing-plan-table.component.html',
  styleUrls: ['./pricing-plan-table.component.css']
})
export class PricingPlanTableComponent implements OnInit, AfterViewInit, OnDestroy {

  private _sbS  = new SubSink()
  
  pricingPlans: PricingPlan[] = [];
  displayedColumns: string[] = ['name', 'price', 'durationMonths', 'charactersPerMonth', 'discountPercentage'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _pricingPlanService: PricingPlanService) {



  }
  ngOnInit(): void {
    this.getPricingPlanList();
    // Assign the data to the data source for the table to render

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

getPricingPlanList(){
  // this._sbS.sink =  this._pricingPlanService.getPricingPlans().subscribe((plans: PricingPlan[])=>{
  //   this.pricingPlans = plans;
  //   this.dataSource = new MatTableDataSource(this.pricingPlans);
  // });
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  // this._sbS.unsubscribe();
}



}

