import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppComponent } from './app.component';
import { AdmintableComponent } from './admintable/admintable.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import {MatIconModule} from '@angular/material/icon';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent,
    AdmintableComponent,
    SearchfilterPipe
  ],
  imports: [
  BrowserModule,NzCheckboxModule,
    FormsModule,NzNotificationModule,
    HttpClientModule,NzButtonModule,
    BrowserAnimationsModule,
    NzPopconfirmModule,
    NzTableModule,NzInputModule,MatIconModule,
    NzIconModule,HttpClientModule,NzPaginationModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
