
$(document).ready(function () {
    console.log("document is loaded");
    $('#btnSubmit').click(function () {
        //console.log("yes button is clicked");
        //$('input[type="file"]').change(function (e) {
        //    var fileName = e.target.files[0].name;
        //    alert('The file "' + fileName + '" has been selected.');
        //});
        var form_data = new FormData();

        //Found this simple way of accessing 'file' type data using jquery on stackoverflow()
        /* https://stackoverflow.com/questions/54396101/how-to-post-file-along-with-form-data-to-mvc-controller-using-ajax */
        var file = document.getElementById("files").files[0];
        form_data.append("image", file);

/*        var myFile = $('#image')
        console.log(myFile);
        var fileUpload = $("#image").get(0);
        var files = fileUpload.files;
*/
        // Create FormData object
        //var fileData = new FormData();

        // Looping over all files and add it to FormData object
        // form_data.append("image", myFile);
        // console.log(files);

        form_data.append("ID", $("#ID").val());
        form_data.append("message", $("#message").val());
        form_data.append("email", $("#email").val());


        //This below code is used to display form data entries, as we
        // can't display them by just logging form_data with Console.log(form_data), we have 
        //to use entries() for it
        for (var key of form_data.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
      
        
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