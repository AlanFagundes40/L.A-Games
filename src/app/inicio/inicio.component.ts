import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto.models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(
       retornoProduto =>{
         this.produtos = retornoProduto.map(
        item => {
        return new Produto(
          item.id,
          item.produto,
          item.descricao,
          item.foto,
          item.preco
        );
      });
    });
  }
}
