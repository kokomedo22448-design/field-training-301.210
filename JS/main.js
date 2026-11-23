// <!-- ===================== Malak ============================== -->

                        //  <!-- اكتبي هنا -->   

    // <!-- ===================== Malak ============================== -->

    // <!-- ===================== Mohamed ============================== -->

                           
let buttons = document.querySelectorAll(".menu > span");
let cards = document.querySelectorAll(".menu-card");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let category = button.textContent.trim().toLowerCase();

        cards.forEach(function(card) {

            let name = card.querySelector(".card-header span").textContent.trim().toLowerCase();

            if (category === "all") {
                card.style.display = "flex";
            }
            else if (
                (category === "breakfast" && name === "avocado toast") ||
                (category === "mains" && (name === "grilled chicken bowl" || name === "spicy pasta")) ||
                (category === "drinks" && name === "iced caramel latte")
            ) {
                card.style.display = "flex";
            }
            else {
                card.style.display = "none";
            }

        });

    });

}); 

    // <!-- ===================== Mohamed ============================== -->

    // <!-- ===================== Mary ============================== -->

                            // <!-- اكتبي هنا -->

    // <!-- ===================== Mary ============================== -->

    // <!-- ===================== Keryakous ============================== -->

                            //  <!-- اكتب هنا -->       

    // <!-- ===================== Keryakous ============================== --> 