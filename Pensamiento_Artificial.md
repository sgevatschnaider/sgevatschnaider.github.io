---
title: "Pensamiento Artificial: Cómo Razonan los Modelos de Lenguaje"
permalink: /pensamiento-artificial/
layout: default
---

# Inglés

[![English](https://img.shields.io/badge/Language-English-red)](https://economiayetica.blogspot.com/2025/04/pensamiento-artificial-como-razonan-los_1.html)

# Pensamiento Artificial: Cómo Razonan los Modelos de Lenguaje

## Abrir la Caja Negra: Grafos de Atribución y Razonamiento en Modelos de Lenguaje

### Índice
1. Introducción  
2. Marco conceptual: Interpretabilidad mecánica  
3. Del supergrafo al subgrafo: el modelo como red dinámica  
4. Construyendo el microscopio: CLTs y modelo de reemplazo  
5. Visualizando el razonamiento: grafos de atribución  
6. Usando el microscopio: análisis de casos reales  
7. ¿Los LLMs piensan? Lo que revelan los grafos  
8. Limitaciones actuales y futuro del campo  
9. Conclusión: hacia una ciencia de la IA interpretable  
10. Definiciones técnicas  
11. Referencias  

---

### 1. Introducción

<div align="center">
  
![Introducción (ES) / Introduction (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-Uytdizaj-782Vc2GTaVzIW_wQBK2fUL4HGUZDaSIK5loBwx6wqA4z1WOx3X1-WRZzu_V5_aeelr_6KCwcbaYUQUOktvXmF25I47GHcFQ45TkM0pBkCNlQSCGQPc8kID3wT1TDhyphenhypheng3Z4ByzOZa9u_Rp7YE3dP3xtfK6uYvqS7pq2DxXTk7cOIa-_z1Jg/s320/Introducci%C3%B3n.png "Introducción (ES) / Introduction (EN) - Muestra la idea inicial del tema")

</div>

En los últimos años, los modelos de lenguaje han demostrado capacidades sorprendentes, desde responder preguntas con precisión hasta escribir poesía o resolver acertijos. Pero una pregunta clave persiste: ¿cómo “piensan” estos modelos? ¿Son simplemente predictores de la próxima palabra, o hay mecanismos internos más complejos operando bajo la superficie?

Dos trabajos recientes de Anthropic nos ofrecen una nueva lente para explorar esta cuestión. El primero, *"Circuit Tracing"*, presenta un enfoque novedoso para abrir la caja negra de los modelos mediante la construcción de grafos de atribución, una herramienta que permite rastrear cómo fluye la información dentro del modelo. El segundo, *"On the Biology of a Language Model"*, aplica esta herramienta para revelar comportamientos emergentes que van mucho más allá de la autorregresión simple.

En esta entrada exploraremos ambos trabajos como partes de una misma narrativa: el desarrollo de una metodología poderosa y su aplicación para descubrir que los modelos de lenguaje, lejos de ser autómatas ciegos, pueden mostrar señales de razonamiento estructurado, planificación textual e incluso simulación de pensamiento.

---

<div align="center">

![Interpretabilidad mecánica (ES) / Mechanical interpretability (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGsZZ2olal53Bu12_Zq337vTOWJTQn6XkBhoTHLJLL7a7jCVJen7ZoJuJBjBlK180kYLx5Og2VTO4npRh2R3kr6ABIgN5-ZNHCZgXCjrJfMKkeVyxzojy_IfQ0N8W8bZ2uP0uG7VxoS2FRhZO9WPMRkDrH1o6RsWc_KZuSMofQhnTx2nk65Dg7yN_rCQc/s320/interpretabilidad.png "Interpretabilidad mecánica (ES) / Mechanical interpretability (EN) - Representa el análisis interno de un modelo")

</div>

### 2. Marco conceptual: Interpretabilidad mecánica
Cuando hablamos de interpretar un modelo de lenguaje, solemos pensar en ver qué palabras activas, qué partes del input son importantes, o cómo responde ante cambios en el prompt. Sin embargo, la interpretabilidad mecánica propone ir mucho más allá: busca entender los mecanismos internos reales que el modelo utiliza para razonar, de forma análoga a cómo la neurociencia estudia los circuitos del cerebro.

En lugar de tratar al modelo como una caja negra que convierte inputs en outputs, la interpretabilidad mecánica lo analiza como un sistema dinámico compuesto por features, flujos de activación y relaciones causales internas. La pregunta ya no es solo “¿qué predice?”, sino: “¿cómo lo calcula?”.

Este enfoque no solo abre una nueva puerta al entendimiento técnico, sino que también sienta las bases para construir modelos de IA más transparentes, depurables y confiables.

---

<div align="center">

![Supergrafo computacional y subgrafo de atribución (ES) / Computational supergraph and attribution subgraph (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiopOWgMU5duqEbGTORMw8d5b-WRlZPOEEEhtcKmptJgb80iYvbUMOO6j04vTQZ4JSzF4sLyux2jgAmJsTxxlhJrM_G74PmvfaJiQF1vC3zmd-Jj8rb-M1W4dwG8kMTHa9IzRr0yPjV5GmH4WsOQCBP9tnU-Nl8T7xCudO-jz8NxYfpr7_G1Rx-oT7z7lQ "Supergrafo y subgrafo de atribución")

</div>

### 3. Del supergrafo al subgrafo: el modelo como red dinámica
Los modelos de lenguaje modernos, como los transformadores, pueden entenderse como redes computacionales altamente conectadas. En cada capa, cada token puede influir en muchos otros mediante mecanismos de atención, mientras que las redes feed-forward (MLPs) mezclan información de manera compleja. Si representamos todas las posibles rutas de activación, obtenemos un **supergrafo computacional**: un grafo dirigido y denso, en el que la información fluye a través de millones de conexiones posibles.

Pero en la práctica, solo una pequeña parte de ese supergrafo está activa para un prompt específico. Esa porción activa es lo que Anthropic llama el **grafo de atribución**: un subgrafo que representa las rutas efectivas de cálculo que el modelo usó para generar su predicción. Este subgrafo incluye solo los nodos activos (features, embeddings, logits) y las conexiones lineales relevantes entre ellos.

Esta visión del supergrafo al subgrafo permite analizar el pensamiento del modelo como un flujo estructurado de decisiones, y abre la puerta a intervenir directamente en sus mecanismos internos para ver qué pasa si modificamos una ruta específica.

---

<div align="center">

![Del modelo original al modelo de reemplazo (ES) / From the original model to the replacement model (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit9JfOgOySH_lCTg4ZFHGgQpzsNS4_MGxmAPcEh3IfDxCshMJD57affU5n8ShpRoU2q_zCTXQ-B-Po643sBBhmv8hM15qAPHntSa7Wz_67-7TepKJuoZ7oie2MkaHujMsExrw2DoN1RRY4wYlXJvHlkR2ffZqJJqohxDcuT-pf808xLYibIeWaqnDFTLA/s320/modelo%20de%20reemplazo.png "Representa la transición hacia un modelo más interpretable")

</div>

### 4. Construyendo el microscopio: CLTs y modelo de reemplazo
Para poder observar con precisión el flujo interno de información en un modelo de lenguaje, los autores del paper desarrollan una herramienta central: los **Cross-Layer Transcoders (CLTs)**. Estas redes sustituyen las MLPs originales del modelo, que suelen ser difíciles de interpretar debido a sus neuronas polisémicas, por un conjunto de features escasas y más comprensibles.

Cada CLT se comporta como una unidad de traducción: toma las activaciones del residual stream, las convierte en una combinación lineal escasa de features, y luego escribe hacia múltiples capas posteriores del modelo. Esto le da más flexibilidad que una MLP tradicional, que solo opera dentro de su capa.

Con los CLTs entrenados, los autores construyen un **modelo de reemplazo**: un modelo funcional que utiliza exactamente las mismas capas de atención que el original, pero reemplaza todas sus MLPs por estas nuevas unidades interpretables. Aunque este modelo no es idéntico al original, logra replicar su comportamiento con alta fidelidad en una buena parte de los casos.

Este modelo reemplazado actúa como un microscopio computacional, permitiendo observar y rastrear cómo fluyen los efectos de cada feature, algo imposible con las MLPs tradicionales. Además, permite congelar ciertos componentes del cómputo, como la atención y la normalización, facilitando así el análisis de los caminos de influencia de forma estrictamente lineal.

---

<div align="center">

![Grafo de atribución (ES) / Attribution graph (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3spzDIjjTsV5CYrhCAjGiPemAvRCCPv4C2UgjaUyokWkoc5ebaFo3gTDlKMyyg7LZJ_JWmAchMFWDcKvhviQ80Gmmk0uSzIorJ88NyDxk7ux0TCcIczL7rJb_Mx3Yrf3YkZIroTz0oaQMXCg-9UAU-fjTZyXXITaPbdlDIDFI7H84wXaz98yIf6tHMXo/s320/grafo%20de%20atribuci%C3%B3n.png "Visualiza cómo fluye la información dentro del modelo")

</div>

### 5. Visualizando el razonamiento: grafos de atribución
Una vez construido el modelo de reemplazo con CLTs, los autores introducen su herramienta más poderosa: el **grafo de atribución**. Este grafo es una representación visual y cuantitativa del flujo de información que lleva a una predicción concreta. En él, cada nodo representa una unidad activa como un embedding de token, una feature del CLT o un logit de salida, y cada arista representa una contribución lineal entre esas unidades.

Lo más destacable es que estas contribuciones son lineales por diseño: gracias a la estructura del modelo de reemplazo, es posible calcular con precisión cuánto influye una feature sobre otra. Esto convierte al grafo de atribución en una especie de circuito explicativo del modelo, donde se puede seguir el “cableado interno” que justifica cada decisión.

Además, al tratarse de un subgrafo extraído del supergrafo del modelo original, este grafo está podado para mostrar solo los caminos relevantes, permitiendo interpretar decisiones complejas como si fueran cadenas causales de activaciones.

---

<div align="center">

![Microscopio (ES) / Microscope (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6gZAysK6lHybvxyXRPvaV6GKOLQ4sRR1y2Pqf-tz6KDN-tcuWOvBdyRLgjGdU1VRg5R96C-WV5BXw96oWSuscMZ2Eyve8ORAYa23R0nXY0W2ph5VS8HHXNsiQ1PZmlB7pj5Pnsa-X6oEEkE3vleykbME1GSH9hzrZo0U9u-5mYr8IxvG7VDVbYzsJM6o/s407/microscopio.png "Permite analizar y rastrear rutas internas de cómputo")

</div>

### 6. Usando el microscopio: análisis de casos reales
Con el modelo de reemplazo y los grafos de atribución en mano, los autores aplican su enfoque a casos reales y diversos, demostrando que es posible observar, explicar y validar cómo un modelo de lenguaje toma decisiones en tareas complejas.

**Caso 1: Formación de acrónimos**  
Ante un prompt como “The National Digital Analytics Group (N”, el modelo predice “DAG)”. El grafo de atribución revela cómo features específicas se activan al detectar palabras clave como “Digital” y “Group”, mostrando cómo estas activaciones fluyen para generar el acrónimo.

**Caso 2: Memoria factual**  
Cuando se presenta una frase como “Michael Jordan plays the sport of…”, el modelo predice “basketball”. El grafo muestra que primero se activa una feature relacionada con “Michael Jordan”, la cual a su vez activa otra que asocia al jugador con su deporte característico, representando un razonamiento en dos pasos.

**Caso 3: Suma de dos dígitos**  
En un prompt como “calc: 36 + 59 =”, el modelo acierta con “95”. El grafo revela que especializadas features (e.g., “valor aproximado”, “dígito final” o “resultado exacto”) se combinan para producir la respuesta correcta. Este ejemplo ilustra un razonamiento modular y numérico emergente.

---

### 7. ¿Los LLMs piensan? Lo que revelan los grafos
Uno de los hallazgos más provocadores es que, al observar los grafos de atribución, emergen comportamientos que van más allá de la autorregresión simple. Los modelos no solo predicen la próxima palabra en función de la anterior, sino que parecen planificar, anticipar y construir internamente ideas estructuradas.

Por ejemplo, en tareas poéticas —como en una rima donde la feature asociada a la palabra “rabbit” se activa antes de completar la línea— se evidencia que el modelo ajusta otras partes del texto para encajar con la rima elegida. Asimismo, en tareas lógicas o de diagnóstico, se observan activaciones intermedias que indican múltiples hipótesis convergiendo hacia una decisión final.

<div align="center">

![Feature (ES) / Feature (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK0G-u2-ZauhBt-18kf3MGTqrMv5T3hz6E9d8mN1StYkii7B_K7yEV8j8zBqbS72JFj7NC_WfZM_MBrm-amujcUBx0Ob6bf0tTrKfzDVRWJpL_DSSHz7epMPX6nGlpBir5sLVLI2oEihhrdUOFWPIp_kLba-gShvzXPjGqRNWZh0QJFO-mU0zKrovxQlw/s418/feature.png "Ejemplo de activaciones clave en el razonamiento del modelo")

</div>

---

<div align="center">

![Limitaciones del modelo (ES) / Model limitations (EN)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipuPk9R4s0g-EPW0285u1NYadqmvO8Pq9wYcSxpZGRetl5AmMY1anV43E9dVmGeGfqM37rCZu2AseS8n1J8RUUxjj_L1KEA7Lrlzu5n8CJtU9c-_dy472EaiISCs_4XVOJ7nVgZ9HmQLGu6FwduxgCgzs21rIKIJV7T1Kcz76XxbSNc4a-COb6lxu9lCs/s281/limitaciones.png "Subraya los principales desafíos y vacíos actuales")

</div>

### 8. Limitaciones actuales y futuro del campo
Aunque los resultados son prometedores, los autores reconocen limitaciones técnicas y conceptuales:

- **Limitación 1:** Cobertura parcial del modelo, ya que se basa en un modelo de reemplazo.  
- **Limitación 2:** Componentes no modelados, como la dinámica de atención (QK), que es crucial en los transformers.  
- **Limitación 3:** Generalización y escalabilidad, pues entrenar CLTs y construir grafos requiere recursos significativos.  
- **Limitación 4:** Interferencia en relaciones globales al analizar múltiples prompts.

---

### 9. Conclusión: hacia una ciencia de la IA interpretable
Los dos papers de Anthropic marcan un avance clave hacia una IA auditada desde adentro. Con el uso de modelos de reemplazo y grafos de atribución, se demuestra que es posible abrir la caja negra de los modelos de lenguaje y observar, casi como con un microscopio, cómo fluye la información y se construyen las predicciones.

Más allá de sus capacidades externas, estos estudios revelan que los LLMs desarrollan circuitos internos organizados, activando conceptos intermedios, construyendo planes lingüísticos y mostrando un comportamiento que se asemeja al razonamiento. Este enfoque tiene valor científico, práctico y ético, ya que permite auditar decisiones, descubrir sesgos y construir herramientas de intervención para la seguridad de modelos avanzados.

---

### 10. Definiciones técnicas

| Concepto                       | Definición                                                                                                                                                  |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interpretabilidad mecánica     | Estudio del funcionamiento interno de los modelos de IA, identificando cómo y por qué producen sus salidas.                                               |
| Grafo de atribución            | Subgrafo dirigido que muestra el flujo causal de información entre features, tokens y logits en el modelo.                                                 |
| Feature                        | Unidad interpretable del modelo, construida como una combinación lineal escasa de neuronas con un patrón claro.                                           |
| Cross-Layer Transcoder (CLT)   | Red que reemplaza MLPs y produce features que escriben en múltiples capas, facilitando la interpretación.                                                  |
| Modelo de reemplazo            | Versión modificada del modelo original donde se sustituyen las MLPs por CLTs para análisis interpretativo.                                                 |
| Modelo congelado               | Configuración en la que se fijan la atención y la normalización para facilitar un análisis lineal.                                                         |
| Linealidad de atribución       | Propiedad que permite representar los efectos entre features como contribuciones aditivas.                                                                 |
| Supergrafo computacional       | Conjunto de todas las rutas de cómputo posibles dentro del modelo para todos los prompts.                                                                   |
| Perturbación e intervención    | Técnicas para modificar o inhibir features y observar cambios que validen relaciones causales.                                                             |

---

### 11. Referencias

- **Circuit Tracing:** Revealing Computational Graphs in Language Models  
  [https://transformer-circuits.pub/2025/attribution-graphs/methods.html](https://transformer-circuits.pub/2025/attribution-graphs/methods.html)

- **On the Biology of a Large Language Model**  
  [https://transformer-circuits.pub/2025/attribution-graphs/biology.html](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)

