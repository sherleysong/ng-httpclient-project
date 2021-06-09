import { Component, OnInit } from '@angular/core';
import { dataHttpService } from "./../../service/data-http.service"


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor(
    private DataHttpService: dataHttpService
  ) { }

  productList: [];
  productDetail: any;
  buffer: any;

  ngOnInit() {
    this.DataHttpService.getDataService("getProductList", {}).subscribe((data: any) => {
      this.productList = data.data
    })

  }

  viewDetail(id) {
    this.DataHttpService.getDataService("saveProduct", { id : id}).subscribe((data: any) => {
      this.productDetail = data.data
    }, error => {
      console.log(error)
      alert(error.message)
    })
  }

}
