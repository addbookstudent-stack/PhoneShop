const data = [
    {
        name: "Samsung Galaxy 26+",
        category: "Samsung",
        price: 1299,
        url: 'Image/galaxy26plus.png',
    },
    {
        name: "Samsung Galaxy S26",
        category: "Samsung",
        price: 999,
        url: 'Image/galaxys26.png',
    },
    {
        name: "Samsung Galaxy S26 Ultra",
        category: "Samsung",
        price: 1299,
        url: 'Image/galaxys26ultra.png',
    },
    {
        name: "iPhone 17",
        category: "iPhone",
        price: 1599,
        url: 'Image/iPhone17e.png',
    },
    {
        name: "iPhone 18 Pro Max",
        category: "iPhone",
        price: 1899,
        url: 'Image/iPhone18ProMax.jpg',
    },
    {
        name: "Oppo Find X 9 Ultra",
        category: "Oppo",
        price: 899,
        url: 'Image/oppofindx9ultra.png',
    },
    {
        name: "Oppo Reno 16 F 5G",
        category: "Oppo",
        price: 899,
        url: 'Image/opporeno16f5g.png',
    },
    {
        name: "Oppo Reno 165G",
        category: "Oppo",
        price: 999,
        url: 'Image/opporeno165g.png',
    },
    {
        name: "Huawei Pura 90s Pro Max",
        category: "Huawei",
        price: 1190,
        url: 'Image/huaweipura90spromax.jpg',
    },
    {
        name: "Huawei Nova 15 Max",
        category: "Huawei",
        price: 350,
        url: 'Image/huaweinova15max.png',
    },
    {
        name: "Huawei Mate X7",
        category: "Huawei",
        price: 1200,
        url: 'Image/huaweimatex7.png',
    },
    {
        name: "Honor Magic V6",
        category: "Honor",
        price: 1500,
        url: 'Image/honormagicv6.png',
    },
    {
        name: "Honor 600 Pro",
        category: "Honor",
        price: 800,
        url: 'Image/honor600pro.png',
    },
    {
        name: "Honor 200 5G",
        category: "Honor",
        price: 350,
        url: 'Image/honor2005g.png',
    },
    {
        name: "Xiaomi 15T Pro",
        category: "XiaoMi",
        price: 700,
        url: 'Image/xiaomi15tpro.png',
    },
    {
        name: "Xiaomi 15T",
        category: "XiaoMi",
        price: 400,
        url: 'Image/xiaomi15t.png',
    },
    {   
        name: "Xiaomi Redmi Pad 2 Pro 5G",
        category: "XiaoMi",
        price: 344,
        url: 'Image/xiaomiredmipad2pro5g.png',
    },
    {
        name: "Xiaomi Redmi Pad 2 Pro Wi-Fi",
        category: "XiaoMi",
        price: 300,
        url: 'Image/xiaomiredmipad2prowifi.png',
    },
];

const cardWrapper = document.querySelector(".card-wrapper");
const btn = document.querySelectorAll(".btn")

document.addEventListener("DOMContentLoaded", function(){
    displayData(data);
    filterData();
})


btn.forEach(b => {
    let color = ""
    b.addEventListener("click", function(e){
        for(let i = 0; i < btn.length; i++){
            if(btn[i].classList.contains("active")){
                btn[i].classList.remove("active");
            }
        }
        e.target.classList.add("active");
    })
})

function displayData(product){
    const allItem = product.map(item =>{
        return`
            <article class="card">
                <span class="price">$${item.price}</span>
                <img src="${item.url}" class="img" alt="">
                <h3 class="card-heading">${item.name}</h3>
            </article>
        `;
    }).join("");

    cardWrapper.innerHTML = allItem;
}

function filterData(){
    btn.forEach(item=>{
        item.addEventListener("click", function(e){
            const id = e.target.dataset.id;

            const filtering = data.filter(cate => {
                return cate.category.toLowerCase() == id;
            })
            if(id == "all"){
                displayData(data);
            }else{
                displayData(filtering);
            }
        })
    })
}