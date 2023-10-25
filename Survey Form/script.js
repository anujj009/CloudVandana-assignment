function submitForm() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
        alert("Please fill out all fields.");
        return;
    }

    let message = `First Name: ${firstName}\n`;
    message += `Last Name: ${lastName}\n`;
    message += `Date of Birth: ${dob}\n`;
    message += `Country: ${country}\n`;
    message += `Gender: ${Array.from(gender, g => g.value)}\n`;
    message += `Profession: ${profession}\n`;
    message += `Email: ${email}\n`;
    message += `Mobile Number: ${mobile}\n`;

    alert("Survey Details:\n\n" + message);

    document.getElementById("surveyForm").reset();
}
