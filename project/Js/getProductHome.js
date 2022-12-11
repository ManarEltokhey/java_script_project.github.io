function getCategory() {
    var counter
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var categories = JSON.parse(this.responseText)
            //    console.log("ttttttttttttt")
            //    debugger;
            var dropdown = document.getElementById("drop");
            var divContainer = document.getElementById("categoryContainer")
            for (var i = 0; i < categories.length; i++) {


                var headCategoryName = document.createElement("a")
                var txtName = document.createElement("h4")
                txtName.style.paddingBottom = "15px"
                var txtNameCategory = document.createTextNode(categories[i])

                txtName.appendChild(txtNameCategory)

                txtName.onclick = (function (val) {
                    return function () {
                        localStorage.setItem("Category", val)
                    }


                })(categories[i])

                headCategoryName.appendChild(txtName)
                headCategoryName.setAttribute("href", "catigorePage.html")
                headCategoryName.setAttribute("target", "-blank")
                headCategoryName.style.color = "black"
                divContainer.appendChild(headCategoryName)





                // var option = document.createElement('option');
                // console.log(headCategoryName)
                var linkToPage = document.createElement("a")
                var txtLink = document.createTextNode(categories[i])
                linkToPage.appendChild(txtLink)
                var line = document.createElement("br")
                // linkToPage.setAttribute("href", "catigorePage.html")
                dropdown.appendChild(linkToPage)
                dropdown.appendChild(line)
                // console.log(option)
                // dropdown.appendChild(option)
                console.log(dropdown)

                linkToPage.onclick = (function (val) {
                    return function () {
                        console.log("******************")
                        localStorage.setItem("Category", val)
                        window.open("catigorePage.html")
                    } })(categories[i])






                var proContainer = document.createElement("div")
                proContainer.setAttribute("class", "rowAbi")
                proContainer.setAttribute("id", "category" + i)
                divContainer.appendChild(proContainer)
            }
            getProducts()


        }
    }
    xhttp.open("GET", "https://fakestoreapi.com/products/categories", true)
    xhttp.send();

}


getCategory();



function getProducts() {
    var counter = 0
    var proCount1 = 0
    var proCount2 = 0
    var proCount3 = 0
    var proCount4 = 0


    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var data = JSON.parse(this.responseText)
            //    console.log("ttttttttttttt")
            //    debugger;


            for (var pro of data) {
                counter++
                //console.log(categories[i])
                if (pro.category === "electronics" && proCount1 < 3) {
                    proCount1++;
                    var productContainer = document.getElementById("category0")

                    var divPro = document.createElement("div");
                    divPro.classList.add("product", "textCenter")




                    var imgPro = document.createElement("img")
                    imgPro.setAttribute("src", pro.image)
                    imgPro.setAttribute("class", "p-img")
                    // imgPro.onclick atla3 l fo2 ll sora ; id bta3ha proImg
                    // imgPro.setAttribute("href","#proImg")

                    divPro.appendChild(imgPro)

                    var namePro = document.createElement("h5")
                    var txtNamePro = document.createTextNode(pro.title)
                    namePro.appendChild(txtNamePro)
                    divPro.appendChild(namePro)

                    var ratePro = document.createElement('div')
                    ratePro.setAttribute("class", "star")
                    // var getrate=document.createTextNode(pro.rating.rate);
                    // console.log(typeof(pro.rating.rate));
                    for (var i = 0; i <= pro.rating.rate; i++) {
                        var iconStar = document.createElement("i")
                        iconStar.classList.add("fa-solid", "fa-star")
                        ratePro.appendChild(iconStar)

                    }
                    // ratePro.appendChild(getrate);
                    divPro.appendChild(ratePro);
                    imgPro.onclick = (function (val, category) {
                        return function () {
                            category = "electronics"
                            console.log(val)
                            localStorage.setItem("Pro", val)
                            localStorage.setItem('pro.category', category)
                            window.open("productPage.html")

                        }

                    })(counter)
                    var pricePro = document.createElement("h4")
                    var txtPricePro = document.createTextNode(" $ " + pro.price)
                    pricePro.appendChild(txtPricePro)
                    divPro.appendChild(pricePro)

                    var btn = document.createElement("input")
                    btn.setAttribute("type", "button")
                    btn.setAttribute("value", "Add To Cart")
                    btn.classList.add("buyBtn")
                    btn.onclick = function () {
                        localStorage.setItem("Pro" + pro.id, pro.id)

                    }
                    divPro.appendChild(btn)


                    productContainer.appendChild(divPro)
                }



                else if (pro.category === "men's clothing" && proCount2 < 3) {
                    proCount2++;
                    var productContainer = document.getElementById("category2")

                    var divPro = document.createElement("div");
                    divPro.classList.add("product", "textCenter")




                    var imgPro = document.createElement("img")
                    imgPro.setAttribute("src", pro.image)
                    imgPro.setAttribute("class", "p-img")
                    // imgPro.onclick atla3 l fo2 ll sora ; id bta3ha proImg
                    // imgPro.setAttribute("href","#proImg")

                    divPro.appendChild(imgPro)

                    var namePro = document.createElement("h5")
                    var txtNamePro = document.createTextNode(pro.title)
                    namePro.appendChild(txtNamePro)
                    divPro.appendChild(namePro)

                    var ratePro = document.createElement('div')
                    ratePro.setAttribute("class", "star")
                    // var getrate=document.createTextNode(pro.rating.rate);
                    // console.log(typeof(pro.rating.rate));
                    for (var i = 0; i <= pro.rating.rate; i++) {
                        var iconStar = document.createElement("i")
                        iconStar.classList.add("fa-solid", "fa-star")
                        ratePro.appendChild(iconStar)

                    }
                    // ratePro.appendChild(getrate);
                    divPro.appendChild(ratePro);
                    imgPro.onclick = (function (val, category) {
                        return function () {
                            category = "men's clothing"
                            console.log(val)
                            localStorage.setItem("Pro", val)
                            localStorage.setItem('pro.category', category)
                            window.open("productPage.html")

                        }

                    })(counter)
                    var pricePro = document.createElement("h4")
                    var txtPricePro = document.createTextNode(" $ " + pro.price)
                    pricePro.appendChild(txtPricePro)
                    divPro.appendChild(pricePro)

                    var btn = document.createElement("input")
                    btn.setAttribute("type", "button")
                    btn.setAttribute("value", "Buy Now")
                    btn.classList.add("buyBtn")
                    btn.onclick = function () {
                        localStorage.setItem("Pro" + pro.id, pro.id)
                    }
                    divPro.appendChild(btn)


                    productContainer.appendChild(divPro)


                }

                else if (pro.category === "women's clothing" && proCount3 < 3) {
                    proCount3++;
                    var productContainer = document.getElementById("category3")

                    var divPro = document.createElement("div");
                    divPro.classList.add("product", "textCenter")




                    var imgPro = document.createElement("img")
                    imgPro.setAttribute("src", pro.image)
                    imgPro.setAttribute("class", "p-img")
                    // imgPro.onclick atla3 l fo2 ll sora ; id bta3ha proImg
                    // imgPro.setAttribute("href","#proImg")

                    divPro.appendChild(imgPro)

                    var namePro = document.createElement("h5")
                    var txtNamePro = document.createTextNode(pro.title)
                    namePro.appendChild(txtNamePro)
                    divPro.appendChild(namePro)

                    var ratePro = document.createElement('div')
                    ratePro.setAttribute("class", "star")
                    // var getrate=document.createTextNode(pro.rating.rate);
                    // console.log(typeof(pro.rating.rate));
                    for (var i = 0; i <= pro.rating.rate; i++) {
                        var iconStar = document.createElement("i")
                        iconStar.classList.add("fa-solid", "fa-star")
                        ratePro.appendChild(iconStar)

                    }
                    // ratePro.appendChild(getrate);
                    divPro.appendChild(ratePro);
                    imgPro.onclick = (function (val, category) {
                        return function () {
                            category = "women's clothing"
                            console.log(val)
                            localStorage.setItem("Pro", val)
                            localStorage.setItem('pro.category', category)
                            window.open("productPage.html")

                        }

                    })(counter)

                    var pricePro = document.createElement("h4")
                    var txtPricePro = document.createTextNode(" $ " + pro.price)
                    pricePro.appendChild(txtPricePro)
                    divPro.appendChild(pricePro)

                    var btn = document.createElement("input")
                    btn.setAttribute("type", "button")
                    btn.setAttribute("value", "Buy Now")
                    btn.classList.add("buyBtn")
                    btn.onclick = function () {
                        localStorage.setItem("Pro" + pro.id, pro.id)
                    }
                    divPro.appendChild(btn)


                    productContainer.appendChild(divPro)


                }

                else if (pro.category === "jewelery" && proCount4 < 3) {
                    proCount4++;
                    var productContainer = document.getElementById("category1")

                    var divPro = document.createElement("div");
                    divPro.classList.add("product", "textCenter")




                    var imgPro = document.createElement("img")
                    imgPro.setAttribute("src", pro.image)
                    imgPro.setAttribute("class", "p-img")
                    // imgPro.onclick atla3 l fo2 ll sora ; id bta3ha proImg
                    // imgPro.setAttribute("href","#proImg")

                    divPro.appendChild(imgPro)

                    var namePro = document.createElement("h5")
                    var txtNamePro = document.createTextNode(pro.title)
                    namePro.appendChild(txtNamePro)
                    divPro.appendChild(namePro)

                    var ratePro = document.createElement('div')
                    ratePro.setAttribute("class", "star")
                    // var getrate=document.createTextNode(pro.rating.rate);
                    // console.log(typeof(pro.rating.rate));
                    for (var i = 0; i <= pro.rating.rate; i++) {
                        var iconStar = document.createElement("i")
                        iconStar.classList.add("fa-solid", "fa-star")
                        ratePro.appendChild(iconStar)

                    }
                    // ratePro.appendChild(getrate);
                    divPro.appendChild(ratePro);
                    imgPro.onclick = (function (val, category) {
                        return function () {
                            category = "jewelery"
                            console.log(val)
                            localStorage.setItem("Pro", val)
                            localStorage.setItem('pro.category', category)
                            window.open("productPage.html")

                        }

                    })(counter)

                    var pricePro = document.createElement("h4")
                    var txtPricePro = document.createTextNode(" $ " + pro.price)
                    pricePro.appendChild(txtPricePro)
                    divPro.appendChild(pricePro)

                    var btn = document.createElement("input")
                    btn.setAttribute("type", "button")
                    btn.setAttribute("value", "Buy Now")
                    btn.classList.add("buyBtn")
                    btn.onclick = function () {
                        localStorage.setItem("Pro" + pro.id, pro.id)
                    }
                    divPro.appendChild(btn)


                    productContainer.appendChild(divPro)


                }
            }
        }







    }
    xhttp.open("GET", "https://fakestoreapi.com/products", true)
    xhttp.send();

}

