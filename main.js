// araw vetor
const items = []

function addItem() {
    const itemName = document.querySelector("#item").value

    //objeto
    const item ={
       name: itemName,
       checked: false
    }

    items.push(item)

    document.querySelector("#item").value = ""

    showItensList()
}

function  showItensList(){
    const sectionList = document.querySelector(".list")

    sectionList.innerHTML = ""

    items.sort((a, b) => Number(a.checked) - Number(b.checked))

    items.map((item, index) => {
        sectionList.innerHTML += `
         <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item=${index}" ${item.checked === true ? "checked" : ""}>
                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item=${index}" onclick="checkitem('${item.name}')">${item.name}</label>
                </div>

                <button onclick="removeItem('$(item.name)')">
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
         `
    })
}

function checkitem(itemName) {
   const item = items.find((item) => item.name === itemName)
   item.checked = !item.checked
   showItemsList()
}

function removeItem(itemName){
    console.log(itemName)
}