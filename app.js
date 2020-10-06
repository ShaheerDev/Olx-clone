const loadingbar = document.getElementById("loadingdiv");

setTimeout(function(){
    if(document.readyState == "complete"){
        document.getElementById("container").style.visibility = "visible" 
        loadingbar.style.display = "none"
    }else{
        alert("Internet is too slow")
    }  
}, 5000);

function getdata(){
    firebase.database().ref().on("child_added", function(snapshot){
        //Get all info of ad
        const snap = snapshot.val()
        const postname = snap.postname
        const postprice = "Rs." + snap.postprice
        const username = snap.username
        const usernumber = snap.usernumber
        const condition = snap.condition
        const description = snap.postdescription
        const category = snap.category
        const imageURL = snap.imageURL
        const whatsapplink = "https://wa.me/" + usernumber
        const identify = postname + postprice + username + usernumber + description + condition + category + imageURL 
        const allinfo = document.createElement("li")
        allinfo.innerHTML = identify
        //create elements
        var div = document.createElement("div")
        var img = document.createElement("img")
        var sdiv = document.createElement("div")
        var h5 = document.createElement("h5")
        var p = document.createElement("p")
        var h2 = document.createElement("h2")
        var btn = document.createElement("a")
        var h6 = document.createElement("h6")
        var h62 = document.createElement("h6")
        btn.href = whatsapplink
        div.setAttribute("class", "card")
        div.setAttribute("style", "width: 18rem;")
        img.setAttribute("class", "card-img-top")
        img.setAttribute("width", "128")
        img.setAttribute("height", "230")
        h5.innerHTML = postname
        p.innerHTML = description
        h2.innerHTML = postprice
        h6.innerHTML = "By: " + username
        h62.innerHTML = "By: " + username
        img.src = imageURL
        btn.innerHTML = "Chat With Seller"
        div.setAttribute("class", "floatleft")
        sdiv.setAttribute("class", "card-body")
        h5.setAttribute("class", "card-title")
        div.setAttribute("id", category)
        h62.setAttribute("class", "hidden")
        p.setAttribute("class", "card-text")
        btn.setAttribute("class", "chatButton")
        const changelist = document.getElementById("adlist")
        const lastin = changelist.lastChild;
        const listin = lastin.innerHTML;
        if(listin === identify){}else{
        var a = document.createElement("a")
        a.href = ""
        a.appendChild(div)
        div.appendChild(img)
        div.appendChild(sdiv)
        sdiv.appendChild(h5)
        sdiv.appendChild(p)
        sdiv.appendChild(h2)
        sdiv.appendChild(btn)
        sdiv.appendChild(h62)
        sdiv.appendChild(h6)
        changelist.appendChild(allinfo)
        document.getElementById("adposts").appendChild(div)
        }
     });
    }

    function search_ads() { 
        var word = document.getElementById("searchbar").value,
        queue = [document.body],
        curr
    ;
    while (curr = queue.pop()) {
        if (!curr.textContent.match(word)) continue;
        for (var i = 0; i < curr.childNodes.length; ++i) {
            switch (curr.childNodes[i].nodeType) {
                case Node.TEXT_NODE : // 3
                    if (curr.childNodes[i].textContent.match(word)) {
                        console.log("Found!");
                        console.log(curr);
                        curr.style.backgroundColor = "#FDFF47";
                        curr.scrollIntoView();
                        // you might want to end your search here.
                    }
                    break;
                case Node.ELEMENT_NODE : // 1
                    queue.push(curr.childNodes[i]);
                    break;
            }
        }
    }
    } 

   
