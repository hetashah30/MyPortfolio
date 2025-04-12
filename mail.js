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

    saveMessages(name, emailid, url, msgContent);
  
    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset form
    document.getElementById("contactForm").reset();
}

    // Save messages to Firebase
const saveMessages = (name, emailid, url, msgContent) => {
    var newContactForm = MyPortfolioDB.push();
    newContactForm.set({
        name: name,
        emailid: emailid,
        url: url,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
