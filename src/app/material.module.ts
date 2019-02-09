/* 材料模块儿文件管理材料组件, 所有的材料组件将会被统一到当前模块中, 将该模块导入到应用根模块中 */

/* Angular Material is a UI Component library for Angular JS developers. Angular
 * Material Component helps in constructing attractive, consistent, and function
 * al web pages and web applications while adhering to modern web design princip
 * les like browser compatibility, device independence, and graceful degradation
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

/* 导入页面设置包 */
import { MatPaginatorModule } from '@angular/material';

/* 导入表格排序模块 */
import { MatSortModule } from '@angular/material';

/* @NgModule 装饰器标记当前文件为模块儿 */
@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ],

    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule
    ]
})

export class MaterialModule {}
