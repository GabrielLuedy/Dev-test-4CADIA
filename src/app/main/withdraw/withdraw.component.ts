import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: number ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:'13-01-2021' , name: 'SALDO ANTERIOR', weight: '', symbol: 969.928},

  {position: '16-02-2021', name: 'Transf. Eletr. Banc. INTER', weight: '- 4.0026', symbol: 929.902},
  {position: '17-02-2021', name: 'Transf. Eletr. Banc. CAIXA', weight:' - 6.941', symbol: 922.961},

  {position:'01-03-2021' , name: 'SALDO CONTA ', weight: '', symbol: 922.961},

  {position: '08-03-2021', name: 'Transf. Eletr. Banc. SANTANDER', weight: '- 9.0122', symbol:832.839},
  {position: '28-03-2021', name: 'Transf. Eletr. Banc. BRADESCO', weight: '- 10.811', symbol:822.028 },

  {position:'01-04-2021' , name: 'SALDO CONTA ', weight: '', symbol: 822.028},

  {position: '19-05-2021', name: 'Transf. Eletr. Banc. BB', weight:' 12.0107', symbol: 701.921},
  {position: '09-06-2021', name: 'Transf. Eletr. Banc. ITAU', weight: '14.0067', symbol:561.854},

  {position:'01-04-2021' , name: 'SALDO CONTA ', weight: '', symbol: 561.854},

  {position: '05-08-2021', name: 'Transf. Eletr. Banc. MIDWAY', weight: '15.9994', symbol:401.860},
  {position: '07-09-2021', name: 'Transf. Eletr. Banc. VOTORANTIM', weight: '18.9984', symbol:211.876},

  {position:'01-04-2021' , name: 'SALDO CONTA ', weight: '', symbol: 211.876},

  {position: '04-10-2021', name: 'Transf. Eletr. Banc. NUBANK',weight: '20.1797', symbol: 10.079},
  {position: '04-10-2021', name: 'Transf. Eletr. Banc. PAN',weight: '10.079', symbol: 0},

  {position:'01-04-2021' , name: 'SALDO CONTA ', weight: '', symbol: 0},

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
