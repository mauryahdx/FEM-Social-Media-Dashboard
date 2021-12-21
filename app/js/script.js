const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

function setDarkTheme(){
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem("colormode", "dark");
    
}

function setLightTheme(){
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem("colormode", "light");
   
}



if(localStorage.getItem("colormode")){
   const theme = localStorage.getItem("colormode").toString()
   console.log(theme)
   if(theme == 'light')
   {
       
       setLightTheme()
       light.checked=true;
   } else {
       
       setDarkTheme();
       dark.checked=true;
   }
  // theme.checked = true;
}

toggle.addEventListener('click', () => {
if (dark.checked){
    setDarkTheme()
    
}

if (light.checked){
    setLightTheme()
    
}

})


