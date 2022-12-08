function getProducts()
{
    var counter=0

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
            if(pro.category==="electronics"){
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
                window.open("http://127.0.0.1:5500/productPage.html")
            }

        })(counter)

        var pricePro=document.createElement("h4")
        var txtPricePro=document.createTextNode(" $ "+ pro.price)
        pricePro.appendChild(txtPricePro)
        divPro.appendChild(pricePro)

        var btn=document.createElement("input")
         btn.setAttribute("type","button")
         btn.setAttribute("value","Buy Now")
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




















// function getProduct()
// {
    
//     var xhttp=new XMLHttpRequest()
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4&&this.status==200)
//         {
//             //hana 3awez a2olo l product l id=x hat l sora bta3to azai b2a???
//             var proId= data.id=x;
//            var data=JSON.parse(this.responseText)
//            var imgPro= document.getElementById("proImg")
//            imgPro.setAttribute("src",proId.image)
           
//            var categoryName= document.getElementById("catName")
//            categoryName=document.createTextNode(proId.category)

//            var getRate= document.getElementById("proRate")
//             getrate=document.createTextNode(pro.rating.rate);
//            console.log(typeof(pro.rating.rate));
//            for(var i=0;i<=getrate;i++){
//                var iconStar =document.createElement(i)
//                iconStar.classList.add(fa-solid,fa-star)
//                ratePro.appendChild(iconStar)
   
//            }
//            ratePro.appendChild(getrate);
//            divPro.appendChild(ratePro);
        
        
//            var proName= document.getElementById("proName")
//            proName=document.createTextNode(proId.title)

//            var proPrice= document.getElementById("proPrice")
//            categoryName=document.createTextNode(" $ "+ proId.price)
           
//            var proDescription= document.getElementById("proDescription")
//            proDescription=document.createTextNode(proId.description)
         
//     }
// }
//     xhttp.open("GET","https://fakestoreapi.com/products",true)
//     xhttp.send();
     
// }
// getProducts();

