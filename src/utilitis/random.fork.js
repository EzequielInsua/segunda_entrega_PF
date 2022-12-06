
process.on("message", cant => {
    let randoms = {}
    for (let i = 0; i < cant.cantidad; i++) {
        let  random = Math.random()*1000
        random = `${Math.round(random)}`
        randoms[random] = ++randoms[random] || 1 
    }
    process.send({randoms: randoms})
})

