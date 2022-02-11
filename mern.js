//get elements

const acc_head = document.querySelectorAll('.accordion-header');

acc_head.forEach(data => {
    data.addEventListener('click', function () {

        data.classList.toggle('active');

        if (data.classList.contains('active')) {
            data.nextElementSibling.style.height = data.nextElementSibling.scrollHeight + 'px';
        } else {
            data.nextElementSibling.style.height = '0'
        };

        acc_head.forEach(item => {
            if (item != this) {
                item.classList.remove('active');
                item.nextElementSibling.style.height = '0'
            } else {

            };
        });
    });
});


// tab start

//get element

const tab_header = document.querySelectorAll('.new-tab .tab-content ul a');
const tabPane = document.querySelectorAll('.new-tab .tab-pane');
console.log(tabPane);

tab_header.forEach(data => {

    data.addEventListener('click', function (e) {
        e.preventDefault();

        tab_header.forEach(item => {
            item.classList.remove('active');
        });
        data.classList.add('active');

        
        const tab_pane = document.querySelector(this.getAttribute('href'));
        tabPane.forEach(data =>{
            data.classList.remove('active');
        })

        tab_pane.classList.add('active');
    });



});

// normal tab end
// theme option start

// get element

const left_menu = document.querySelectorAll('.new-xtheme .xtheme-content .xtheme-body ul a');
const tab_pane2 = document.querySelectorAll('.new-xtheme .tab-pane');

console.log(tab_pane2);

left_menu.forEach(data =>{

    data.addEventListener('click', function(e){

        e.preventDefault();
        const tab_pane1 = document.querySelector(this.getAttribute('href'));
       tab_pane2.forEach(item =>{
           item.classList.remove('active')
       })
       tab_pane1.classList.add('active')
    });
});