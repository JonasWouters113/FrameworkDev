let el = document.getElementsByTagName("html");
onLoad();

function switchTheme(){
    el[0].classList.toggle("theme-dark");
    el[0].classList.toggle("theme-light");
    let theme = el[0].classList.value;
    window.localStorage.setItem('theme', theme);
}

function onLoad(){
    let theme = window.localStorage.getItem('theme');
    if(theme == null){
        window.localStorage.setItem('theme', 'theme-dark');
        theme = 'theme-dark';
    }
    el[0].classList.add(theme);
}