import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'PAN', weight: 1.0079, symbol: 'Dólar Americano',},
  {position: 2, name: 'INTER', weight: 4.0026, symbol: 'Euro'},
  {position: 3, name: 'CAIXA', weight: 6.941, symbol: 'Libra esterlina'},
  {position: 4, name: 'SANTANDER', weight: 9.0122, symbol: 'Iene'},
  {position: 5, name: 'BRADESCO', weight: 10.811, symbol: 'Dólar Australiano'},
  {position: 6, name: 'BB', weight: 12.0107, symbol: 'Franco Suíço'},
  {position: 7, name: 'ITAU', weight: 14.0067, symbol: 'Dólar Canadense'},
  {position: 8, name: 'MIDWAY', weight: 15.9994, symbol: 'Renminbi (Yuan)'},
  {position: 9, name: 'VOTORANTIM', weight: 18.9984, symbol: 'Peso Argentino'},
  {position: 10, name: 'NUBANK', weight: 20.1797, symbol: 'Real'},
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
