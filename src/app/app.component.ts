import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

/* mat-table provides the Material Design styled data-table that can be used to
 * display rows of data. It builds on the foundation of CDK data-table and uses
 * similar interface for the data input and template except that the element an
 * d attribute selectors will be prefixed with mat- instead of cdk-
 */

/* 接口定义元素周期表元素的成员变量以实现多态 */
export interface PeriodicElement {
  /* 模型声明变量的 type 和 property */
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/* 模拟元素数据 */
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  { position: 11, name: 'Soldium', weight: 1.0079, symbol: 'Na'},
  { position: 12, name: 'Magnesium', weight: 4.0026, symbol: 'Mg'},
  { position: 13, name: 'Aluminium', weight: 6.941, symbol: 'Al'},
  { position: 14, name: 'Silicon', weight: 9.0122, symbol: 'Si'},
  { position: 15, name: 'Phosphorous', weight: 10.811, symbol: 'P'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* 定义页面表格的元素 */
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  /* 通过 MatTableDataSource 创建一个 PeriodicElement 类型的数据源并且初始化为 ELEMENT_DATA */
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  /* 创建当前组件的分页器 object */
  @ViewChild(MatPaginator) paginator: MatPaginator; /* 通过页面加载器的子类的构造方法创建一个 Mat 类的分页器并通过其渲染分页效果 */
  @ViewChild(MatSort) sort: MatSort; /* 创建一个 Mat 类的排序器并通过其渲染排序效果 */

  /* 实现继承接口方法 */
  ngOnInit() {
    /* 当组件初始化的时候将数据源赋值到分页器 object 并通过该分页器的间隔值展示数据 */
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
