import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(){ }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(){
    this.emitindoItemParaDeletar.emit(this.item.id);
  }

  /** 
   * É usado exclusivamente para realizar lógicas de limpeza.
   * 
   * Exemplo: Quando temos uma conexão HTTP e queremos encerrar a escuta, 
   * para a remoção de um token de login, etc.
   */
  ngOnDestroy(): void{
    console.log("Item destruído.");
  }
}
