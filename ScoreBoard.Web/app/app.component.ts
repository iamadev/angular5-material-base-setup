import { Component } from '@angular/core';
//import { MatTableDataSource } from '@angular/material'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    name: string = 'Angular';
    //displayedColumns = ['position', 'name', 'weight', 'symbol'];
    //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: Element[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];