// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释
$(function () {
  $("#items").html("<h2>商品信息</h2>");
  for (let item of loadAllItems()) {
    $("#items").append(`<tr>
            <td>名称:</td>
            <td>${item.name}...</td>
            <td>价格:</td> 
            <td>${item.price}元...</td>
            <td>数量:</td>
            <td>
                <input type="number" name="number" id="itemNumber" style="width: 50px">
            </td>
        </tr>
        </tr><br><br>`)
  }

  $("#promotions").html("<h2>优惠活动</h2>");
  for (let item of loadPromotions()) {
    let items = item.items;
    let itemsInfo = [];
    if (items === undefined){
      itemsInfo = "";
    }else {
      for (let barCode of items){
        for (let elem of loadAllItems()){
          if (elem.id === barCode){
            itemsInfo.push(elem.name)
          }
        }
      }
    }
    $("#promotions").append(`<tr>
            <td>活动类型:</td>
            <td>${item.type}...</td>
            <td>条件:</td> 
            <td>${itemsInfo}...</td>
        </tr>
        </tr><br><br>`)
  }
})


function calculatePrice() {
  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
}

function clear() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
}
