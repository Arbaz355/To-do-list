if ('serviceWorker' in navigator){
         navigator.serviceWorker.register('sw.js').then(registration => {
            console.log("SW registred!");
            console.log(registration);
        }).catch (error =>{
    console.log("Sw registration failed");
    console.log(error);
});
}
        