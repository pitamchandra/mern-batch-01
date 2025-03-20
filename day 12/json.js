const shop = {
    owner: "lala",
    address: {
        location : "banasree",
        city : "dhaka",
        country : "BD"
    },
    revenew: 450200,
    isOpen : true,
    isNew : false
}

const shopJson = JSON.stringify(shop)

const shopObj = JSON.parse(shopJson)
console.log(shopObj);