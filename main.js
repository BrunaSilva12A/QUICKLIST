// araw vetor
const items = []

function addItem() {
    const itemName = document.quarySelector("#item").value

    //objeto
    const item ={
       name: itemName,
       checked: false
    }

    items.pash(item)

    document.querySelector("#item").value + ""
}