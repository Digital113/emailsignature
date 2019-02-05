function onFormSubmit() {
    var form = document.getElementById("form");

    // Get values from form
    var firstname = form.elements["firstname"].value;
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var title = form.elements["title"].value;
    var mobile = form.elements["mobile"].value;
    var phone = form.elements["phone"].value;

    // No control for now

    // Fill signature
    document.getElementById('signatureName').innerHTML = firstname + " " + name;
    document.getElementById('signatureEmail').innerHTML = email;
    document.getElementById('signatureEmail').setAttribute("href", "mailto:" + email);
    document.getElementById('signatureTitle').innerHTML = title;
    document.getElementById('signatureMobile').innerHTML = mobile;
    document.getElementById('signatureMobile').setAttribute("href", "tel:" + mobile.trim());
    document.getElementById('signaturePhone').innerHTML = phone;
    document.getElementById('signaturePhone').setAttribute("href", "tel:" + phone.trim());

    var urlToSave = "https://" + window.location.hostname + "?" + "firstname=" + firstname + "&name=" + name + "&email=" + email + "&title=" + title + "&mobile=" + mobile + "&phone=" + phone;
    document.getElementById('urlToSave').setAttribute("href", urlToSave);
}

function copyToClipboard() {
    /* Get the text field */
    var signatureHTML = document.getElementById("signature");
    var textareaForCopy = document.getElementById("selectedSignature");
    textareaForCopy.value = signatureHTML.innerHTML;

    /* Select the text field */
    // signatureHTML.select();

    //  Copy the text inside the text field 
    // document.execCommand( 'copy' );

    var dt = new clipboard.DT();
    dt.setData("text/html", signatureHTML.innerHTML);
    clipboard.write(dt);

    /* Alert the copied text */
    alert("Texte copié");
}

function preFillForm() {
    var params = {};
    if (location.search) {
        var parts = location.search.substring(1).split('&');

        var form = document.getElementById("form");
        for (var i = 0; i < parts.length; i++) {
            try {
                var param = parts[i].split('=');
                var key = param[0];
                var value = param[1];

                switch (key) {
                    case "firstname":
                        form.elements["firstname"].value = decodeURIComponent(value);
                        break;
                    case "name":
                        form.elements["name"].value = decodeURIComponent(value);
                        break;
                    case "email":
                        form.elements["email"].value = decodeURIComponent(value);
                        break;
                    case "title":
                        form.elements["title"].value = decodeURIComponent(value);
                        break;
                    case "mobile":
                        form.elements["mobile"].value = decodeURIComponent(value);
                        break;
                    case "phone":
                        form.elements["phone"].value = decodeURIComponent(value);
                        break;
                    default:
                        break;
                }
            } catch (error) {

            }
        }

    }

    // Now you can get the parameters you want like so:
    onFormSubmit();
}

window.onload = function() {
    preFillForm();
};