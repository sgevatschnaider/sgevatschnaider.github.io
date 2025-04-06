🔁 Cambiar idioma

Pensamiento Artificial: Cómo Razonan los Modelos de Lenguaje


1. Introducción
En los últimos años, los modelos de lenguaje han demostrado capacidades sorprendentes, desde responder preguntas con precisión hasta escribir poesía o resolver acertijos. Pero una pregunta clave persiste: ¿cómo “piensan” estos modelos? ¿Son simplemente predictores de la próxima palabra, o hay mecanismos internos más complejos operando bajo la superficie?

Dos trabajos recientes de Anthropic nos ofrecen una nueva lente para explorar esta cuestión. El primero, Circuit Tracing, presenta un enfoque novedoso para abrir la caja negra de los modelos mediante la construcción de grafos de atribución. El segundo, On the Biology of a Language Model, aplica esta herramienta para revelar comportamientos emergentes que van más allá de la autorregresión simple.



2. Marco conceptual: Interpretabilidad mecánica
La interpretabilidad mecánica busca entender los mecanismos internos reales que el modelo utiliza para razonar, de forma análoga a cómo la neurociencia estudia los circuitos del cerebro.

En lugar de tratar al modelo como una caja negra, lo analiza como un sistema dinámico compuesto por features, flujos de activación y relaciones causales internas.

3. Del supergrafo al subgrafo: el modelo como red dinámica
Los transformadores pueden verse como un supergrafo computacional. Pero solo una parte de ese grafo se activa por cada prompt. Esta porción activa es el grafo de atribución, que revela cómo fluye la información realmente.



4. Construyendo el microscopio: CLTs y modelo de reemplazo
Se introducen los Cross-Layer Transcoders (CLTs), que reemplazan las MLPs por componentes interpretables. Así se construye un modelo de reemplazo que replica el comportamiento original pero permite análisis internos.



5. Visualizando el razonamiento: grafos de atribución
Con el modelo interpretado, se construyen grafos que muestran cómo cada feature contribuye a una predicción. Son explicaciones lineales, cuantificables y visuales del pensamiento del modelo.



6. Usando el microscopio: análisis de casos reales
Caso 1: Formación de acrónimos – activación de palabras clave.
Caso 2: Memoria factual – asociación de conceptos.
Caso 3: Sumas – razonamiento modular.



7. ¿Los LLMs piensan? Lo que revelan los grafos
Los modelos parecen planificar, anticipar y construir ideas estructuradas. Incluso se ajustan para mantener coherencia estética (rimas) o lógica (diagnósticos).



8. Limitaciones actuales y futuro del campo
Cobertura parcial del modelo

Atención no modelada completamente

Costos computacionales

Interferencia entre prompts



9. Conclusión: hacia una ciencia de la IA interpretable
Estos enfoques permiten auditar decisiones, descubrir sesgos y construir herramientas de intervención. Los LLMs, lejos de ser cajas negras, pueden ser observados por dentro con precisión científica.

10. Definiciones técnicas
Concepto	Definición
Interpretabilidad mecánica	Estudio del funcionamiento interno de los modelos de IA.
Grafo de atribución	Muestra el flujo causal entre tokens, features y logits.
Feature	Unidad lineal interpretable del modelo.
CLT	Sustituto de MLP que facilita la interpretación.
Modelo de reemplazo	Modelo donde se sustituyen MLPs por CLTs.
Modelo congelado	Versión donde se fijan atención y normalización.
Linealidad de atribución	Propiedad que permite contribuciones aditivas entre unidades.
Supergrafo computacional	Todas las rutas de cómputo posibles en el modelo.
Perturbación e intervención	Técnicas experimentales para validar relaciones causales.
11. Referencias
Circuit Tracing: https://transformer-circuits.pub/2025/attribution-graphs/methods.html

On the Biology of a Language Model: https://transformer-circuits.pub/2025/attribution-graphs/biology.html
