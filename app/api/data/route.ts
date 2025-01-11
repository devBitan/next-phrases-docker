import { NextResponse } from "next/server";

// Arrays de sujetos y predicados para generar frases aleatorias.
const subjects = ["The dog", "The turtle", "My friend", "Sebastian", "Bitan", "Abogagnster", "esthebitan"];
const predicates = ["runs fast", "is very wise", "loves coding", "sings poorly", "hates coding", "loves to code", "runs slowly"];

// Controlador para manejar solicitudes GET.
export async function GET() {
    // Selecciona valores aleatorios de los arrays.
    const subject = randomValue(subjects);
    const predicate = randomValue(predicates);

    // Variables para almacenar el sujeto y predicado finales.
    let finalSubject = subject;
    let finalPredicate = predicate;

    // Agrega un calificativo si el sujeto tiene más de 8 caracteres.
    if (subject.length > 8) {
        finalSubject = `${subject.trim()} the intelligent`;
    }

    // Añade un énfasis si el predicado contiene la palabra 'coding'.
    if (predicate.includes('coding')) {
        finalPredicate = `${predicate}!`;
    }

    // Crea la frase completa combinando el sujeto y predicado finales.
    const completeSentence = `${finalSubject} ${finalPredicate}`;

    // Retorna la frase como respuesta JSON.
    return NextResponse.json({ completeSentence });
}

// Función para seleccionar un valor aleatorio de un array.
function randomValue(array: string[]) {
    const randomItem = Math.floor(Math.random() * array.length); // Genera un índice aleatorio.
    return array[randomItem]; // Retorna el elemento correspondiente.
}
