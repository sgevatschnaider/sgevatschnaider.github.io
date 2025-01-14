   Alucinaciones y LLMs  /\* VARIABLES DE COLOR Ajusta los valores hexadecimales a tu gusto. \*/ :root { --primary-color: #007BFF; /\* Azul principal \*/ --secondary-color: #0056b3; /\* Azul más oscuro \*/ --text-color: #333; /\* Texto base \*/ --background-color: #f5f5f5; /\* Fondo general \*/ --border-color: #ccc; /\* Bordes suaves \*/ --highlight-bg: #fff59d; /\* Color de resaltado para palabras clave \*/ } /\* ESTILOS GENERALES \*/ \* { box-sizing: border-box; } body { font-family: 'Roboto', Arial, sans-serif; line-height: 1.6; color: var(--text-color); margin: 0; padding: 20px; background-color: var(--background-color); } h1, h2, h3 { color: var(--primary-color); margin-top: 1em; margin-bottom: 0.6em; } p { margin-bottom: 1em; } /\* Clase para resaltar palabras clave (opcional) \*/ .highlight { background-color: var(--highlight-bg); font-weight: bold; padding: 0 4px; border-radius: 3px; } /\* Separadores (para imágenes u otros elementos) \*/ .separator { text-align: center; margin: 20px 0; clear: both; } /\* BOTONES COLLAPSIBLE \*/ .collapsible { background-color: var(--primary-color); color: #fff; cursor: pointer; padding: 12px 15px; border: none; border-radius: 5px; font-size: 1rem; text-align: left; width: 100%; transition: background-color 0.3s; margin-top: 15px; outline: none; box-shadow: 0 2px 3px rgba(0,0,0,0.15); position: relative; } .collapsible:hover { background-color: var(--secondary-color); } .collapsible::after { content: "▼"; position: absolute; right: 15px; } .collapsible.active::after { content: "▲"; } /\* CONTENIDO PLEGABLE \*/ .content { overflow: hidden; max-height: 0; transition: max-height 0.3s ease; margin-top: 5px; padding-left: 15px; border-left: 3px solid var(--primary-color); background-color: #fff; box-shadow: inset 0 2px 3px rgba(0,0,0,0.05); border-radius: 5px; padding-right: 15px; } .collapsible.active + .content { max-height: 2000px; /\* Suficientemente grande para mostrar todo el contenido \*/ margin-bottom: 1em; } /\* WIDGET DE IDIOMA \*/ .language-widget { margin-bottom: 20px; text-align: center; } .language-widget h3 { margin-bottom: 10px; } .language-widget ul { list-style: none; margin: 0; padding: 0; display: flex; justify-content: center; gap: 10px; } .language-widget li { margin: 0; } .language-widget a { display: inline-block; padding: 8px 12px; background-color: var(--primary-color); color: #fff; text-decoration: none; border-radius: 4px; transition: background-color 0.3s; } .language-widget a:hover { background-color: var(--secondary-color); } /\* BOTONES DE ENLACE (Referencias) \*/ .link-buttons { margin-top: 30px; } .link-buttons a { display: inline-block; margin-right: 10px; padding: 10px 15px; background-color: var(--primary-color); color: #fff; text-decoration: none; border-radius: 4px; transition: background-color 0.3s, transform 0.3s; } .link-buttons a:hover { background-color: var(--secondary-color); transform: scale(1.05); }

[![Gif de Ejemplo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJd_0ujI0ECr2I-r5cSAe1sbpqsGjAZeMeQTRUqFC7_kaCpnMp8bfjX47AAHTHSMbB7hHLS01ccBAVgSKhj28o9s8ZE5lceOB51IGQgKsgwqvx4a1W3GBGQsxy4lCooQWCqv2BMvWzXKcFzbUAt8kj0va9ggUs6XYQZZ8dTxX38b1sbw1Q9Hun5eCecfE/s320/20250113_1958_Mystical%20Data%20Labyrinths_simple_compose_01jhgy86t8eph9yne675yf4c1t.gif)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJd_0ujI0ECr2I-r5cSAe1sbpqsGjAZeMeQTRUqFC7_kaCpnMp8bfjX47AAHTHSMbB7hHLS01ccBAVgSKhj28o9s8ZE5lceOB51IGQgKsgwqvx4a1W3GBGQsxy4lCooQWCqv2BMvWzXKcFzbUAt8kj0va9ggUs6XYQZZ8dTxX38b1sbw1Q9Hun5eCecfE/s320/20250113_1958_Mystical%20Data%20Labyrinths_simple_compose_01jhgy86t8eph9yne675yf4c1t.gif)

### 🌐 Cambiar Idioma

*   [🇪🇸 Español](https://economiayetica.blogspot.com/2025/01/alucinaciones-y-llms-variables-de-color.html)
*   [🇬🇧 English](https://economiayetica.blogspot.com/2025/01/hallucinations-and-llms-color-variables.html)

Alucinaciones y LLMs
====================

1) Alucinaciones y LLMs

Un problema de los Modelos de Lenguaje Grande (LLMs) son las alucinaciones. Estas se refieren a la generación de contenido falso, fabricado o inconsistente con los datos con los que se ha entrenado el modelo. Todos los que utilizamos estos sistemas hemos observado cómo puede generar afirmaciones que suenan correctas, pero no tienen sustento.

2) Mitigación de las Alucinaciones

Para afrontar el problema de las alucinaciones se han implementado diversas técnicas como:

*   **Chain-of-Thought Prompting (Cadena de razonamiento)**. Esta técnica guía al modelo para que haga explícito su razonamiento paso a paso antes de llegar a una respuesta.
*   **Self-Consistency (Autoconsistencia)**. Genera múltiples respuestas a una misma pregunta utilizando cadenas de razonamiento (Chain-of-Thought) y selecciona la respuesta más común o consistente entre las generadas.
*   **Retrieval-Augmented Generation (RAG)**. Combina el modelo de lenguaje con un sistema de recuperación de información. Antes de generar una respuesta, el modelo busca datos relevantes en una base de conocimiento externa.

Si bien estas técnicas reducen el nivel de las alucinaciones, el problema persiste. La pregunta es si es posible eliminar totalmente las alucinaciones, lo cual lleva al trabajo de investigación _“LLMs Will Always Hallucinate, and We Need to Live With This”_ donde se da una respuesta negativa, considerando a las alucinaciones un elemento estructural de estos sistemas.

[![Mitigación de Alucinaciones](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfJ9TndI5upzwgBx4q7sB0TJHfPI-TbqS8k8bjKLYuLvGDqchuii1JX0EmJHA4wWek1SsBunO4sykx52q-daEXsbpxm77utE9iEdNTP1CrAR1eVbgOHUsjHFsXOlfhzuicx4qcroT4Mc0LkZmzLPvshPbd0F53qsA6Gv7hfNxxhuvvXk7HchhmeVJF0NU/s320/mitigaci%C3%B3n%20alucinaciones.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfJ9TndI5upzwgBx4q7sB0TJHfPI-TbqS8k8bjKLYuLvGDqchuii1JX0EmJHA4wWek1SsBunO4sykx52q-daEXsbpxm77utE9iEdNTP1CrAR1eVbgOHUsjHFsXOlfhzuicx4qcroT4Mc0LkZmzLPvshPbd0F53qsA6Gv7hfNxxhuvvXk7HchhmeVJF0NU/s1384/mitigaci%C3%B3n%20alucinaciones.png)

3) Alucinaciones como un problema estructural

En “_LLMs Will Always Hallucinate, and We Need to Live With This_” se busca establecer que las alucinaciones en los modelos de lenguaje grande (LLMs) no son errores esporádicos, sino una característica inevitable debido a las limitaciones matemáticas y lógicas inherentes de estos sistemas.

**¿Cuáles son estas limitaciones matemáticas y lógicas?**  
Estos investigadores utilizan la Teoría de la Computación, el Teorema de Incompletitud de Gödel y problemas indecidibles como el Halting Problem para argumentar que ninguna mejora en datos o en mecanismos de verificación puede eliminar completamente estas alucinaciones.

Estas “alucinaciones estructurales”, como lo define este paper, no se deben a errores en los datos de entrenamiento o fallos en la implementación: son intrínsecas al sistema y no pueden ser eliminadas completamente.

4) Gödel y las alucinaciones de las LLMs

El Teorema de Incompletitud de Gödel establece que en cualquier sistema formal suficientemente poderoso (como los modelos matemáticos que subyacen a los LLMs) se presentan proposiciones que no pueden ser demostradas ni refutadas dentro del sistema.

Los modelos de lenguaje grande funcionan como sistemas formales: procesan datos para generar salidas basadas en reglas lógicas y probabilísticas. Sin embargo, debido a su naturaleza, comparten las limitaciones señaladas por Gödel:

La prueba del texto se basa en lo siguiente:  
_Suposición inicial:_ Supongamos que existe un conjunto de datos de entrenamiento D que contiene todos los hechos verdaderos posibles. Se introduce al conjunto una proposición A que dice:  
“Existen hechos verdaderos que no están en D”.

En ese caso, si esta afirmación es falsa, no existen hechos verdaderos fuera de D. Sin embargo, esto implica que D es falsa porque incluye A.  
En el caso de que A fuera verdadera, entonces existen hechos fuera de D que son verdaderos, lo que refuta la idea de que D sea completo.

5) El Problema de Halting (Halting Problem)

La segunda herramienta utilizada para demostrar la inevitabilidad de las alucinaciones estructurales es el Problema de Halting, uno de los más fundamentales e indecidibles en la teoría de la computación.

Dado un programa P y una entrada x, ¿es posible determinar, en un tiempo finito, si P se detendrá (es decir, terminará su ejecución) o continuará ejecutándose indefinidamente?

Turing demostró que no existe un algoritmo general que pueda decidir, para todos los programas y entradas posibles, si un programa se detendrá o no. Esto implica que los sistemas computacionales no pueden prever su propio comportamiento en todas las circunstancias.

Los modelos de lenguaje, como sistemas computacionales complejos basados en transformadores, comparten la naturaleza de las máquinas de Turing. Esto implica que el problema de la parada conlleva consecuencias como:

*   **Indecidibilidad del límite de generación:** Los LLMs no pueden determinar con certeza cuántos tokens generarán en respuesta a una entrada dada.
*   **Imprevisibilidad del contenido generado:** Debido a la indecidibilidad del halting, los modelos no pueden prever el contenido exacto que generarán. Esto aumenta la probabilidad de respuestas incorrectas o alucinadas.
*   **Ausencia de verificación previa:** Al no poder predecir sus propias salidas antes de generarlas, los LLMs no pueden validar la veracidad o consistencia de su respuesta antes de producirla.

6) Alucinaciones y el problema de encontrar una aguja

Este problema aborda la capacidad (o incapacidad) de los LLMs para seleccionar la información correcta dentro de un vasto conjunto de datos.

El problema plantea:  
Dado un gran conjunto de datos (el pajar) y una solicitud de información específica (la aguja), ¿puede un modelo de lenguaje recuperar de manera confiable y precisa esa aguja?

El texto demuestra que este problema es indecidible, lo que significa que no existe un método que garantice que un modelo siempre recuperará la información correcta; lo cual profundiza el problema de las alucinaciones.

[![Alucinaciones Intrínsecas](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU18Jbsq_qf2lIFQ_LLoAMwEbOqK5Bmn-M6-otnl-Bz3oeIwc0Tj8yCDoayc1coLhCNqUzsxeJUl7JuMxzwiMPF4DQp4CbNGzSESTOycGK-lvdQ1wPeStjqlhEfJ2HT481Kk66CnS3UCW-N4BN_cmsmSGpUtKK-dFjAeE-zoJoSutOEpsMFDXAkpEQ-IA/s320/alucinaciones%20intr%C3%ADnsecas.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU18Jbsq_qf2lIFQ_LLoAMwEbOqK5Bmn-M6-otnl-Bz3oeIwc0Tj8yCDoayc1coLhCNqUzsxeJUl7JuMxzwiMPF4DQp4CbNGzSESTOycGK-lvdQ1wPeStjqlhEfJ2HT481Kk66CnS3UCW-N4BN_cmsmSGpUtKK-dFjAeE-zoJoSutOEpsMFDXAkpEQ-IA/s1384/alucinaciones%20intr%C3%ADnsecas.png)

[LLMs Will Always Hallucinate](https://arxiv.org/pdf/2409.05746)

// Seleccionamos todos los botones con la clase "collapsible" const collapsibles = document.querySelectorAll(".collapsible"); collapsibles.forEach(button => { button.addEventListener("click", function () { // Alternamos la clase "active" en el botón this.classList.toggle("active"); // El siguiente elemento es el contenido plegable const content = this.nextElementSibling; if (content.style.maxHeight) { // Si está desplegado, lo plegamos content.style.maxHeight = null; } else { // De lo contrario, lo desplegamos content.style.maxHeight = content.scrollHeight + "px"; } }); });