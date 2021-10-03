import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Brasil', weight: 1.0079, symbol: 'Dolar'},
  {position: 2, name: 'Itau', weight: 4.0026, symbol: 'Real'},
  {position: 3, name: 'Bradesco', weight: 6.941, symbol: 'Real'},
  {position: 4, name: 'Nubank', weight: 9.0122, symbol: 'Real'},
  {position: 5, name: 'Nubank', weight: 10.811, symbol: 'Real'},
  {position: 6, name: 'Nubank', weight: 12.0107, symbol: 'Real'},
  {position: 7, name: 'Nubank', weight: 14.0067, symbol: 'Real'},
  {position: 8, name: 'Nubank', weight: 15.9994, symbol: 'Real'},
  {position: 9, name: 'Nubank', weight: 18.9984, symbol: 'Real'},
  {position: 10, name: 'Nubank', weight: 20.1797, symbol: 'Real'},
];

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  constructor() { }

  ngOnInit(): void {
  }

}
