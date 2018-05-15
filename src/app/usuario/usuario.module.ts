import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {UsuarioComponent} from './usuario.component';
import {UsuarioService} from './usuario.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    RadioButtonModule,
    PasswordModule,
    DropdownModule, 
    CheckboxModule
  ],
  declarations: [
    UsuarioComponent
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule {

}
