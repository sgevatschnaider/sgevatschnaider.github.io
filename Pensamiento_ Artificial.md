# Pensamiento Artificial: Cómo Razonan los Modelos de Lenguaje

*Abrir la Caja Negra: Grafos de Atribución y Razonamiento en Modelos de Lenguaje*

## Índice

1. Introducción  
2. Marco conceptual: Interpretabilidad mecánica  
3. Del supergrafo al subgrafo: El modelo como red dinámica  
4. Construyendo el microscopio: CLTs y modelo de reemplazo  
5. Visualizando el razonamiento: Grafos de atribución  
6. Usando el microscopio: Análisis de casos reales  
7. ¿Los LLMs piensan? Lo que revelan los grafos  
8. Limitaciones actuales y futuro del campo  
9. Conclusión: hacia una ciencia de la IA interpretable  
10. Definiciones técnicas  
11. Referencias

---

## 1. Introducción

En los últimos años, los modelos de lenguaje han demostrado capacidades sorprendentes, desde responder preguntas con precisión hasta escribir poesía o resolver acertijos. Pero una pregunta clave persiste: ¿cómo “piensan” estos modelos? ¿Son simplemente predictores de la próxima palabra, o existen mecanismos internos más complejos operando bajo la superficie?

Dos trabajos recientes de Anthropic nos ofrecen una nueva lente para explorar esta cuestión. El primero, *"Circuit Tracing"*, presenta un enfoque novedoso para abrir la caja negra de los modelos mediante la construcción de grafos de atribución, herramienta que permite rastrear cómo fluye la información en el interior del modelo. El segundo, *"On the Biology of a Language Model"*, aplica esta metodología para revelar comportamientos emergentes que van mucho más allá de la autorregresión simple.

En esta entrada se exploran ambos trabajos como partes de una misma narrativa: el desarrollo de una poderosa metodología y su aplicación para descubrir que los modelos de lenguaje, lejos de ser autómatas ciegos, pueden evidenciar señales de razonamiento estructurado, planificación textual e incluso simulación del pensamiento.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-Uytdizaj-782Vc2GTaVzIW_wQBK2fUL4HGUZDaSIK5loBwx6wqA4z1WOx3X1-WRZzu_V5_aeelr_6KCwcbaYUQUOktvXmF25I47GHcFQ45TkM0pBkCNlQSCGQPc8kID3wT1TDhyphenhypheng3Z4ByzOZa9u_Rp7YE3dP3xtfK6uYvqS7pq2DxXTk7cOIa-_z1Jg/s320/Introducci%C3%B3n.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-Uytdizaj-782Vc2GTaVzIW_wQBK2fUL4HGUZDaSIK5loBwx6wqA4z1WOx3X1-WRZzu_V5_aeelr_6KCwcbaYUQUOktvXmF25I47GHcFQ45TkM0pBkCNlQSCGQPc8kID3wT1TDhyphenhypheng3Z4ByzOZa9u_Rp7YE3dP3xtfK6uYvqS7pq2DxXTk7cOIa-_z1Jg/s320/Introducci%C3%B3n.png" alt="Introducción – Muestra la idea inicial del tema" width="320" height="320" />
  </a>
</p>

---

## 2. Marco conceptual: Interpretabilidad mecánica

Cuando hablamos de interpretar un modelo de lenguaje solemos centrarnos en ver qué palabras o partes del input son relevantes o cómo responde ante cambios en el prompt. Sin embargo, la interpretabilidad mecánica propone ir mucho más allá: busca entender los mecanismos internos reales que el modelo utiliza para razonar, de forma análoga a cómo la neurociencia estudia los circuitos del cerebro.

En lugar de tratar al modelo como una caja negra que convierte entradas en salidas, se analiza como un sistema dinámico compuesto por features, flujos de activación y relaciones causales internas. La pregunta ya no es simplemente “¿qué predice?”, sino “¿cómo lo calcula?”.

Este enfoque no solo abre nuevas puertas a la comprensión técnica, sino que también sienta las bases para construir modelos de IA más transparentes, depurables y confiables.

---

## 3. Del supergrafo al subgrafo: El modelo como red dinámica

Los modelos de lenguaje modernos, como los transformadores, pueden concebirse como redes computacionales altamente conectadas. En cada capa, cada token influye en muchos otros mediante mecanismos de atención, y las redes feed-forward (MLPs) mezclan información de manera compleja.

Si representamos todas las rutas de activación posibles, obtenemos un **supergrafo computacional**: un grafo dirigido y denso que abarca millones de conexiones. Sin embargo, en la práctica, solo se activa una pequeña parte de este supergrafo para un prompt específico. Esa porción activa se denomina **grafo de atribución**: un subgrafo que representa las rutas efectivas de cálculo utilizadas por el modelo para generar su predicción, incluyendo únicamente los nodos (features, embeddings, logits) y las conexiones lineales relevantes.

Esta visión del supergrafo al subgrafo permite analizar el “pensamiento” del modelo como un flujo estructurado de decisiones y abre la posibilidad de intervenir en sus mecanismos internos para evaluar el impacto de modificar una ruta específica.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiopOWgMU5duqEbGTORMw8d5b-WRlZPOEEEhtcKmptJgb80iYvbUMOO6j04vTQZ4JSzF4sLyux2jgAmJsTxxlhJrM_G74PmvfaJiQF1vC3zmd-Jj8rb-M1W4dwG8kMTHa9IzRr0yPjV5GmH4WsOQCBP9tnU-Nl8T7xCudO-jz8NxYfpr7_G1Rx-oT7z7lQ/s320/supergrafo.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiopOWgMU5duqEbGTORMw8d5b-WRlZPOEEEhtcKmptJgb80iYvbUMOO6j04vTQZ4JSzF4sLyux2jgAmJsTxxlhJrM_G74PmvfaJiQF1vC3zmd-Jj8rb-M1W4dwG8kMTHa9IzRr0yPjV5GmH4WsOQCBP9tnU-Nl8T7xCudO-jz8NxYfpr7_G1Rx-oT7z7lQ/s320/supergrafo.png" alt="Supergrafo computacional y subgrafo de atribución" width="320" height="320" />
  </a>
</p>

---

## 4. Construyendo el microscopio: CLTs y modelo de reemplazo

Para observar con precisión el flujo interno de información en un modelo de lenguaje, los autores desarrollan una herramienta central: los **Cross-Layer Transcoders (CLTs)**. Estas redes reemplazan las MLPs originales—que suelen ser difíciles de interpretar por su naturaleza polisémica—por un conjunto de features escasas y más comprensibles.

Cada CLT actúa como una unidad de traducción: toma las activaciones del *residual stream*, las convierte en una combinación lineal escasa de features, y escribe en múltiples capas posteriores del modelo. Esto ofrece mayor flexibilidad que una MLP tradicional, que opera exclusivamente dentro de su propia capa.

Con los CLTs entrenados se construye un **modelo de reemplazo**: un modelo funcional que utiliza las mismas capas de atención que el original, pero en el que todas las MLPs se sustituyen por estas nuevas unidades interpretables. Aunque este modelo no es idéntico al original, logra replicar su comportamiento con gran fidelidad en numerosos casos.

Este modelo de reemplazo actúa como un microscopio computacional, permitiendo observar y rastrear cómo fluyen los efectos de cada feature—algo imposible de lograr con las MLPs convencionales. Además, permite congelar determinados componentes (como atención y normalización) para facilitar un análisis lineal de las rutas de influencia.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif907gwSaJaKxPERJlPodc5oB_LTvKTEs5jOUkD0klPjth3L6emMUVx64UEV_xT6tS_-9O7QMlty2__-Z4QLjFLoglTjWGBT4c4kSgx975O7N6Kt-HNmKGKRtPPI-geiyu9ur1WaTVput7q7xO3H1oOBQfMjelNMUgJ2dvG_SuKZxcuGPHQzeRNBRQw4Y/s320/CLTs.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEif907gwSaJaKxPERJlPodc5oB_LTvKTEs5jOUkD0klPjth3L6emMUVx64UEV_xT6tS_-9O7QMlty2__-Z4QLjFLoglTjWGBT4c4kSgx975O7N6Kt-HNmKGKRtPPI-geiyu9ur1WaTVput7q7xO3H1oOBQfMjelNMUgJ2dvG_SuKZxcuGPHQzeRNBRQw4Y/s320/CLTs.png" alt="Modelo de reemplazo" width="320" height="320" />
  </a>
</p>

---

## 5. Visualizando el razonamiento: Grafos de atribución

Una vez construido el modelo de reemplazo con CLTs, se introduce el **grafo de atribución**, una herramienta que representa de forma visual y cuantitativa el flujo de información que conduce a una predicción específica.  
Cada nodo representa una unidad activa (ya sea un embedding, una feature de los CLTs o un logit de salida), y cada arista indica la contribución lineal entre estas unidades.

Lo más destacado es que, gracias a la estructura del modelo de reemplazo, estas contribuciones son lineales y se pueden cuantificar con precisión. Esto convierte al grafo de atribución en un circuito explicativo del modelo, permitiendo seguir el "cableado interno" que justifica cada decisión.

Además, al ser extraído del supergrafo global, el grafo se poda para mostrar únicamente los caminos relevantes, facilitando la interpretación de decisiones complejas como cadenas causales de activación.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbYk13NBlKnOBFdpVff2EytR0ftL22YCpNfNlLllQYkSZMLqD3apufKQS8_IE0mEqfC2m7DqMovTT3EObkRgPpth77ADJg1jix-gh098hrkPZo_vRDOG17vZXro36uu5SaCrZelUkwP85O7tyO1okGDIyNAI425bSSxkvCvsl7ATpIj9N4uLztPe2LACA/s320/atribution%20graph.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbYk13NBlKnOBFdpVff2EytR0ftL22YCpNfNlLllQYkSZMLqD3apufKQS8_IE0mEqfC2m7DqMovTT3EObkRgPpth77ADJg1jix-gh098hrkPZo_vRDOG17vZXro36uu5SaCrZelUkwP85O7tyO1okGDIyNAI425bSSxkvCvsl7ATpIj9N4uLztPe2LACA/s320/atribution%20graph.png" alt="Grafo de atribución" width="320" height="320" />
  </a>
</p>

---

## 6. Usando el microscopio: Análisis de casos reales

Con el modelo de reemplazo y los grafos de atribución, los autores aplican su enfoque a diversos casos reales, demostrando que es posible observar, explicar y validar cómo un modelo de lenguaje toma decisiones en tareas complejas.

**Caso 1: Formación de acrónimos**  
Ante un prompt como “The National Digital Analytics Group (N”, el modelo predice “DAG)”. El grafo de atribución revela que ciertas features se activan al detectar palabras clave como “Digital” y “Group”, mostrando cómo se generan los acrónimos.

**Caso 2: Memoria factual**  
Al presentarse una frase como “Michael Jordan plays the sport of…”, el modelo predice “basketball”. El grafo muestra que primero se activa una feature relacionada con “Michael Jordan”, la cual, a su vez, activa otra que asocia al jugador con su deporte característico, representando un razonamiento en dos pasos.

**Caso 3: Suma de dos dígitos**  
Para un prompt como “calc: 36 + 59 =”, el modelo acierta con “95”. El grafo revela que features especializadas (valor aproximado, dígito final, resultado exacto) se combinan para producir la respuesta correcta, ilustrando un proceso de razonamiento numérico emergente.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiBsfl7OAYfa5OI_1vFXeHfJrD7P3zFCKc7H6rPNsIIC36X-_b5NdP02diD9Y9b7mWLH3vdXtFLDekl8L8SqLjQy1wXiQ6tMj4gbeyMuXP2dJxM-5uPyxUFAQmsoLL-2JJhjmHAQM-y7e66ODjrxZdvSdWvW-XJLYLB-X_9sh1qXD3sx1m_voOLo9crzA/s1024/Real-World%20Case%20Analysis%20in%20Interpretable%20AI.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiBsfl7OAYfa5OI_1vFXeHfJrD7P3zFCKc7H6rPNsIIC36X-_b5NdP02diD9Y9b7mWLH3vdXtFLDekl8L8SqLjQy1wXiQ6tMj4gbeyMuXP2dJxM-5uPyxUFAQmsoLL-2JJhjmHAQM-y7e66ODjrxZdvSdWvW-XJLYLB-X_9sh1qXD3sx1m_voOLo9crzA/s1024/Real-World%20Case%20Analysis%20in%20Interpretable%20AI.png" alt="Análisis de casos reales" width="320" height="320" />
  </a>
</p>

---

## 7. ¿Los LLMs piensan? Lo que revelan los grafos

Uno de los hallazgos más provocadores es que, al analizar los grafos de atribución, emergen comportamientos que van más allá de la autorregresión simple.  
Los modelos no solo predicen la próxima palabra basándose en la anterior, sino que parecen planificar, anticipar y construir internamente ideas estructuradas.

Por ejemplo, en tareas poéticas—donde la feature asociada a la palabra “rabbit” se activa antes de completar la línea—se evidencia que el modelo ajusta otras partes del texto para encajar con la rima elegida. De manera similar, en tareas lógicas o de diagnóstico se observan activaciones intermedias que indican la convergencia de múltiples hipótesis hacia una decisión final.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK0G-u2-ZauhBt-18kf3MGTqrMv5T3hz6E9d8mN1StYkii7B_K7yEV8j8zBqbS72JFj7NC_WfZM_MBrm-amujcUBx0Ob6bf0tTrKfzDVRWJpL_DSSHz7epMPX6nGlpBir5sLVLI2oEihhrdUOFWPIp_kLba-gShvzXPjGqRNWZh0QJFO-mU0zKrovxQlw/s418/feature.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK0G-u2-ZauhBt-18kf3MGTqrMv5T3hz6E9d8mN1StYkii7B_K7yEV8j8zBqbS72JFj7NC_WfZM_MBrm-amujcUBx0Ob6bf0tTrKfzDVRWJpL_DSSHz7epMPX6nGlpBir5sLVLI2oEihhrdUOFWPIp_kLba-gShvzXPjGqRNWZh0QJFO-mU0zKrovxQlw/s418/feature.png" alt="Ejemplo de activaciones clave" width="320" height="320" />
  </a>
</p>

---

## 8. Limitaciones actuales y futuro del campo

Aunque los resultados son prometedores, los autores reconocen limitaciones técnicas y conceptuales:

- **Limitación 1:** Cobertura parcial del modelo, al basarse en un modelo de reemplazo.  
- **Limitación 2:** Componentes no modelados, como la dinámica de atención (QK), que es crucial en los transformers.  
- **Limitación 3:** Generalización y escalabilidad, ya que entrenar CLTs y construir grafos requiere recursos significativos.  
- **Limitación 4:** Interferencia en las relaciones globales al analizar múltiples prompts.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiScJwn49XMiF7AIah_-v4PzSBSV8LZTPKx-GV5gw9bNGnKdAR2nNxKTiGQU2RQjcaGJoBQKgdX8lY6uegwC6HzYR-eJU4ftp_zHnYXzCXGSfG71Cjr9qbrTKlAVFQB__miTlFtZf_hmbccoR2PsRmLGjarU2uQHEXVv7sqFl2I8jhOBTll6mykJBTeUro/s1024/Current%20limitations.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiScJwn49XMiF7AIah_-v4PzSBSV8LZTPKx-GV5gw9bNGnKdAR2nNxKTiGQU2RQjcaGJoBQKgdX8lY6uegwC6HzYR-eJU4ftp_zHnYXzCXGSfG71Cjr9qbrTKlAVFQB__miTlFtZf_hmbccoR2PsRmLGjarU2uQHEXVv7sqFl2I8jhOBTll6mykJBTeUro/s1024/Current%20limitations.png" alt="Limitaciones del modelo" width="320" height="320" />
  </a>
</p>

---

## 9. Conclusión: hacia una ciencia de la IA interpretable

Los dos trabajos de Anthropic marcan un avance clave hacia una IA que se pueda auditar desde su interior. Con el uso de modelos de reemplazo y grafos de atribución, se demuestra que es posible abrir la caja negra de los modelos de lenguaje y observar, casi como con un microscopio, cómo fluye la información y se construyen las predicciones.

Más allá de sus capacidades externas, estos estudios revelan que los LLMs desarrollan circuitos internos organizados, activando conceptos intermedios, construyendo planes lingüísticos y mostrando un comportamiento que se asemeja al razonamiento. Esto desafía la visión tradicional de que únicamente “predicen la siguiente palabra”.

Este enfoque tiene un valor científico, práctico y ético, ya que facilita la auditoría de decisiones, la detección de sesgos y la construcción de herramientas para la intervención y seguridad en modelos avanzados.

---

## 10. Definiciones técnicas

| **Concepto**                   | **Definición**                                                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **Interpretabilidad mecánica** | Estudio del funcionamiento interno de los modelos de IA, identificando cómo y por qué producen sus salidas.                        |
| **Grafo de atribución**        | Subgrafo dirigido que muestra el flujo causal de información entre features, tokens y logits en el modelo.                        |
| **Feature**                    | Unidad interpretable del modelo, construida como una combinación lineal escasa de neuronas con patrón claro.                        |
| **Cross-Layer Transcoder (CLT)** | Red que reemplaza MLPs y genera features que escriben en múltiples capas, facilitando la interpretación.                             |
| **Modelo de reemplazo**        | Versión modificada del modelo original en la que se sustituyen las MLPs por CLTs para análisis interpretativo.                     |
| **Modelo congelado**           | Configuración en la que se fijan la atención y la normalización para facilitar el análisis lineal.                                    |
| **Linealidad de atribución**   | Propiedad que permite representar los efectos entre features como contribuciones aditivas.                                        |
| **Supergrafo computacional**   | Conjunto de todas las rutas de cómputo posibles dentro del modelo para todos los prompts.                                          |
| **Perturbación e intervención** | Técnicas para modificar o inhibir features y observar cambios que validen relaciones causales.                                     |

---

## 11. Referencias

<button class="reference-button" onclick="toggleReferences('refs-es')">Mostrar/Ocultar Referencias</button>

<div id="refs-es" class="references">
  <p>
    **Circuit Tracing: Revealing Computational Graphs in Language Models**  
    [https://transformer-circuits.pub/2025/attribution-graphs/methods.html](https://transformer-circuits.pub/2025/attribution-graphs/methods.html)
  </p>
  <p>
    **On the Biology of a Large Language Model**  
    [https://transformer-circuits.pub/2025/attribution-graphs/biology.html](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
  </p>
</div>
