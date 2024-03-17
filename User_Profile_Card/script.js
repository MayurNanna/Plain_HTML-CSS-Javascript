
let userBox = document.getElementById("userBox");

function openinfo(){                                    //  To open the user profile card
    userBox.classList.remove("hide-details");
}

function closeinfo(){                                   //  To close the user profile card
    userBox.classList.add("hide-details");
}

function Submit(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    var inputValue1 = document.getElementById("name").value;
    var outputElement1 = document.getElementById("Oname");
    outputElement1.innerHTML = inputValue1;

    var inputValue2 = document.getElementById("Profession").value;
    var outputElement2 = document.getElementById("OProfession");
    outputElement2.innerHTML = inputValue2;

    var inputValue3 = document.getElementById("CName").value;
    var outputElement3 = document.getElementById("OCName");
    outputElement3.innerHTML = inputValue3;

    var inputValue4 = document.getElementById("CAddress").value;
    var outputElement4 = document.getElementById("OCAddress");
    outputElement4.innerHTML = inputValue4;

    var inputValue5 = document.getElementById("Xp").value;
    var outputElement5 = document.getElementById("OXp");
    outputElement5.innerHTML = inputValue5 + " years of experience";

    // Handle image upload
    var uploadedImage = document.getElementById("image").files[0];
    if (uploadedImage) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profileImage = document.getElementById("profileImage");
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(uploadedImage);
    }
}
