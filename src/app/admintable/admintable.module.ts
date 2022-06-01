import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,FormData,FormArray,FormGroup,NzPopconfirmModule,
    NzInputModule,
    NzIconModule,
    NzPopconfirmModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdmintableModule { }
