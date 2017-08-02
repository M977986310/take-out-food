function bestCharge(selectedItems) {

  if (selectedItems.length === 3) {
    let html_head = `============= 订餐明细 =============\n`;
    let html_middle = `-----------------------------------\n`;
    let html_tail = `===================================\n`;
    let html_item = "";

    let save = 0;
    let all = 0;

    for (let item of mergeItems(splitJoint(selectedItems))) {
      if (item.name === "黄焖鸡" || item.name === "凉皮") {
        var itemPrice = (item.price / 2) * item.count;
        save += (item.price / 2) * item.count;
      } else {
        var itemPrice = item.price * item.count;
      }
      all += itemPrice;
      html_item += `${item.name} x ${item.count} = ${item.price * item.count}元\n`
    }
    let html_saveInfo = `使用优惠:\n指定菜品半价(黄焖鸡，凉皮)，省${save}元\n`;
    let html_allInfo = `总计：${all}元\n`;

    return html_head + html_item + html_middle + html_saveInfo + html_middle + html_allInfo + html_tail;
  } else if (selectedItems.length === 2) {
    let html_head = `============= 订餐明细 =============\n`;
    let html_middle = `-----------------------------------\n`;
    let html_tail = `===================================\n`;
    let html_item = "";

    let save = 0;
    let all = 0;

    for (let item of mergeItems(splitJoint(selectedItems))) {
      all += item.price * item.count;
      html_item += `${item.name} x ${item.count} = ${item.price * item.count}元\n`
    }
    if (all > 30) {
      var html_allInfo = `总计：${all - 6}元\n`;
    }else {
      var html_allInfo = `总计：${all}元\n`;
    }
    let html_saveInfo = `使用优惠:\n满30减6元，省6元\n`;

    return html_head + html_item + html_middle + html_saveInfo + html_middle + html_allInfo + html_tail;
  } else if (selectedItems.length === 1){
    let html_head = `============= 订餐明细 =============\n`;
    let html_middle = `-----------------------------------\n`;
    let html_tail = `===================================\n`;
    let html_item = "";

    let all = 0;

    for (let item of mergeItems(splitJoint(selectedItems))) {
      all += item.price * item.count;
      html_item += `${item.name} x ${item.count} = ${item.price * item.count}元\n`
    }
    let html_allInfo = `总计：${all}元\n`;

    return html_head + html_item + html_middle + html_allInfo + html_tail;
  }


}

function splitJoint(selectedItems) {
  let splitJoint = [];  //将名称与数量分离并放入该集合
  for (let item of selectedItems) {
    let barCode = item.split(" x ")[0];
    let count = item.split(" x ")[1];
    splitJoint.push({barCode: barCode, count: count});
  }

  return splitJoint;
}

function mergeItems(splitJoint) {
  let mergeItemInfo = []; //将输入的商品与所有商品进行比对,并将信息合并
  for (let itemOfAll of loadAllItems()) {
    for (let itemOfSelec of splitJoint) {
      if (itemOfAll.id === itemOfSelec.barCode) {
        mergeItemInfo.push(Object.assign(itemOfAll, itemOfSelec));
      }
    }
  }

  return mergeItemInfo;
}
