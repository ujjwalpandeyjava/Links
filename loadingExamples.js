$(document).ready(function () {
    loadData();
})

// Load the JSON data
function loadData() {
    var userMailID = "ujjwalPandey.aps@gmail.com"   //Find a way to change this name using this variable
    $.getJSON("Links_heads.json",
        function (jsonData) {
            let user = jsonData.filter(data => { if (data.maild_id === "ujjwalpandey.aps@gmail.com") return data; })[0]
            // console.log('we got the data ', user);   
            //Data loaded in the variable "user" Now hide the loader
            setTimeout(() => {
                hideLoader();
                //Adding links choose any one
                addingLinksAtOnce(user);
                // addingLinksAtInterval
            }, 1150);
        }
    );
}

// Add links in loop
function addingLinksAtOnce(userData) {
    userData.WorkExamples.forEach(singleData => {
        // console.log(singleData);
        let dataToBeAdded = `
        <div class="links">
            <div>
                <div class="image">
                    <img src="examplesPreviewImages/${(singleData.imageNameWithExtension === "none") ? "noImageFound.jpg" : (singleData.imageNameWithExtension) ? singleData.imageNameWithExtension : "noImageFound.jpg"}" alt="work preview">
                </div>
                <div class="details"><a href="${singleData.exampleLink}" target="_blank">${singleData.title}</a><br /><span>Is Responsive :
                        <i>${(singleData.responsive) ? "Yes" : "No"}</span></i>
                </div>
            </div>
        </div>`
        $(".main").append(dataToBeAdded);
    });
    $(".addLinksBeforeMe").hide();
}
function addingLinksAtInterval(userData) {
    //  with it the links will show one by one with a very minute interval of 200ms.
    /*
        Code writing
        --> run a forEach loop on "userData.WorkExamples" and for every data in the loop will call function with the data at a setInterval or setTimeout in the loop,
        the function called will do the all work of - loading json data -hiding loader - and adding it to the html.
    */
}



// hide the Loading circle
function hideLoader() {
    $(".loader").toggle();
}