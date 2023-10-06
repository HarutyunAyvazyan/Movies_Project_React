

   export const scrollUp =() => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    
   export const scrollDownVideo =() => {
    window.scrollBy({
        top:800,
        behavior:"smooth"
    })
    console.log(window)
}
