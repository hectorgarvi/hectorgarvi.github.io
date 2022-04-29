APUNTES JAVASCRIPT

- Cuidado con las palabras reservadas, no usarlas como variables.
- Para incluir comentarios en JavaScript se utilizará // para una línea o /* */ para varias.
<br>



- Igualdad estricta: Se denota con "===". Se comparan los 2 valores de cada lado de la igualdad y si no es estrictamente igual da como resultado "false". Ejemplo:<br>
'1' == 1 --> True.<br>
'1' === 1 --> False.<br>
Tipo caracter no es igual a tipo numérico.<br><br><br>

- <strong>Bicondicional</strong> <br>
Sintaxis:<br>
variable = (condicion)? instr1:instr2; <br>
Se le asigna a una variable una condicion, si esta se cumple, se ejecuta la instruccion 1, si no se cumple, se ejecuta la instruccion 2.<br>
Ejemplo:<br>
return (a > b)?a:b;

- <strong>*Funciones*:</strong>

 <p>Para crear una función que devuelva 2 valores, no podremos hacer return, ya que el return solo sirve para un valor</p>
<p>Lo que tendremos que hacer, será añadir dos variables más a los argumentos de la función</p>
<p>Ejemplo:<br>
 function ec2grado(a, b, c, sol1, sol2){} </p> Aunque sol1 y sol2 deben ser array, object o function, ya que este modo no sirve con primitivos.</p>
<p>Siendo a, b y c 3 numeros introducidos de teclado y sol1 y sol2 los 2 datos a devolver.</p>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

- - <p>Parámetros REST</p>
<p>Estos son variables que se utilizan para almacenar un número indeterminado de argumentos, es decir, un array sin límite.</p>
<p>Para crear un parámetro REST, tan solo tendremos que añadir en los parámetros de la función un parámetro con nombre "...nombreVariable"
</p>
<p>Ejemplo:</p>
function maximo(...numeros){<br>
    let max = -Infinity;<br>
    for (let i = 0; i < numeros.length; i++){<br>
        if (numeros[i] > max){<br>
            max = numeros[i];<br>
        }<br>
    }return max;<br>
}<br>

- - <p>Parámetros SPREAD</p>

- - <p>Callbacks</p>
- - <p>This</p>