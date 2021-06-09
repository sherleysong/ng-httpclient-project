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

  ngOnInit() {
    this.DataHttpService.getDataService("getProductList", {}).subscribe((data: any) => {
      this.productList = data.data
    })
  }

  addProduct() {
    const param = {
      name: "product4",
      price: 40000
    }
    this.DataHttpService.getDataService("addProduct", param).subscribe((data: any) => {
      console.log(data)
      // todo
    }, error => {
      alert(error.message)
    })
  }
}
