import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StockDataSource, StockItem } from './stock-datasource';
import { MatTableDataSource} from '@angular/material/table';
import { BrandModelService } from '../services/brand-model.service';
import { BrandModel } from '../models/brand-model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StockItem>;
  dataSource: StockDataSource;
  dataSourceMat: any;

  models: BrandModel[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private brandModelService: BrandModelService) {
    this.dataSource = new StockDataSource();
    this.dataSourceMat = new MatTableDataSource(this.dataSource.data);

    this.brandModelService.getDeals().subscribe(
      models => this.models = models
    );

    console.log(this.models);
  }

  getModels()
  {
    console.log(this.models);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSourceMat;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMat.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
