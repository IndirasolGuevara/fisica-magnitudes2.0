//crea una lista para añadir los resultados
let listResultado = []
//while (true){
  // Función para convertir unidades de longitud
  //crea la funcion con las 3 variables
  function convertirLongitud(valor, unidadDeEntrada, unidadDeSalida) { 

      // Realizar la conversión
      //la constante resultado es igual al valor (numero aleatorio) * (la unidad selecionada aleatoriamente)
      //en el diccionario relaciones dividido la unidad de salida aleatoria encontrada en
      //el diccionario relaciones
      const resultado = (valor * relaciones[unidadDeEntrada]) / relaciones[unidadDeSalida];
      return resultado;
    }
    
    // Obtener una unidad de longitud aleatoria
    function obtenerUnidadAleatoria() { //crea la funcion
      //unidades es igual a las llaves de el diccionario
      const unidades = Object.keys(relaciones); 
      //numero aleatorio del largo de las llaves (cantidad de llaves)
      const indiceAleatorio = Math.floor(Math.random() * unidades.length);
      //devuelve el valor aleatorio de la variable unidades
      return unidades[indiceAleatorio];
    }
    
    // Generar un número aleatorio entre 1 y 100
    function generarNumeroAleatorio() {
      return Math.round(Math.random() * 100) * 100; //numero aleatorio
    }
    
    // Definir las relaciones de conversión para diferentes unidades de longitud en diccionario
    const relaciones = {
      milimetro: 0.001,
      centimetro: 0.01,
      decimetro: 0.1,
      metro: 1,
      decametro: 10,
      hectometro: 100,
      kilometro: 1000,
    };

    // Generar una unidad de entrada aleatoria y salida aleatorios
    const unidades = Object.keys(relaciones);
    const unidadDeEntrada = obtenerUnidadAleatoria();
    let unidadDeSalida = obtenerUnidadAleatoria();
    //se asegura de que sean diferentes
    while (unidadDeSalida === unidadDeEntrada) {
      //se vuelve a generar y se edita la variable hasta que sean distintas
      unidadDeSalida = obtenerUnidadAleatoria();
    }
    
    // Generar un número aleatorio para la conversión
    const numeroAleatorio = generarNumeroAleatorio();
    
    // Realizar la conversión

    const resultado = convertirLongitud(numeroAleatorio, unidadDeEntrada, unidadDeSalida);
    
    // Pide al usuario que convierta la unidad
    const respuestaUsuario = parseFloat(prompt(`Convierte ${numeroAleatorio} ${unidadDeEntrada} a ${unidadDeSalida}:`));
    
    // Verificar si la respuesta del usuario es correcta
    if (respuestaUsuario == resultado) {
      alert("¡Respuesta correcta!");
    } else {
      alert(`Respuesta incorrecta. La respuesta correcta es ${resultado}`);
    }
    listResultado.push(respuestaUsuario)
//}