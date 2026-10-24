const firebaseConfig = {
    apiKey: "AIzaSyBs3fFYhdsGmqPoTDVHQ5mkloELzNkdltY",
    authDomain: "myportfolio-5fd92.firebaseapp.com",
    databaseURL: "https://myportfolio-5fd92-default-rtdb.firebaseio.com",
    projectId: "myportfolio-5fd92",
    storageBucket: "myportfolio-5fd92.firebasestorage.app",
    messagingSenderId: "306522589884",
    appId: "1:306522589884:web:3ed8b6718199b5964b9eb9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
var MyPortfolioDB = firebase.database().ref('MyPortfolio');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("user_name");
    var emailid = getElementVal("user_email");
    var url = getElementVal("user_website_url");
    var msgContent = getElementVal("user_message");

    // Basic validation: check if any field is empty
    if (name === "" || emailid === "" || msgContent === "") {
        alert("Please fill out all required fields!!");
        return; // Stop further execution
    }
    
    saveMessages(name, emailid, url, msgContent);
  
    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 2000);

    // Reset form
    document.getElementById("contactForm").reset();
}

    // Save messages to Firebase
const saveMessages = async (name, emailid, url, msgContent) => {
    try {
        await MyPortfolioDB.push({
            name: name,
            emailid: emailid,
            url: url,
            msgContent: msgContent
        });

        document.querySelector(".alert").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 2000);

        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error saving contact message:", error);
        alert("Unable to send your message. Please try again.");
    }
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
