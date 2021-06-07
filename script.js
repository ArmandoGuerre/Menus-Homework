counter = 0;


var tabs;

window.addEventListener('load', () => {
    tabs = document.getElementsByClassName('tab');

    document.getElementById('home').addEventListener('click', () => {
        switch_tab('home_butt');
    })

    document.getElementById('about').addEventListener('click', () => {
        switch_tab('about_butt');
    })

    document.getElementById('interact').addEventListener('click', () => {
        switch_tab('interact_butt');
    })

    document.getElementById('increase').addEventListener('click', (e) => {
        ++counter;
        document.getElementById('counter_label').innerHTML = 'Counter: ' + counter;
    })
});


function followup() {
    for (let i = 0; i < tabs.length; ++i) {
        tabs.item(i).style.display = 'none';
    };
}

function switch_tab(tab_name) {
    followup();
    document.getElementById(tab_name).style.display = 'block';
}