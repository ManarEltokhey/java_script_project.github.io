function getProducts()
{
    var counter=0
    var category =localStorage.getItem("Category")


    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
           var data=JSON.parse(this.responseText)
        //    console.log("ttttttttttttt")
        //    debugger;

           var divContainer=document.getElementById("productContainer")

           for (var pro of data) {
            counter++
            if(pro.category===category){
        var divPro=document.createElement("div");
         divPro.classList.add("product","textCenter")



        var imgPro= document.createElement("img")
        imgPro.setAttribute("src",pro.image)
        imgPro.setAttribute("class","p-img")
        divPro.appendChild(imgPro)

        var namePro=document.createElement("h5")
        var txtNamePro=document.createTextNode(pro.title)
        namePro.appendChild(txtNamePro)
        divPro.appendChild(namePro)

        var ratePro=document.createElement('div')
        ratePro.setAttribute("class","star")
         var getrate=document.createTextNode(pro.rating.rate);
        // console.log(typeof(pro.rating.rate));
        for(var i=0;i<=pro.rating.rate;i++){
            var iconStar =document.createElement("i")
            iconStar.classList.add("fa-solid","fa-star")
            ratePro.appendChild(iconStar)

        }
        // ratePro.appendChild(getrate);
        divPro.appendChild(ratePro);
        divPro.onclick=(function (val){
            return function (){
                 console.log(val)
                localStorage.setItem("Pro",val)
                window.open("productPage.html")
            }

        })(counter)

        var pricePro=document.createElement("h4")
        var txtPricePro=document.createTextNode(" $ "+ pro.price)
        pricePro.appendChild(txtPricePro)
        divPro.appendChild(pricePro)

        var btn=document.createElement("input")
         btn.setAttribute("type","button")
         btn.setAttribute("value","Add To Cart")
         btn.classList.add("buyBtn")
         btn.onclick=function(){
         localStorage.setItem("Pro"+pro.id,pro.id)
         }
        divPro.appendChild(btn)


        productContainer.appendChild(divPro)
            }
        }
    }







    }
    xhttp.open("GET","https://fakestoreapi.com/products",true)
    xhttp.send();

}
getProducts();




















