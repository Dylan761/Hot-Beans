document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    let fullname = document.getElementById("fullname").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let job = document.getElementById("job").value;
    let why = document.getElementById("why").value;
    let cv = document.getElementById("cv").files[0];
 
    let cvName = cv ? cv.name : "No file selected";
 
    document.getElementById("result").innerHTML = `
        <h2>Application Submitted</h2>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Job Opening:</strong> ${job}</p>
        <p><strong>Reason:</strong> ${why}</p>
        <p><strong>CV Attached:</strong> ${cvName}</p>
    `;
 
    alert("Your application has been submitted!");
});