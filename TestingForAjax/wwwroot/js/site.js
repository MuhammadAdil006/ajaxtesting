
$(document).ready(function () {
    console.log("document is loaded");
    $('#btnSubmit').click(function () {
        //console.log("yes button is clicked");
        //$('input[type="file"]').change(function (e) {
        //    var fileName = e.target.files[0].name;
        //    alert('The file "' + fileName + '" has been selected.');
        //});
        var form_data = new FormData();
        var myFile = $('#image')
        console.log(myFile);
        //var fileUpload = $("#image").get(0);
        //var files = fileUpload.files;

        // Create FormData object
        //var fileData = new FormData();

        // Looping over all files and add it to FormData object
        form_data.append("image", myFile);
        //console.log(files);

        form_data.append("ID", $("#ID").val());
        form_data.append("message", $("#message").val());
        form_data.append("email", $("#email").val());
      
      
        
        console.log(form_data);
        $.ajax({
            type: "POST",
            url: "/Home/Save",
            contentType: false,
            processData: false,
            data: form_data,
         
            success: function (data) {
                alert(data.message);
            },
            error: function () {
                alert("Error occured!!")
            }
        });
    });
})