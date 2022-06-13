let selecteRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  const formData = readFormData();
  if (selecteRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
  const formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}

function insertNewRecord(data) {
  const table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.length); // insertRow - 테이블 행추가
  const cell1 = newRow.insertCell(0); // insertCell - 테이블 행추가 (insertRow()로 생성한 row에 cell을 추가
  cell1.innerHTML = data.productCode;
  const cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  const cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;
  const cell4 = newRow.insertCell(3);
  cell4.innerHTML = `${data.perPrice} 원`;
  const cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
  selecteRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selecteRow.cells[0].innerHTML;
  document.getElementById("product").value = selecteRow.cells[1].innerHTML;
  document.getElementById("qty").value = selecteRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selecteRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selecteRow.cells[0].innerHTML = formData.productCode;
  selecteRow.cells[1].innerHTML = formData.product;
  selecteRow.cells[2].innerHTML = formData.qty;
  selecteRow.cells[3].innerHTML = `${formData.perPrice} 원`;
}

// 삭제
function onDelete(td) {
  if (confirm("삭제 하시겠습니까?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}
