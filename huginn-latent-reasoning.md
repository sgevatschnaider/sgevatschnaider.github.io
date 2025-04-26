# Huginn: Más Allá de las Palabras con Razonamiento Latente

[🌐 Cambiar idioma](https://economiayetica.blogspot.com/2025/04/huginn-razonamiento-latente-root.html)

---

Los modelos de lenguaje actuales alcanzan su rendimiento gracias al uso intensivo de **tokens**: cada paso del razonamiento se traduce en texto. Esta estrategia, conocida como **chain-of-thought** reasoning, mejora los resultados, pero impone un límite estructural: obliga a que todo pensamiento pase por el filtro del lenguaje.

En este artículo analizamos “**Huginn**”, una arquitectura innovadora basada en **razonamiento latente** **recurrente**, que permite a los modelos procesar internamente múltiples pasos antes de emitir una palabra. **Huginn** introduce un nuevo eje de escalabilidad: más profundidad de pensamiento, no más **parámetros**. Una aproximación que desafía el paradigma actual y abre nuevas posibilidades para el futuro de la inteligencia artificial.

---

## Cartografía del Pensamiento Latente

![Visualización animada del espacio latente](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgzb3e9KG5oBvd1oAHMGyIHAg8Wpe66E1eMmQVeDTA21HBbec38DmWzw-5QSAp9rLgj5gU2THOu-mFzsZ9ZD_7SoUG2j52JYhK-5Q4_ZRqdALPqYd6__l572-CzSN3fD88rRIVcslxX2MeHpdiNzUBku9JdQycPEFLNmsrdBiMBqAFcbwlaFGhKwKviwM/s400/20250426_1022_Futuristic%20Data%20Cosmos_simple_compose_01jss47n5gf1mrhst3t1ctf3nx.gif)
*La imagen representa un video hecho por Sora para representar el **espacio latente**. Si bien Sora no utiliza un **espacio latente** sino un espacio de píxeles para la generación de videos, ambos espacios tienen mucho en común. El espacio de píxeles, como esta imagen, representa el color real de cada punto, mientras que el **espacio latente** representa información abstracta: contornos, texturas, semántica.*

---

## 1. Introducción: ¿Qué significa “razonar sin palabras”?

Durante años, el avance en modelos de lenguaje como **GPT** o **ChatGPT** se centró en enseñarles a predecir palabras de forma cada vez más precisa. Estos modelos se volvieron expertos en generar texto fluido, responder preguntas y hasta resolver problemas complejos, todo basándose en una habilidad central: anticipar la próxima palabra en una secuencia.

Pero en medio de esta evolución, una pregunta empezó a tomar forma entre investigadores: ¿realmente los modelos piensan mientras escriben? ¿O simplemente están encadenando palabras que "suenan bien"? Y si pueden pensar... ¿por qué obligarlos a traducir cada paso de su razonamiento a palabras?

Esta es la idea disruptiva detrás del trabajo que vamos a explorar: que los modelos de lenguaje podrían mejorar, y mucho, si no estuvieran obligados a "hablar" mientras razonan. Que quizá, como los humanos, podrían tener un pensamiento interno más abstracto, más rico, más flexible, y sólo convertirlo en palabras al final, cuando ya tienen claro qué quieren decir.

La limitación actual radica en que estos modelos necesitan expresar sus ideas mediante **tokens**, unidades básicas de texto (como palabras, fragmentos o caracteres). Cada vez que dan un paso en un razonamiento, deben emitir un nuevo **token**. Esto no solo consume tiempo y recursos, sino que también fuerza al modelo a empobrecer sus pensamientos, traduciéndolos a un lenguaje lineal y simplificado.

Y es ahí donde aparece una nueva propuesta: permitir que el modelo razone "en silencio", en lo que los científicos llaman **espacio latente**, un espacio matemático donde la información se representa de forma interna, en vectores de alta dimensión, sin pasar por palabras.

Esta es la hipótesis que abre la puerta a una nueva generación de modelos: más inteligentes, más eficientes, y sobre todo, menos dependientes del lenguaje para pensar.

---

## 2. El problema actual: pensar como humanos, pero hablar como robots

Para entender por qué esta nueva línea de investigación es tan importante, primero tenemos que mirar cómo funcionan hoy los modelos de lenguaje más avanzados. Aunque parezcan inteligentes y versátiles, hay un detalle técnico que condiciona toda su forma de “pensar”: deben hacerlo a través de **tokens**.

Un **token** no es más que una unidad básica de texto: puede ser una palabra completa, una sílaba, una letra o incluso un signo de puntuación. Cada vez que un modelo responde, lo hace generando una secuencia de **tokens**, uno por uno. Y cada uno de esos **tokens** no es solo una palabra al azar: representa una decisión que el modelo tomó, basada en todos los **tokens** anteriores.

Ahora bien, cuando un modelo tiene que resolver un problema complejo, como una suma larga, una pregunta lógica o una explicación científica, la estrategia más efectiva que se descubrió hasta ahora es el llamado **chain-of-thought**, o cadena de pensamiento. Esta técnica hace que el modelo escriba paso a paso su razonamiento, como si estuviera explicando en voz alta cómo llega a la respuesta.

El problema es que obligar al modelo a expresar mediante palabras cada paso consume mucha memoria, procesamiento y contexto. Es como si una persona resolviera un problema matemático diciendo en voz alta: “Ahora multiplico por dos. Ahora resto cinco. Ahora comparo los resultados…”. Si lo pensamos este esfuerzo no es necesario para elaborar una respuesta, pues el proceso lo hacemos internamente, en silencio.

Lo mismo pasa con estos modelos: cada vez que generan un **token** están desperdiciando parte de su capacidad computacional en expresarse, en lugar de enfocarse en razonar. Además, al tener que convertir sus ideas en texto, pierden precisión. No todo lo que se piensa se puede decir con claridad, y menos aún en un formato limitado por una secuencia de palabras.

En otras palabras: los modelos actuales están diseñados para hablar bien, pero no necesariamente para pensar bien. Y eso pone un techo a su capacidad.

La gran pregunta que surge es: ¿y si pudiéramos permitirles pensar como lo hacemos los humanos? Es decir, procesar, comparar, imaginar y razonar sin tener que poner todo en palabras.

Ahí es donde entra la idea de razonar en **espacio latente**, sin **tokens** de por medio. Como si el modelo pudiera “darle vueltas” a un problema internamente, profundizar su análisis, probar caminos alternativos… y recién después, cuando ya está listo, generar la respuesta final.

---

### Mapa latente de tokens en el paso inicial del razonamiento

![Mapa latente inicial de tokens](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6Zvy0VfMYA5gOzklGEpQtmSsgxHIYZZAL3yBHYjHAXFhm3_wMn9C0cBOKxx6Yv8utq2_rNmkK53V8jZBGzSusA41SYmUMARF48MIitKUFQ5b7EWtRF0mM9uuPTXQiwc4yOcAZggQraytcEbcJJN6uFgBADWSVQqz3LsXrahxto1l10jEVkKzmlNUb95U/s400/waterfall_mejorado.gif)
*Fuente: Elaboración propia en base al repositorio de Scaling up Test-Time Compute with Latent Reasoning*

La imagen anterior representa una visualización del proceso de **razonamiento latente** **recurrente** de un modelo de lenguaje avanzado. Cada punto corresponde al estado interno de un **token** de la entrada en el primer paso de razonamiento. Los ejes horizontales (PCA1 y PCA2) representan una proyección reducida del **espacio latente** de alta dimensión mediante Análisis de Componentes Principales (**PCA**), mientras que el eje vertical indica la posición del **token** en la secuencia original de texto.

Esta imagen es el paso 0 de una animación completa (capturada en el GIF asociado), que muestra cómo el estado interno de cada **token** evoluciona con cada iteración del bloque **recurrente** del modelo. A lo largo de esta secuencia, el modelo aplica múltiples veces una función de razonamiento sobre su representación latente, permitiéndole refinar su comprensión antes de producir una salida verbal.

En el instante inicial, los estados están agrupados verticalmente, lo que refleja que aún no ha ocurrido razonamiento interno: todos los **tokens** han sido apenas embebidos en el **espacio latente**, pero no han interactuado ni refinado su significado.

Sin embargo, al avanzar en las iteraciones (como se ve en la animación), cada **token** comienza a trazar una trayectoria única en el **espacio latente**. Algunas de estas trayectorias:

- Se extienden ampliamente, indicando **tokens** que requieren más pasos de razonamiento (por ejemplo, conceptos clave como “dozen” o “weeks”).
- Permanecen cercanas a su punto inicial, reflejando **tokens** triviales o funcionales como preposiciones o determinantes.
- Forman bucles, espirales o líneas rectas, evidenciando patrones de razonamiento interno como órbitas (iteración), sliders (conteo progresivo), o convergencia a punto fijo (comprensión estabilizada).

Esta visualización revela un aspecto crítico del nuevo paradigma de razonamiento en modelos de lenguaje: el pensamiento ocurre en silencio, en el **espacio latente**, sin necesidad de cadenas de palabras intermedias. En lugar de razonar explícitamente con texto como en los enfoques clásicos de **chain-of-thought**, el modelo refina internamente su entendimiento antes de emitir una respuesta. Cada paso transforma los vectores latentes de los **tokens**, permitiendo razonamiento progresivo sin verbalización.

---

## 3. El modelo **Huginn**: una mente que razona en silencio

El modelo está diseñado para pensar profundamente sin necesariamente expresar cada paso en palabras.

La clave está en una idea sencilla pero poderosa: reutilizar sus propias capas internas para razonar más tiempo, sin generar texto hasta el final. Es lo que los autores llaman **profundidad recurrente**.

El modelo recibe una entrada, la transforma en un vector interno (como una especie de pensamiento abstracto), y luego repite el proceso de razonamiento sobre ese vector tantas veces como necesite. Recién cuando siente que llegó a una conclusión, traduce ese vector a texto.

Esto tiene dos grandes consecuencias:

1.  El modelo puede razonar más profundo con el mismo tamaño. Aunque **Huginn** tiene 3.5 mil millones de **parámetros** (una cantidad modesta comparada con los grandes modelos actuales), puede simular ser mucho más profundo simplemente repitiendo sus pasos de razonamiento. En términos computacionales, esto es como tener un modelo de 50 mil millones de **parámetros**... sin tener que entrenar uno.
2.  El razonamiento se mantiene en el **espacio latente**, es decir, en un formato interno que no necesita ser traducido a palabras a cada paso. Es como si el modelo pudiera pensar en voz baja, de manera abstracta, sin perder tiempo ni precisión al convertir cada pensamiento en lenguaje.

Esto representa un cambio de paradigma: pasamos de modelos que generan más **tokens** para pensar mejor, a modelos que usan más computación interna sin necesidad de hablar más.

---

## 4. ¿Cómo se entrena un modelo que piensa sin hablar?

En los modelos clásicos, el proceso de entrenamiento consiste básicamente en mostrarle millones de fragmentos de texto y pedirle que prediga el siguiente **token**. Cada vez que se equivoca, ajusta un poco sus **parámetros**. Este ciclo se repite billones de veces.

Pero con **Huginn** el juego cambia: ahora hay que enseñarle no solo a predecir palabras, sino a usar sus propias capas internas como una herramienta de razonamiento iterativo. Es como enseñarle no solo a hablar, sino a reflexionar antes de hablar.

La novedad clave es que **Huginn** tiene un bloque **recurrente**: un conjunto de capas que puede aplicar una y otra vez. Pero para que esto funcione, hay que entrenarlo con distintos “ritmos de pensamiento”. Es decir, durante el entrenamiento se le enseña a resolver tareas haciendo desde 1 hasta 64 repeticiones internas de ese bloque.

Cada secuencia de texto que se le muestra durante el entrenamiento pasa por un número distinto de iteraciones, elegido al azar. Así, el modelo aprende a mejorar sus respuestas cuando se le da más tiempo para pensar, y también a resolver cosas rápido cuando no hace falta tanto procesamiento.

Esto se llama entrenamiento con recurrencia variable, y es lo que le permite a **Huginn** adaptarse dinámicamente durante la inferencia (cuando ya está en uso).

Entrenar un modelo **recurrente** no es fácil. Repetir muchas veces una misma operación puede hacer que la información colapse o explote: o se pierde el sentido (todo se aplana), o se vuelve caótico.

Para evitar eso, los investigadores usaron varias técnicas inteligentes:

- Inyección de estado aleatorio inicial: cada secuencia comienza con un vector interno distinto, lo que ayuda a evitar que el modelo caiga en patrones rígidos.
- Retroalimentación controlada: durante el entrenamiento, no se calculan los errores de todas las iteraciones, sino solo de las últimas. Esto reduce el consumo de memoria y evita que el modelo se abrume intentando ajustar cada paso interno.
- Normas específicas: se aplican capas de normalización (como **RMSNorm**) cuidadosamente ubicadas para mantener la estabilidad numérica del modelo mientras razona.
- Entrenamiento continuo y modular: el modelo se estructura en tres bloques (preludio, **recurrente**, coda) que pueden ser afinados independientemente.

Todo esto se entrena en un superordenador con miles de **GPUs**, en tandas de hasta 12 horas por segmento. El resultado: un modelo con solo 3.5 mil millones de **parámetros** que aprendió a comportarse como si tuviera muchos más, simplemente porque puede “pensar más hondo”.

---

## 5. Resultados sorprendentes: más chico, más eficiente, más inteligente

**Huginn** fue entrenado con 3.5 mil millones de **parámetros**. Para ponerlo en contexto, es un tamaño intermedio, bastante más chico que los grandes modelos comerciales como **GPT**-3 (175B) o **PaLM** (540B), e incluso más chico que muchos modelos open source modernos como **Mistral** (7B) o **Mixtral** (12.9B).

Y, sin embargo, **Huginn** logra un rendimiento comparable —y a veces superior— en varias tareas que exigen razonamiento complejo.

¿Cómo? Gracias a su capacidad para escalar razonamiento, no tamaño. Es decir, puede repetir internamente sus propios procesos de pensamiento, en vez de depender de más capas fijas o más **tokens** de entrenamiento.

En las pruebas de evaluación más comunes para modelos de lenguaje, **Huginn** mostró mejoras progresivas a medida que se le permitía usar más iteraciones internas en su bloque **recurrente** (es decir, pensar más).

Lo más impresionante es que el rendimiento mejora de forma continua con más recursividad, lo cual demuestra que su arquitectura **recurrente** no es un truco puntual, sino una vía robusta para escalar inteligencia.

---

## 6. **Comportamientos emergentes**: cuando el modelo aprende a pensar por su cuenta

### Cómo piensa **Huginn**: tres estilos de razonamiento interno

**Huginn** no solo resuelve tareas. Aprende a razonar de formas distintas según el desafío. Esta infografía resume los tres patrones emergentes que los investigadores identificaron:

- Convergencia para tareas simples.
- Órbitas para manipular conceptos abstractos o espaciales.
- Sliders para evaluaciones complejas o morales.

### Patrones emergentes de pensamiento latente en IA

![Patrones emergentes de pensamiento](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjePjtjmPlCTvLGvmjBfyVs9sRsYemuo2uPQJ_TLNLCfM7AuqZDIv5oG9WKbymDDH4_h0emq498r0FmNtbq0KcR5r_6bBzGCIGzxf-_0QnIgUJHAKGvROZH4G7GrYGHhK_ctdqnLA_7pBaTojbpRBVn4SppK9WNlTl2VOVsibl4c_d5bHI5QJC93wg1NmU/s400/trayectorias_mejorado.gif)

Uno de los descubrimientos más fascinantes de este modelo es que no todos los pensamientos siguen el mismo camino interno. Dependiendo de la tarea, **Huginn** razona de formas diferentes y, eso puede verse directamente en su **espacio latente**.

La siguiente imagen muestra cómo se transforma internamente el estado de ciertos **tokens** a medida que el modelo razona en silencio. Cada trayectoria corresponde a una palabra específica mientras pasa por múltiples iteraciones del bloque **recurrente**. Lo notable es que el modelo adopta diferentes patrones de razonamiento espontáneamente, sin que nadie se lo haya enseñado:

- **Convergencia rápida:** algunas palabras se estabilizan enseguida, como si el modelo “supiera” que no necesitan mayor reflexión.
- **Órbitas latentes:** en tareas espaciales o numéricas, los vectores internos giran en patrones circulares, como si **Huginn** estuviera manipulando ideas complejas en su mente.
- **Sliders internos:** para razonamientos abstractos, morales o ambiguos, el modelo avanza en una dirección única y progresiva, como ajustando una escala interna de valoración.

Estos **comportamientos emergentes** apuntan a una idea poderosa: **Huginn** no solo resuelve tareas, aprende a gestionar su propia forma de pensar. Esto lo acerca a un tipo de razonamiento más flexible, adaptativo y, en cierto sentido, estratégico.

---

### Trayectorias latentes de tokens triviales durante el razonamiento **recurrente**

![Visualización de trayectorias latentes para tokens triviales](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-i1Jk_LmN-oPq_RsT-uVw_XyZ-aBc_DeFg-hIj_KlMn-oPq_RsT-uVw_XyZ-aBc_DeFg-hIj/s1600/trivial_token_trajectories.png)
*Fuente: Elaboración propia en base al repositorio de Scaling up Test-Time Compute with Latent Reasoning*

La visualización anterior muestra la evolución del estado latente de **tokens** seleccionados a lo largo del proceso de razonamiento interno del modelo. Cada fila corresponde a un **token** específico del texto (por ejemplo, “3”, “many”, “?”), y cada columna muestra su trayectoria proyectada en diferentes planos del **espacio latente** reducidos por análisis de componentes principales (**PCA**).

Cada subgráfico representa dos componentes principales del **espacio latente**. En ellos, cada punto de color corresponde al estado latente del **token** en una iteración del razonamiento. La escala de color indica el momento temporal dentro del proceso, donde los colores más oscuros representan las primeras iteraciones y los más claros las últimas. La cruz roja señala el centro de masa de la trayectoria, funcionando como referencia para observar el desplazamiento del **token**.

En esta imagen particular, todos los **tokens** muestran trayectorias extremadamente cortas, prácticamente reducidas a un solo punto. Esto indica que no hubo razonamiento significativo para estos **tokens**. El estado latente de cada uno no cambió de manera sustancial a lo largo de las iteraciones, o bien lo hizo de forma imperceptible. En términos cognitivos, el modelo identificó rápidamente que estos **tokens** no requerían reflexión adicional.

Esto se explica por la naturaleza de los **tokens** seleccionados, que incluyen signos de puntuación (como “,” o “.”), palabras funcionales (“many”), números triviales (“3”) y símbolos estructurales como el signo de interrogación (“?”). Estos elementos tienden a tener una semántica fija o altamente predecible, por lo que el modelo los comprende correctamente desde la etapa de embedding inicial. Como resultado, no es necesario "pensar más" sobre ellos. El **razonamiento latente** se detiene rápidamente y la trayectoria converge en las primeras iteraciones.

Este comportamiento ejemplifica claramente cómo el modelo asigna más recursos computacionales a los elementos que lo requieren, y evita gastar procesamiento en los que ya entiende con certeza. Se trata de una forma de razonamiento adaptativo, donde la reflexión se distribuye de manera eficiente, simulando un tipo de atención cognitiva interna.

---

## 7. Conclusión: el futuro de la inteligencia artificial podría no ser tan hablador

Este modelo no se destaca por su tamaño ni por su cantidad de datos, sino por su capacidad de razonar en silencio, profundizar cuando lo necesita, y mantenerse eficiente cuando no. Como los humanos, administra su esfuerzo cognitivo según el problema. A veces resuelve rápido. Otras, se toma su tiempo.

Es una visión más sobria, más eficiente y, tal vez, más cercana a cómo funciona el pensamiento real, tanto en nosotros como en las máquinas que estamos construyendo.

---

## Referencias

- [Paper arXiv [Geiping et al., 2025]](https://arxiv.org/abs/2502.05171)
- [Artículo Quanta Magazine [Ananthaswamy, 2025]](https://www.quantamagazine.org/to-make-language-models-work-better-researchers-sidestep-language-20250414)
- [Repositorio HuggingFace Papers](https://huggingface.co/papers/2502.05171)
- [Notebook GitHub [Análisis Razonamiento Latente]](https://github.com/sgevatschnaider/sgevatschnaider.github.io/blob/847535e8c021d1ad9488bfca7e33d0d72a2e0c70/notbooks/Huginn_Latent_Reasoning_Analysis_descarga__github_.ipynb)
