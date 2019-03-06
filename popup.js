//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $(".actual-alabama").click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $(".reveal-school").toggleClass("visible");
        });
});
