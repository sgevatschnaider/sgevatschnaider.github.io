## 1. Cuando una respuesta convincente no es una respuesta verdadera

Un modelo de lenguaje puede producir una explicación fluida, citar un trabajo inexistente o combinar datos incompatibles. La forma de la respuesta resulta convincente, pero su contenido no está respaldado. A este tipo de salida se lo suele llamar **alucinación**.

Conviene distinguir dos problemas: una afirmación puede ser falsa respecto del mundo, o puede contradecir los documentos que se le dieron al modelo. Esa diferencia importa porque las estrategias de evaluación y corrección también cambian.

**Ejemplo.** Pedimos el autor de un artículo concreto. El modelo responde con un nombre plausible. Para evaluar la respuesta no alcanza con que el nombre parezca razonable: necesitamos contrastarlo con el artículo original.

## 2. Herramientas de mitigación y sus límites

| Herramienta | Qué aporta | Qué no garantiza |
|---|---|---|
| Recuperación aumentada, o RAG | Permite consultar documentos relevantes antes de generar una respuesta. | Que se recupere el documento correcto o que el modelo lo interprete bien. |
| Autoconsistencia | Compara varias respuestas o trayectorias y busca acuerdos. | Que varias respuestas coincidentes sean verdaderas. |
| Razonamiento y descomposición | Organiza un problema en pasos que se pueden revisar. | Que una explicación extensa equivalga a una prueba válida. |
| Verificación con herramientas | Contrasta cálculos, citas y afirmaciones con recursos externos. | Que la herramienta o la fuente sean adecuadas para cada afirmación. |
| Abstención | Permite reconocer que falta evidencia. | Que el modelo detecte siempre los límites de lo que sabe. |

Estas herramientas pueden reducir errores en tareas concretas. Su eficacia debe medirse con ejemplos pertinentes, fuentes verificables y un criterio de evaluación explícito.

## 3. Una lectura cuidadosa de los límites teóricos

Sourav Banerjee, Ayushi Agarwal y Saloni Singla presentan en *LLMs Will Always Hallucinate, and We Need to Live With This* un argumento sobre limitaciones estructurales, apoyado en teoría de la computación y problemas indecidibles. Es una posición teórica de ese trabajo, que debe leerse con atención a sus definiciones y supuestos.

No corresponde deducir directamente que toda pregunta concreta será respondida mal, ni que todas las estrategias de mitigación sean inútiles. **La ausencia de una garantía universal de corrección y la precisión en una tarea acotada son cuestiones diferentes.**

## 4. Gödel y el problema de la parada: qué dicen y qué no dicen

Los teoremas de incompletitud de Gödel se refieren a sistemas formales que satisfacen condiciones específicas. Un modelo de lenguaje no se convierte automáticamente en uno de esos sistemas por producir texto o utilizar operaciones matemáticas.

El problema de la parada establece que no existe un algoritmo general que decida, para cualquier programa y cualquier entrada, si ese programa terminará. No implica que resulte imposible fijar un límite de tokens en una implementación de un LLM. Un sistema puede detener la generación después de un presupuesto definido.

Estos resultados ayudan a pensar límites generales de los procedimientos computacionales. Para conectar esos límites con un comportamiento observable de un modelo, hace falta un argumento preciso; una analogía no lo reemplaza.

## 5. Recuperar una aguja no es siempre un problema indecidible

Buscar información en un conjunto finito de documentos puede ser una tarea computable. Otra cuestión es que un sistema de recuperación encuentre el fragmento pertinente o que un modelo aproveche correctamente un contexto extenso.

Por eso, los experimentos de *needle in a haystack* evalúan capacidades prácticas bajo condiciones concretas. No deben confundirse automáticamente con un teorema de indecidibilidad de toda búsqueda documental.

## 6. De la confianza en el tono a la confianza en la evidencia

Para estudiar una respuesta conviene preguntar: ¿qué afirmación se está haciendo?, ¿qué fuente la respalda?, ¿la fuente dice realmente eso?, ¿el cálculo puede reproducirse?, ¿qué parte sigue siendo incierta?

Una respuesta útil puede incluir límites, alternativas o una petición de información. La evaluación mejora cuando prestamos atención a la evidencia y al alcance de la afirmación, además de la fluidez del texto.

## Referencias

- Banerjee, Agarwal y Singla: [LLMs Will Always Hallucinate, and We Need to Live With This](https://arxiv.org/abs/2409.05746).
- Huang y colaboradores: [A Survey on Hallucination in Large Language Models](https://arxiv.org/abs/2311.05232).

Esta edición revisada aclara distinciones conceptuales de la nota de enero de 2025. El texto original permanece disponible en el archivo.
