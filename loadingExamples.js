$(document).ready(function () {
    loadData();
})

// Load the JSON data
function loadData() {
    var userMailID = "ujjwalPandey.aps@gmail.com"   //Find a way to change this name using this variable
    $.getJSON("Links_heads.json",
        function (jsonData) {
            let user = jsonData.filter(data => { if (data.mail_id === "ujjwalpandey.aps@gmail.com") return data; });
            setTimeout(() => {
                toggleLoader();
                addingLinksAtOnce(user[0]);
                // }, 800);
            }, 10);
        }
    );
}

// Add links in loop
function addingLinksAtOnce(userData) {
    console.log(userData);
    userData.WorkExamples.forEach(singleData => {
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

// hide the Loading circle
function toggleLoader() {
    $(".loader").toggle();
}