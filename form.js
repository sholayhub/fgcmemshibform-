document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".mem");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = {
            name: document.getElementById("Name").value,
            email: document.getElementById("Email").value,
            phoneNumber: document.getElementById("Phone Number").value,
            gender: document.getElementById("Gender").value,
            dateOfBirth: document.getElementById("Date of Birth").value,
            address: document.getElementById("Address").value,
            MembershipNo: document.getElementById("Membership No").value,
        };

        console.log("Form Data:", formData);

        // Display the data or send it to the server
        alert(`Thank you, ${formData.name}, for your submission!`);
    });
});
