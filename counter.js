let counter = document.getElementById('counter')
const incrementar = document.getElementById('icr')
const resetear = document.getElementById('rst')
const decrementar = document.getElementById('dcr')
const value = counter.innerHTML

let n = 0

decrementar.addEventListener("click", () => {
    n--;
    counter.textContent = n;
})

incrementar.addEventListener("click", () => {
    n++;
    counter.textContent = n;
})

resetear.addEventListener("click", () => {
    n = 0
    counter.textContent = n;
})