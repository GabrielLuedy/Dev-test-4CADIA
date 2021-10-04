import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: number ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:'13-01-2021' , name: 'Saldo Anterior', weight: '', symbol: 969.928},
  {position: '16-02-2021', name: '00:09:31', weight: '4.0026', symbol: 2},
  {position: '17-02-2021', name: '15:04:01', weight:' 6.941', symbol: 2},
  {position: '08-03-2021', name: '18:18:25', weight: '9.0122', symbol: 2},
  {position: '28-03-2021', name: '04:48:57', weight: '10.811', symbol: 2},
  {position: '19-05-2021', name: '10:30:24', weight:' 12.0107', symbol: 2},
  {position: '09-06-2021', name: '03:49:03', weight: '14.0067', symbol:2},
  {position: '05-08-2021', name: '04:23:06', weight: '15.9994', symbol: 2},
  {position: '07-09-2021', name: '00:51:37', weight: '18.9984', symbol:2},
  {position: '04-10-2021', name: '18:23:07',weight: '20.1797', symbol: 2},
];

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})

export class WithdrawComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
