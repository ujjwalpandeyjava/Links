$(document).ready(function () {

    /*
        Will work in this sequence
        - Load the JSON data
        - as soon the data get loaded hide loader
        - add links in loop
    */

    loadData();

})




// Load the JSON data
function loadData() {
    var userMailID = "ujjwalPandey.aps@gmail.com"   //Find a way to change this name using this variable
    $.getJSON("Links_heads.json",
        function (jsonData) {
            let user = jsonData.filter(data => { if (data.maild_id === "ujjwalpandey.aps@gmail.com") return data; })[0]
            console.log('we got the data ', user);
            //Data loaded in the variable "user"
            // Now hide the loader
            console.log("sleeping loader will hide in 1.5 seconds");
            setTimeout(() => {
                hideLoader();
                console.log("loaded hided, now adding links");
                //Adding links
                addingLinks(user);
            }, 1500);
        }
    );
}
// Add links in loop
function addingLinks(userData) {
    userData.WorkExamples.forEach(singleData => {
        console.log(singleData);
        let dataToBeAdded = `
        <div class="links">
            <div>
                <div class="image">work img</div>
                <div class="details">jquery added data Example title (as a link)<br />(IsResponsive)</div>
            </div>
        </div>`
        $(".main").append(dataToBeAdded);
    });
    $(".addLinksBeforeMe").hide();
}

// hide the Loading circle
function hideLoader() {
    $(".loader").toggle();
    /* setTimeout(() => {
        $(this).toggle();
    }, 3000); */
}