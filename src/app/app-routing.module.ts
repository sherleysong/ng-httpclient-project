import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./pages/product/product.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "/product/list",
    pathMatch: "full",
  },
  {
    path: "product/list",
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
