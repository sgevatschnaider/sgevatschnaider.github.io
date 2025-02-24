# Inteligencia Artificial, modelo de agentes y teoría de los grafos

[🌐 Cambiar idioma (English)](https://economiayetica.blogspot.com/2025/02/inteligencia-artificial-modelo-de.html)

---

## Diagrama del AI Co‑Scientist

![Diagrama AI Co‑Scientist](https://raw.githubusercontent.com/sgevatschnaider/sgevatschnaider.github.io/be2b35c1873e58e2ce7feb4d84e300856dc0aded/ai_co_scientist_hierarchical%20(1).gif)  
*Fuente: Elaboración propia basada en el paper **Towards an AI co‑scientist***

---

## 1) Introducción

El texto es un intento de comprender el modelo de los agentes que tienen múltiples aplicaciones en **Inteligencia Artificial** a partir de la lectura del paper **Towards an AI co‑scientist** de investigadores de Google.

*Fuente: Elaboración propia en base al paper **Towards an AI co‑scientist***

---

## 2) Imagina una Inteligencia Artificial que Descubre Medicinas

En la investigación científica, la generación de nuevas hipótesis es un proceso complejo que requiere el análisis de grandes volúmenes de información y múltiples validaciones. Ahora, uno debe imaginar un sistema de **inteligencia artificial** que puede formular hipótesis científicas, evaluarlas y mejorarlas de manera autónoma.

Este es el concepto detrás del **AI Co‑Scientist**, un sistema basado en una arquitectura de **Sistemas Jerárquicos Multi‑Agente (HMAS)** que organiza distintos agentes de IA en niveles de autoridad y cooperación. Para comprender su funcionamiento, la **teoría de grafos** es una herramienta esencial, ya que nos permite modelar su estructura, visualizar el flujo de información y analizar cómo los agentes colaboran para acelerar el descubrimiento científico.

---

## 3) Sistemas Jerárquicos Multi‑Agente (HMAS) y su Aplicación en el AI Co‑Scientist

Un **Sistema Jerárquico Multi‑Agente (HMAS)** es una arquitectura en la que múltiples agentes inteligentes están organizados en diferentes niveles según su función y capacidad de toma de decisiones. Su estructura jerárquica permite una comunicación optimizada, división de tareas y una mayor escalabilidad.

El **AI Co‑Scientist** es un ejemplo de HMAS aplicado a la investigación científica, ya que organiza agentes en niveles jerárquicos: los agentes de alto nivel supervisan y coordinan el trabajo de agentes subordinados. Además, divide el proceso de generación de hipótesis en subtareas, asignando a cada agente un rol específico. La autonomía de los agentes les permite operar de manera independiente dentro de su función, mientras que la cooperación y el flujo de información entre ellos optimizan la validación de hipótesis. Su diseño adaptable y escalable permite la incorporación de nuevos agentes y la reconfiguración de procesos según la complejidad del problema.

Este sistema puede modelarse con **teoría de grafos**, lo que permite representar sus interacciones y procesos de manera estructurada.

---

## 4) Modelando el AI Co‑Scientist con Teoría de Grafos

El **AI Co‑Scientist** puede representarse como un grafo dirigido **G = (V, E)**, donde los nodos representan los agentes especializados dentro del sistema y las aristas dirigidas indican el flujo de información entre ellos. De manera opcional, se pueden agregar pesos en las aristas para representar la relevancia o prioridad de ciertas interacciones.

Más precisamente, puede representarse mediante un **grafo dirigido cíclico (DAG parcial)** con algunos ciclos de retroalimentación, en el que existe una red multiagente en la que cada agente tiene roles especializados y se comunica dinámicamente. Se expresa como un grafo de flujo de información, similar a modelos de sistemas distribuidos. Dicha representación es la que encabeza esta nota.

---

## 5) Tipos de Grafos Aplicados al AI Co‑Scientist

La organización del **AI Co‑Scientist** tiene la estructura de un **grafo dirigido**, lo que facilita la asignación de tareas y la toma de decisiones a distintos niveles. Además, los agentes necesitan intercambiar información de manera eficiente, lo que se modela con un **grafo de comunicación**, en el que las conexiones entre nodos representan el flujo de datos. Para la comparación de hipótesis, el **Ranking Agent** emplea un **grafo ponderado**, similar a un ranking Elo en ajedrez, donde cada nodo es una hipótesis y las aristas indican comparaciones entre ellas. Finalmente, el **Proximity Agent** organiza un **grafo de similitud**, donde los nodos representan hipótesis y las aristas conectan aquellas con contenido similar.

---

## 6) Ejemplo de Aplicación en Descubrimiento Biomédico

El **AI Co‑Scientist** se ha utilizado en biomedicina para el redescubrimiento de fármacos, la identificación de nuevos objetivos terapéuticos y el estudio de la evolución de la resistencia antimicrobiana. En el primer caso, el sistema busca medicamentos existentes que puedan tratar nuevas enfermedades. Para el descubrimiento de objetivos terapéuticos, identifica nuevas moléculas o genes clave en enfermedades específicas. Finalmente, en la evolución de la resistencia antimicrobiana, analiza cómo las bacterias desarrollan resistencia a antibióticos, permitiendo predecir nuevas estrategias terapéuticas.

---

## 7) Conclusión

El **AI Co‑Scientist** es un ejemplo avanzado de **Sistemas Jerárquicos Multi‑Agente (HMAS)** aplicados a la investigación científica. Gracias a la **teoría de grafos**, es posible modelar su estructura y visualizar cómo la información fluye dentro del sistema, permitiendo optimizar su eficiencia.

---

## Tabla de Modelos en Teoría de Grafos para el AI Co‑Scientist

**Componente del AI Co‑Scientist** | **Modelo en Teoría de Grafos**  
--- | ---  
Organización de agentes | Grafo dirigido jerárquico (similar a un árbol, pero con ciclos y retroalimentación)  
Flujo de información | Grafo dirigido acíclico parcial (DAG parcial), con algunas conexiones de retroalimentación  
Comparación de hipótesis | Grafo dirigido ponderado (modelo de torneo con evaluación y ranking)  
Similitud entre hipótesis | Grafo de proximidad (grafo no dirigido con agrupamiento de hipótesis similares)  

*Fuente: Elaboración propia*

---

## Referencias

- [**Towards an AI co‑scientist**](https://storage.googleapis.com/coscientist_paper/ai_coscientist.pdf)  
- [**Blog de Google**](https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/)

