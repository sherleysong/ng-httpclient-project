
export const apiList = {
  // mock数据
  getProductList: {
    url: "/product/list",
    method: "get",
    description: "get product list",
    mock: true,
    mockURL: "./assets/mock/productList.json",
  },
  // 真实接口
  saveProduct: {
    url: "/product/save",
    method: "post",
    description: "save product info",
    mock: false,
    mockURL: "",
  },
}
