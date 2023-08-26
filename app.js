let pop_up = document.querySelector('.pop_up'),
    ok_btn = document.querySelector('.ok_btn'),
    btn = document.querySelector('.btn'),
    slider_item = document.querySelectorAll('.slider_item');

    btn.addEventListener('click', function(){
        pop_up.classList.add('show');
    })

    ok_btn.addEventListener('click', function(){
        pop_up.classList.remove('show');
    })

        
        function next() {


            if ( slider_item[0].classList.contains("active")) {

                 slider_item[1].classList.add("active");
                 slider_item[0].classList.remove("active");

            } else if ( slider_item[1].classList.contains("active")) {

                 slider_item[2].classList.add("active");
                 slider_item[1].classList.remove("active");

            } else if ( slider_item[2].classList.contains("active")) {

                slider_item[3].classList.add("active");
                slider_item[2].classList.remove("active");

            } else if (slider_item[3].classList.contains("active")) {

                 slider_item[4].classList.add("active");
                 slider_item[3].classList.remove("active");

            }
            else if ( slider_item[4].classList.contains("active")) {

                 slider_item[0].classList.add("active");
                 slider_item[4].classList.remove("active");

            }


       }

        setInterval(next, 4000);




