const valid =
        document.getElementById('valid');

const validation =
        document.getElementById('validation');


const closebtn =
        document.getElementById('closebtn');



            validation.addEventListener('click' , 
            function() {

                valid.setAttribute('open', true);
            })

            closebtn.addEventListener('click',
            function () { 
                
            valid.setAttribute('open')} );