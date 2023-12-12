function verificarFeedbackValido (fb) {
    const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"]

    let feedback = fb.toLowerCase()
    let listaFB = []
    
    feedbacks.forEach(element => {
        element = element.toLowerCase()
        listaFB.push(element)
    });

    if (feedback == "péssimo" || feedback == "ótimo" || listaFB.includes(feedback)) {
        return true
    }        
    
    return false
}

console.log(verificarFeedbackValido("Ótimo"))
console.log(verificarFeedbackValido("otimo"))  
console.log(verificarFeedbackValido("Péssimo"))
console.log(verificarFeedbackValido("Bom"))
console.log(verificarFeedbackValido("Nada"))
console.log(verificarFeedbackValido(""))