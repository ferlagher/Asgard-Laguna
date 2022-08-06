const form = document.querySelector("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(form);
    fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => alert("Form successfully submitted"))
        .catch((error) => alert(error));
});