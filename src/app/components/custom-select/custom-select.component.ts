import { FormControl } from '@angular/forms';
import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

export class OptionsSelect {
  /**
   * Nome da opção
   */
  label!: string;
  /**
   * Valor a ser enviado na requisição
   */
  value!: string | boolean | number;

  disable?: boolean;
}
@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnChanges {
  @Input()
  control!: FormControl;

  @Input()
  placeholder!: string;

  @Input() options: OptionsSelect[] = [];

  @Input() readonly = false;

  @Input() disabled = false;

  @Input() multiple = false;

  @Input() hasSelectAll = false; //Determina se o componente terá uma opção para marcar/desmarcar todas opções

  @ViewChild('select')
  select!: MatSelect;

  isAllSelected = false;

  constructor() {}

  ngOnChanges() {
    this.disabled ? this.control.disable() : this.control.enable();
  }

  ngOnInit() {}

  onToggleAll() {
    if (this.isAllSelected) {
      this.select?.options?.forEach((item: MatOption) => item.deselect());
    } else {
      this.select?.options?.forEach((item: MatOption) => item.select());
    }
    this.isAllSelected = !this.isAllSelected;
  }
}
