# Flexibilidad, grafos y arquitecturas neuronales: El caso de Qwen 2.5

[English](https://economiayetica.blogspot.com/2025/02/flexibilidad-grafos-y-arquitecturas_53.html)

![Dinámica de interconexión en grafo](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSYT6N1_pzDA51MbYvty-gvmgWYJlURfTt9v4j0CA7BczoFvUlDhyRh6iDGPqdiwtpahph-xfhazwaLseSi9s5qGSOG0V09mkbGN4DzKBbNu629SGKItVLhenap6ti-05iPHMDGyfoRqqPII6n4gvXnriXBpIGRG7xiBnSh-otknyziZkqbHNc20BKc9g/s320/20250202_0545_Graph%20Interconnection%20Dynamics_simple_compose_01jk2xbw1vf8tr5vqecyrwf70y.gif)

## 1. Modelos densos versus MoE

El objetivo de esta nota es analizar, usando teoría de los grafos, la diferencia entre la arquitectura de un modelo denso y un MoE (Mixture of Experts), tomando como ejemplo el reciente modelo desarrollado por Alibaba: **Qwen 2.5**.

## 2. ¿Qué son los modelos densos en el contexto de redes neuronales y modelos de lenguaje?

Un modelo denso (**Dense Model**) es un tipo de modelo de red neuronal en el que todos los parámetros se activan y utilizan en cada paso de inferencia o entrenamiento. Esto significa que cada una de las neuronas o unidades de la arquitectura contribuye significativamente al procesamiento de los datos en cada iteración.

Las siguientes son las características clave de los modelos densos:

- **Todos los parámetros se utilizan simultáneamente:** En cada forward pass (paso de inferencia) o backward pass (paso de entrenamiento), todas las capas y parámetros participan. Esta característica los diferencia de los modelos MoE, en los cuales solo se activa un subconjunto de expertos en cada inferencia.
- **Uso de memoria y cómputo constante:** Al estar todas las conexiones activas todo el tiempo, el consumo de memoria y cómputo es predecible y fijo, dependiendo del número total de parámetros.
- **Generalmente más fáciles de implementar:** Su estructura uniforme y simple facilita el entrenamiento, sin requerir el enrutamiento de expertos que demandan los modelos MoE.

Con esta definición, pasamos a estudiar el reciente modelo de la empresa Alibaba.

## 3. ¿Qué es Qwen 2.5?

Recientemente, Alibaba lanzó **Qwen 2.5**, el cual enriquece el ecosistema chino de Inteligencia Artificial y, debido a la creciente influencia de los sistemas de IA, su impacto se extiende más allá de China. Qwen 2.5 es una serie de modelos de lenguaje a gran escala (LLMs) diseñados para ofrecer una mejor comprensión del lenguaje, generación de texto, razonamiento, matemáticas y programación. Forma parte de la evolución de la familia Qwen, destacándose por su escalabilidad y eficiencia en comparación con versiones anteriores.

El modelo está disponible en dos formatos principales:

- **Modelos de código abierto ("Open-Weight")**: Accesibles en Hugging Face y otros repositorios.
- **Modelos propietarios (API en la nube)**: Optimados para una inferencia rápida mediante técnicas MoE.

Para el propósito de esta nota se destacan dos implementaciones de Qwen 2.5, cada una con una arquitectura diferente:

**Comparativa:**

| Característica             | Qwen2.5 Open-Weight (Modelo Denso)                | Qwen2.5-Turbo / Plus (MoE)                                           |
|----------------------------|---------------------------------------------------|----------------------------------------------------------------------|
| **Arquitectura**           | Dense Transformer                                 | Mixture of Experts (MoE)                                             |
| **Parámetros Activos**     | Se usan todos los parámetros en cada inferencia   | Solo se activa una fracción de parámetros por consulta               |
| **Uso de Cómputo**         | Alto, ya que todas las capas se activan siempre   | Más eficiente, usando solo los expertos más relevantes               |
| **Escalabilidad**          | Limitada, requiere más GPUs para crecer           | Mayor, puede expandirse sin aumentar el cómputo proporcionalmente      |
| **Eficiencia en Inferencia** | Más costosa y lenta                             | Más rápida y optimizada para producción                              |
| **Disponibilidad**         | Open-weight (código abierto)                      | Disponible vía API en Alibaba Cloud                                  |

*Fuente: Elaboración propia*

Por ejemplo, **Qwen2.5 Open-Weight** es un modelo denso; todas sus capas y conexiones se activan en cada inferencia, lo que lo hace ideal para investigación en hardware de alto rendimiento, aunque con un costo computacional elevado. En cambio, **Qwen2.5-Turbo** y **Qwen2.5-Plus**, al ser modelos MoE, activan solo algunas partes según la entrada, reduciendo el consumo de memoria y acelerando la inferencia, lo que resulta más eficiente para aplicaciones en la nube.

## 4. Teoría de los grafos y arquitectura computacional

Desde el punto de vista de la teoría de grafos, un modelo denso puede interpretarse como un **grafo denso**, en el que todos los nodos (neuronas) están altamente conectados. Un grafo denso es aquel en el que el número de aristas (conexiones entre nodos) se acerca al máximo posible. Para un grafo dirigido con `N` nodos, el número máximo de aristas es `N(N-1)` (cada nodo puede conectarse con todos los demás).

Formalmente, la densidad de un grafo dirigido `G = (V, E)` se define como:

D(G) = |E| / (|V|(|V| - 1))

markdown
Copiar

Donde:
- `|V|` es el número de nodos (neuronas o capas de la red)
- `|E|` es el número de conexiones (pesos sinápticos).

Si la densidad se acerca a 1, el grafo se considera denso; si se acerca a 0, es disperso (*sparse*).

En Deep Learning, un modelo denso se asemeja a un grafo casi completamente conectado, en el que:
- Las capas forman los nodos.
- Las conexiones sinápticas representan las aristas.
- Cada nodo de una capa se conecta con todos los nodos de la siguiente (como en una fully connected layer).

## Conclusión

El uso de modelos densos y MoE se refleja en la eficiencia del modelo y puede representarse mediante grafos. Los modelos densos (**Qwen2.5 Open-Weight**) tienen una densidad de grafo cercana a 1, utilizando todas las conexiones posibles, lo que implica un mayor uso de memoria y cómputo pero ofrece mayor consistencia en las respuestas. En contraste, los modelos MoE (**Qwen2.5-Turbo** y **Qwen2.5-Plus**) tienen una densidad mucho menor, activando solo una fracción de expertos por inferencia, lo que permite escalabilidad sin un incremento proporcional en el costo de hardware.

![Grafos Completos](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQtx6hUt9Vu_a-kVpLrj40BR_Hyhxc8zscng-88kB9vXLqF9xlcFLiivXR5uFeahe6tPssbksDsxHsKfDz_kKxBM_TPBpIwyOjlA7WPLwtJJcSPEsInVcFUzbToNjapspjPC0LDqf2YELbcAgzRiWWPAFoeWzx439Ypt5rYF2VOL5Ussn3Mr7b9CrOQBU/s320/grafos%20completos.gif)

Video generado por Qwen 2.5 representando un grafo denso y un grafo disperso.

[Reference: Qwen 2.5 Technical Report](https://arxiv.org/abs/2412.15115)
