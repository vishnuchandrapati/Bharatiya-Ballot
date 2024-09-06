let d=document.querySelector("#district");
let c=document.querySelector("#constituency");


districts.forEach((val)=>{
    let opt=document.createElement("option");
    opt.innerText=val;
    opt.setAttribute("name",`${val}-mla`);
    d.append(opt);
})

d.addEventListener('change', function() {
    let selectedDistrict = this.value;
    let pres_cons=document.querySelectorAll("#constituency option");
    pres_cons.forEach((val)=>{
        c.remove(val);
    })
    let opt=document.createElement("option");
    opt.innerText="-- Select your constituency --";
    opt.style.selected;
    opt.style.disabled="true";
    c.append(opt);

    obj[selectedDistrict].forEach((val)=>{
        let opt=document.createElement("option");
        opt.innerText=val;
        c.append(opt);
    });
});
c.addEventListener('change',function(){
    let selectedConstituency = this.value;
    let y = document.querySelector("#ycp");
    url=searchImages(`chandragiri-ycp-mla`);
    url.then((val)=>{
        console.log(val);
        y.setAttribute("src",val);
    })
})

// To fetch the url
        async function searchImages(name) {
            const apiKey = 'AIzaSyA65IV1WJfT2fY3CBTOjnXUvMPz4aDVCa4';
            const cx = 'f5d63eb0c962c4eb2';
            const endpoint = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(name)}&cx=${cx}&searchType=image&key=${apiKey}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const imageUrl = data.items[0].link;
                    // Return the URL of the first image result
                    return imageUrl;
                }
                else{
                    console.log("no images found");
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }    
          const length = Object.keys(ycp_candidates).length;
          console.log(length); // This will print the length of the object
