// Función para solicitar un número y validar que esté en el rango de 1 a 20

const solicitarNumero = () => {
    let numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
    if (numero >= 1 && numero <= 20) {
        return numero;
    } else {
        alert('Número fuera del rango.'); // Al colocar un número erroneo a los que se piden dara un alert.
        return null;
    }
};

// Función para calcular el factorial de un número

const factorial = (n) => {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado; //retorna el resultado
};

// Función principal que muestra las tablas de multiplicar y los factoriales

const mostrarTyF = () => {
    let numero = solicitarNumero();
    if (numero !== null) {
        for (let i = 1; i <= numero; i++) {
            for (let j = 1; j <= numero; j++) {
                console.log(`${j} x ${i} = ${j * i}`);
            }
            console.log(`Factorial de ${i} es: ${factorial(i)}`); // Nos muestra los valores
        }
    }
};

// Llamada a la función principal

mostrarTyF();