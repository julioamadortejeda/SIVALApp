import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DobleplayService } from 'src/app/services/dobleplay/dobleplay.service';
import { Folio } from 'src/app/models/folio';

@Component({
    selector: 'app-folios-dp',
    templateUrl: './folios-dp.component.html',
    styleUrls: ['./folios-dp.component.scss']
})
export class FoliosDPComponent implements OnInit {

    public folios: Folio[];
    isLoading = true;
    isRateLimit = false;
    resultLength = 0;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private dpService: DobleplayService) { }

    displayedColumns: string[] = ['fechaCaptura', 'promotor', 'folio', 'os', 'telefono', 'estatus', 'campana', 'area', 'paquete'];
    dataSource = new MatTableDataSource(this.folios);

    ngOnInit() {
        this.dpService.getFolios().subscribe(data => {
            this.folios = data;
            // console.log(this.folios);
            this.isLoading = false;
            this.isRateLimit = false;
            this.resultLength = this.folios.length;
            this.dataSource.paginator = this.paginator;
        });
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
