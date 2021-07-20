import { Component, OnInit } from '@angular/core';

interface Task {
  high: number;
  medium: number;
  low: number;
}
interface TopSelling {

  firstName: string;
  secondName: string;
  num: number;
}

interface StockDetails {

  low: number;
  surpulus: number;
  allVariants: number;
}

interface dashboard {
  salesActivity: number;
  dailyStatusArr: Array<Object>;
  task: Task;
  topSelling: Array<TopSelling>;
  stock: StockDetails;
}
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  dashboardModel: dashboard;
  constructor() {
    this.dashboardModel = {
      salesActivity: 95,
      dailyStatusArr: [{
        type: "New Order",
        isIncreased: true,
        increasePerc: 15,
        quantity: 29
      }, {
        type: "To be Shipped",
        isIncreased: true,
        increasePerc: 15,
        quantity: 35
      }, {
        type: "To be Invoiced",
        isIncreased: true,
        increasePerc: 15,
        quantity: 17
      }, {
        type: "To be Delivered",
        isIncreased: true,
        increasePerc: 15,
        quantity: 14
      }],
      task: {
        low: 15,
        medium: 20,
        high: 30,
      },
      topSelling: [{
        firstName: "Arbutus",
        secondName: "Marina",
        num: 25
      }, {
        firstName: "Sem",
        secondName: "Buxus",
        num: 25
      }, {
        firstName: "Camellia",
        secondName: "Jab Purity",
        num: 25
      }, {
        firstName: "Betula",
        secondName: "Utilis",
        num: 25
      }],
      stock: {
        low: 30,
        surpulus: 27,
        allVariants: 43,
      }
    }
  }

  ngOnInit() {
  }

}
