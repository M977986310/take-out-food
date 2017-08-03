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
                <input  name="number" id="itemNumber" class="itemNumber" style="width: 50px" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}" >
            </td>
        </tr>
        </tr><br><br>`)
  }

  $("#promotions").html("<h2>优惠活动</h2>");
  for (let item of loadPromotions()) {
    let items = item.items;
    let itemsInfo = [];
    if (items === undefined) {
      itemsInfo = "";
    } else {
      for (let barCode of items) {
        for (let elem of loadAllItems()) {
          if (elem.id === barCode) {
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

  let itemNumber = $(".itemNumber");
  let items = [];
  for (let i = 0; i < loadAllItems().length; i++) {
    let item = "";
    item += loadAllItems()[i].id;
    item += " x ";
    item += $(itemNumber[i]).val();
    items.push(item);
  }


  $("#demo").text(autoChooseBestCharge(items));
}

function clear() {
  $("#demo").text('');
}
