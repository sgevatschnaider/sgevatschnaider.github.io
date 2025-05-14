# Autómatas Celulares y Persuasión Algorítmica: ¿Puede la **IA** cambiar tu opinión?

*   [🇬🇧 English Version](https://economiayetica.blogspot.com/2025/05/cargando.html)

<p align="center">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoIY2-CvkcrJ-oPYyeNnAs3SVpxekKAPYswLbrP_03OuZW20AaFfxEkYq99zFCtqdRg0n7xwIWesxJOioM2hBmb0DN8BE48EBx8MYE_xGy97PGC5SqvzgjC390GfpzgUYH32nOz49aDFvbJCDyR6g5pn2l5n3cTP91-6KaniPxCezhmLV8KuEbmITIlwU/s600/persuasion_anim.gif" alt="Cabecera del artículo sobre IA y persuasión" width="600">
</p>
> *Opcional: Pie de foto para la imagen de cabecera si lo necesitas*

Esta nota surge en la confluencia de dos líneas de trabajo. Por un lado, la experiencia docente en los cursos de **Big Data** y **Teoría de Grafos**, donde junto a mis estudiantes he desarrollado aplicaciones prácticas basadas en **autómatas celulares** para modelar fenómenos de **difusión**, incluyendo enfermedades, modas, rumores, y dinámicas en **redes sociales**. Por otro lado, un estudio empírico reciente, realizado por un grupo de investigadores suizos en 2024, que empleó agentes de **inteligencia artificial (IA)** para participar encubiertamente en el **subreddit r/ChangeMyView**, con el objetivo de simular argumentaciones humanas, utilizando diversas estrategias retóricas de **persuasión**.

A partir de este cruce entre práctica pedagógica y avance científico, desarrollé un modelo de **autómata celular** que permite representar computacionalmente los resultados del estudio mencionado. Este enfoque no solo amplía el entendimiento sobre el impacto real de los agentes **IA** en contextos comunicacionales humanos, sino que ofrece un marco analítico para explorar escenarios alternativos de manipulación ideológica.

El modelo de **autómata celular** formulado puede entenderse como una metáfora algorítmica de la **difusión** ideológica, cada intervención **IA** actúa como un vector de contagio persuasivo, que propaga un cambio de opinión a través de una red de nodos cognitivos. En este sentido, la **simulación** permite observar la dinámica de este fenómeno como una suerte de **epidemia cognitiva**, en la que ideas, argumentaciones, y estructuras retóricas, amplificadas por **modelos de lenguaje**, se diseminan con patrones predecibles, sensibles a parámetros contextuales como la personalización del mensaje o el grado de interacción social.

## Contexto del Estudio: "Can AI Change Your View?"
Para formular un modelo basado en **autómatas celulares** que reproduzca y permita extender el análisis del estudio “Can AI Change Your View?”, consideré una serie de elementos fundamentales. Estos se agrupan en tres ejes principales: la naturaleza y dinámica del foro **r/ChangeMyView**, los perfiles de sus usuarios y el sistema explícito de recompensa argumentativa, así como el diseño experimental del estudio en cuestión.

### 1) La comunidad r/ChangeMyView
**Reddit** es una plataforma social y de agregación de contenidos organizada en comunidades temáticas llamadas **subreddits**, donde los usuarios pueden publicar contenido, debatir y votar sobre publicaciones y comentarios. Cada **subreddit** gira en torno a un tema específico.

Una de estas comunidades es **r/ChangeMyView (CMV)**, un foro dedicado al debate argumentativo y cambio de perspectiva. Fue creado con el objetivo de fomentar discusiones abiertas, respetuosas y bien argumentadas sobre distintos temas. Aquí, los usuarios publican una opinión firmemente sostenida e invitan a los demás a intentar cambiar su punto de vista.

### 2) Tipos de usuarios de la comunidad
Los usuarios de esta comunidad son de tres tipos:

*   **a) OP (Original Poster):** Es quien inicia la discusión con una opinión explícita y está dispuesto a escuchar contraargumentos.
*   **b) Comentaristas:** Otros usuarios que responden al **OP** con argumentos, evidencia y razonamientos para desafiar la opinión inicial.
*   **c) Participantes activos y expertos:** Algunos usuarios tienen gran experiencia en argumentación y han obtenido múltiples reconocimientos por su habilidad para persuadir.

### 3) Recompensa dada por la comunidad
En **r/ChangeMyView**, el símbolo **delta (∆)** cumple un rol fundamental como métrica explícita de **persuasión** y reconocimiento argumentativo. Este ícono representa una acción consciente del usuario original (**OP**) que inició la discusión.

Solo el **OP** tiene la autoridad para otorgar un **∆**, y este se concede cuando el **OP** considera que un comentario ha logrado modificar su punto de vista. Este cambio puede ser:

*   **Total**: el usuario abandona completamente su posición inicial.
*   **Parcial**: el argumento recibido le hace matizar, replantear o reevaluar aspectos clave de su postura original.

Hay que tener en cuenta que el acto de otorgar un **∆** no es automático ni trivial; es una decisión explícita del **OP**, quien debe reconocer de forma activa que la intervención fue suficientemente persuasiva. En muchos casos, el **OP** acompaña la entrega del **∆** con un mensaje de agradecimiento o una explicación sobre qué parte del argumento le resultó decisiva.

Esta práctica convierte a **CMV** en un entorno muy valioso para estudiar la **persuasión**, ya que el **∆** funciona como una variable observable, cuantificable y consensuada para identificar cuándo ha ocurrido un cambio de opinión.

### 4) El experimento: IA infiltrada en Reddit
El estudio se ubica en el creciente campo de la **persuasión** generada por **inteligencia artificial**, específicamente **modelos de lenguaje de gran escala (LLMs)**. Se parte de una preocupación ética: ¿puede la **IA** ser usada para manipular opiniones en contextos reales, más allá de ambientes controlados?

Estudios previos mostraban que los **LLMs** eran persuasivos, pero se realizaban en:

*   Entornos artificiales (laboratorios o encuestas online).
*   Muestras sesgadas (crowdworkers conscientes del experimento).

Este estudio busca resolver ese vacío aplicando un **experimento de campo**, es decir, en condiciones reales, sin que los participantes supieran que interactuaban con **IA**.

El diseño experimental fue de noviembre 2024 a marzo 2025. El tamaño de la muestra fue de 478 (tras eliminar posts eliminados o inválidos). Los investigadores realizaron una asignación aleatoria estratificada en:

1.  **Genérico**: **IA** responde solo con base en el texto del post.
2.  **Personalizado**: **IA** accede a atributos del **OP** (edad, política, género, etc.) inferidos desde su historial.
3.  **Alineado con Comunidad**: Respuestas generadas por un modelo **IA** fine-tuned con comentarios exitosos (con **∆**) del **subreddit**.

## Resultados de la Investigación y Modelado
### 5) Resultados de la investigación de: Can AI Change Your View?
La estrategia más exitosa según esta investigación fue la **personalizada**, que adaptaba el mensaje a las características del autor original (por ejemplo, su ideología política, género o estilo de argumentación). Esta **IA** no solo superó a los usuarios promedio, sino que fue más persuasiva que el 99% de ellos. Esto sugiere que los modelos algorítmicos no se limitan a replicar contenido: aprenden a detectar y explotar las vulnerabilidades cognitivas del entorno comunicacional.

La siguiente imagen tomada del estudio muestra los resultados de la investigación.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjldqufP48Sg5_GgqSd76tiPnN7YE40NVIHJJ5o9bgeYbyCxaWVcVgz5DBBbR7IUAjDMOusEziYzpxxdJWog0cN2aWiiNCAZuPE3Pr7-W3X-VxILB0TxRdNDfDRz5IVizsnew0yUV8rH25xcGsM-e1fEHMhu8fA4aUGVXIneVipgzo6aZ46t7IA7J0ETZs/s673/graph%20paper.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjldqufP48Sg5_GgqSd76tiPnN7YE40NVIHJJ5o9bgeYbyCxaWVcVgz5DBBbR7IUAjDMOusEziYzpxxdJWog0cN2aWiiNCAZuPE3Pr7-W3X-VxILB0TxRdNDfDRz5IVizsnew0yUV8rH25xcGsM-e1fEHMhu8fA4aUGVXIneVipgzo6aZ46t7IA7J0ETZs/s600/graph%20paper.png" alt="Tasas de persuasión del estudio original" width="600">
  </a>
</p>
> *Tasas de persuasión*
> *Fuente: Can AI Change Your View?*

La imagen muestra que todos los tratamientos con **inteligencia artificial** superan ampliamente al rendimiento humano base, cuya tasa de **persuasión** se sitúa en apenas 0.027. Dentro de las condiciones evaluadas, la estrategia de **Personalización** se destaca como la más eficaz, con una tasa de **∆** del 18%. No obstante, su intervalo de confianza se superpone parcialmente con el del modelo **Genérico**, lo que sugiere que la diferencia entre ambos no es estadísticamente concluyente. Por otro lado, aunque **Alineado con Comunidad** presenta una tasa más baja (9%), esta sigue siendo aproximadamente tres veces superior al rendimiento humano, lo cual es significativo. Los intervalos de confianza representados en el gráfico permiten estimar la precisión de cada resultado: cuanto más estrecho es el intervalo, mayor es la fiabilidad del valor estimado. En conjunto, el gráfico demuestra que la **IA** supera consistentemente a los humanos en capacidad persuasiva, incluso en su forma menos efectiva, y que la personalización de los argumentos mejora levemente la eficacia, aunque sin garantizar superioridad estadística clara frente a otras variantes.

A partir de los resultados anteriores empecé a formular un modelo basado en un **autómata celular** que reflejara por un lado, los resultados de un experimento y, por otro, me permitiera simular otras situaciones consecuencia del uso de la **IA** como herramienta de **persuasión**.

Para ello a partir de esta investigación, formulé una representación del experimento usando un **grafo acíclico dirigido (DAG)** para modelizar las relaciones causales establecidas en el experimento.

Un Diagrama de Causalidad (**DAG**) que muestra cómo se infiere el efecto causal del tratamiento (tipo de respuesta: **IA** vs humano) sobre el cambio de opinión (**∆**).

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCNUof8cPt8KrkROy6753h1hBkeEEtXFdWv1Pu1TzvjtI3ElzfBs5zspqqC0eJ8FbT9-dagrakYnmIxLuG3KHnNMIe1UjIPiaGQd2bA8AGjXCPQUVp42Tfbi9NY2LTOXXZ6FysU1Axwkah41-7FKSwwwuc8oVxHCfqBrl6-3WFVkIlCMtFk7x72HJ20VI/s1785/dag_persuasion.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCNUof8cPt8KrkROy6753h1hBkeEEtXFdWv1Pu1TzvjtI3ElzfBs5zspqqC0eJ8FbT9-dagrakYnmIxLuG3KHnNMIe1UjIPiaGQd2bA8AGjXCPQUVp42Tfbi9NY2LTOXXZ6FysU1Axwkah41-7FKSwwwuc8oVxHCfqBrl6-3WFVkIlCMtFk7x72HJ20VI/s600/dag_persuasion.png" alt="Diagrama Acíclico Dirigido (DAG) del experimento" width="600">
  </a>
</p>
> *DAG*
> *Fuente: Elaboración propia*

Junto al desarrollo del **DAG** elaboré una tabla para poder mejor visualizar los resultados de la investigación.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPht26U7q7B709kwHq501u5Fo7SA0L2eAiRJeUsDmODX1rA7sz_2pkBdej9-tqPNFtzbYihDrOImVcN5j8tmiG95VNg8OzYkohf4SzcIAfBDBnAwcLhdKP5ZrGe1x4TDwYeBxbvdhSnjJapUzWhaYWKvbF9H0MsJU-Onq5sQsu05VKGi776oQ0mn3OxrQ/s1500/tabla_persusion_ajustada.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPht26U7q7B709kwHq501u5Fo7SA0L2eAiRJeUsDmODX1rA7sz_2pkBdej9-tqPNFtzbYihDrOImVcN5j8tmiG95VNg8OzYkohf4SzcIAfBDBnAwcLhdKP5ZrGe1x4TDwYeBxbvdhSnjJapUzWhaYWKvbF9H0MsJU-Onq5sQsu05VKGi776oQ0mn3OxrQ/s600/tabla_persusion_ajustada.png" alt="Tabla de resultados de la investigación" width="600">
  </a>
</p>
> *Tabla de Resultados*
> *Fuente: Elaboración propia en base datos de: Can AI Change Your View?*

### 5. Simulación y Modelado: Autómatas Celulares Sociales
*(Nota: La numeración "5." se repite del texto original, la mantengo)*

A partir del grafo anterior que me permitió precisar las variables a utilizar en el **autómata celular** y de la tabla, creé un modelo de **autómata celular** donde cada celda representa a un usuario susceptible o no de ser convencido. La grilla bidimensional simula la estructura social de una comunidad online, con reglas locales de interacción y contagio ideológico.

Un **autómata celular (AC)** es una estructura computacional discreta compuesta por celdas que evolucionan en pasos de tiempo de acuerdo con reglas locales. En este caso, cada celda representa un usuario (**OP**) con un estado cognitivo respecto a la **persuasión**: no convencido, convencido, o tratado sin éxito. La dinámica se organiza sobre una retícula bidimensional N×N, donde la evolución temporal simula el proceso de influencia ejercido por intervenciones **IA** personalizadas.

El modelo permite configurar distintos parámetros: la probabilidad base de **persuasión** por tipo de argumento (**genérico**, **personalizado**, **comunitario**), el número de usuarios tratados por paso, y la presencia o no de un efecto social que permite que los usuarios convencidos influyan a sus vecinos. Este último parámetro, llamado **umbral social (Tₛ)**, refleja cuántos vecinos convencidos se requieren para que un usuario inicialmente resistente cambie de opinión.

Los resultados de la **simulación** permiten observar cómo pequeñas modificaciones en la estrategia **IA** o en el entorno social pueden alterar profundamente la tasa global de **persuasión**. Por ejemplo, al activar el efecto social con un umbral bajo, se observa una aceleración del cambio colectivo, similar a un efecto de tipping point.

<p align="center">
  <img src="https://sgevatschnaider.github.io/persuasion_anim.gif" alt="Visualización del autómata celular y la persuasión" width="600">
</p>
> *Autómata celular y persuasión*
> *Fuente: Elaboración propia*

El cuadrado superior izquierdo es una cuadrícula 15x15 que representa 225 usuarios individuales (**OPs**) dentro de una comunidad online. Cada celda representa el estado cognitivo de un individuo respecto a la **persuasión**:

*   Color gris: usuario no convencido (estado 0).
*   Verde: usuario persuadido por un argumento de **IA** (estado 1).
*   Naranja: usuario que fue tratado sin éxito por la **IA** en el paso actual (estado 2, visual).

En el paso 0, todas las celdas aparecen grises, lo cual se debe al hecho de que no se ha iniciado aún ninguna acción persuasiva por parte de la **IA**. Este estado representa una población completamente susceptible, cognitivamente intacta desde el punto de vista del cambio de creencias, sin exposición al estímulo **IA**.

El cuadro superior derecho complementa la cuadrícula al mostrar la proporción exacta de usuarios en cada estado.

En tercer lugar, el cuadro inferior izquierdo muestra diferenciado por color los distintos tipos de tratamiento:

*   Azul (**Genérico**), Naranja (**Personalizado**), Verde (**Alineado con la Comunidad**).
*   En Paso 0, todas las líneas están en cero, ya que no se ha intentado persuadir a ningún usuario.

Por último, el cuadro inferior derecho permite contrastar las tasas teóricas de **persuasión** con los resultados empíricos de la **simulación**. Las barras representan:

*   Barra opaca (izquierda): tasa base teórica según configuración.
*   Barra con tramas (derecha): tasa efectiva observada en la **simulación** (inicialmente cero).

La siguiente imagen compara los resultados de mi **simulación** basada en **autómatas celulares** con los hallazgos del estudio original.

<p align="center">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAbb6ZfzRHqDeXuz6WWS-wnOEqjrb43_p9Sv_UjFiJsCUtbvKY9xJj0uapREhHOCAUuvROiQjmBUjMCizWNvG0vHvmimxu0ERvwePdIl0RvfQVOunnbjpOAyhStxoVG-xDbbK6rKiZNlBS8DCitVEjzvcQsGZp7hH1fy-y1hBXlvHat2dLpO_ulFTHbD8/s1767/persuasion_comparison_en.png">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAbb6ZfzRHqDeXuz6WWS-wnOEqjrb43_p9Sv_UjFiJsCUtbvKY9xJj0uapREhHOCAUuvROiQjmBUjMCizWNvG0vHvmimxu0ERvwePdIl0RvfQVOunnbjpOAyhStxoVG-xDbbK6rKiZNlBS8DCitVEjzvcQsGZp7hH1fy-y1hBXlvHat2dLpO_ulFTHbD8/s600/persuasion_comparison_en.png" alt="Comparación entre resultados de investigación y simulación" width="600">
  </a>
</p>
> *Comparación entre los resultados de la investigación y la simulación*
> *Fuente: Elaboración propia*

La imagen anterior compara las tasas de **persuasión (∆)** observadas en el estudio original (“Paper”) con aquellas obtenidas en la **simulación** realizada. En el eje horizontal se representan las cuatro condiciones experimentales: **Personalizado**, **Genérico**, **Alineado con Comunidad** y Base Humana, mientras que el eje vertical indica la proporción de comentarios que lograron cambiar la opinión del **OP**.

En primer lugar, se observa que en todos los casos la **simulación** reproduce de forma coherente el patrón jerárquico del estudio: la condición **Personalizada** presenta la tasa más alta, seguida de **Genérico**, luego **Alineado con Comunidad** y finalmente la Base Humana.

En segundo lugar, aunque las tasas simuladas son ligeramente superiores a las del paper en los dos primeros casos, 0.228 frente a 0.180 en **Personalizado** y 0.174 frente a 0.168 en **Genérico**, ambas se encuentran dentro o muy cerca de los intervalos de confianza al 95%, lo que indica que no existen diferencias estadísticamente significativas entre los valores simulados y los reportados.

Por otro lado, en el caso de **Alineado con Comunidad**, la tasa simulada es ligeramente inferior (0.078 frente a 0.090), aunque esta diferencia también cae dentro del margen esperado, reforzando la consistencia entre ambos modelos de evaluación.

Finalmente, la base humana, que representa la tasa promedio de **persuasión** entre usuarios reales, se mantiene casi idéntica en ambas mediciones (0.027 en el paper y 0.025 en la **simulación**), lo que valida la **simulación** como un reflejo fiable del comportamiento natural observado.

En definitiva, el gráfico anterior confirma que la **simulación** reproduce tanto las tasas como las relaciones relativas entre tratamientos, mostrando la utilidad del uso de los **autómatas celulares** como forma de estudio de este tipo de **difusión** de ideas.

## Conclusión: La IA como Agente de Manipulación Cognitiva Algorítmica
Los resultados obtenidos en la **simulación**, en estrecha correspondencia con los datos empíricos reportados en el estudio Can AI Change Your View?, permiten arribar a una conclusión inquietante: los sistemas de **inteligencia artificial**, especialmente los **modelos de lenguaje de gran escala (LLMs)**, poseen una capacidad tangible y mensurable para modificar creencias humanas, incluso en contextos sociales complejos y no controlados. Esta capacidad no se expresa en simples anécdotas, ni tampoco son de carácter marginal, sino que excede por amplio margen las tasas promedio de **persuasión** observadas entre usuarios humanos reales, ubicando a la **IA** entre los agentes más eficaces de cambio de opinión actualmente disponibles.

Esta capacidad es sustentada en que la “frialdad” emocional de la **IA** paradójicamente, potencia su eficacia al permitirle construir argumentos altamente racionales, alineados al perfil social y emocional del interlocutor, con una tasa de error mínima.

En términos sociales, el entorno de **Reddit** y la comunidad **r/ChangeMyView** proporcionan un marco casi ideal para la **diseminación** de ideas. Sin embargo, la eficacia observada de los agentes **IA** en este contexto puede extrapolarse a otras plataformas, especialmente aquellas en las que los usuarios están expuestos de manera continua a estímulos ideológicos personalizados. El modelo de **autómata celular** desarrollado en este trabajo confirma, mediante **simulación** controlada, que la dinámica de **persuasión** mediada por **IA** sigue patrones similares a los de una **difusión epidémica**: pequeñas intervenciones iniciales pueden, bajo ciertas condiciones de conectividad social y **umbral de influencia**, dar lugar a transformaciones cognitivas masivas en la red.

En suma, la **inteligencia artificial** ha demostrado no solo la capacidad de simular el lenguaje humano, sino de intervenir eficazmente en la opinión pública. Si esta capacidad no es reconocida, regulada y comprendida a profundidad, corremos el riesgo de abrir un nuevo capítulo de **desinformación algorítmica** de alta precisión, donde el consentimiento se convierte en una ilusión y la autonomía crítica en un objetivo fácilmente manipulable.

## Referencias
*   [Can AI Change Your View? Evidence from a Large-Scale Online Field Experiment](PLACEHOLDER_REF_URL_1)

*Etiquetas: Algorithmic Persuasion, Artificial Intelligence, Autómatas Celulares, Cellular Automata, Inteligencia Artificial, Persuasión Algorítmica*
