function getCategoryNavBar() {
    
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var categories = JSON.parse(this.responseText)
            //    console.log("ttttttttttttt")
            //    debugger;
            var dropdown = document.getElementById("drop");
            for (var i = 0; i < categories.length; i++) {
             
                var linkToPage = document.createElement("a")
                var txtLink = document.createTextNode(categories[i])
                linkToPage.appendChild(txtLink)
                var line = document.createElement("br")
                dropdown.appendChild(linkToPage)
                dropdown.appendChild(line)

                linkToPage.onclick = (function (val) {
                    return function () {
                        localStorage.setItem("Category", val)
                        window.open("catigorePage.html")
                    } })(categories[i])


            }


        }
    }
    xhttp.open("GET", "https://fakestoreapi.com/products/categories", true)
    xhttp.send();

}
getCategoryNavBar()