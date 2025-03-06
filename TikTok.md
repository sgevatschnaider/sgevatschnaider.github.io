# Cómo TikTok Sabe lo que Quieres Ver: Inteligencia Artificial y Matemáticas en su Algoritmo

* [🇬🇧 English](https://economiayetica.blogspot.com/2025/03/como-tiktok-sabe-lo-que-quieres-ver-ia.html)

![Representación de TikTok en el centro como una red neuronal](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcSGzr3kBBuSaCQ-PFYGqCkbPGykh0Y6AZcKbaUolMZ9eKMxG49nO8Mb13yyP68POd0dFMMgaoej5ay54C19V5xtIOoNHOpuHszhOqn4OIxGcFyScvooxA4UfdvGj1Y-SaEzHvvFcr_VyIh39IuSeHePoef7LpCAY-ywMdwCjoSK9WSTtklDOKDmzRrfU)
> *Representación de TikTok en el centro como una red neuronal*

## Índice
1. Introducción  
2. ¿Qué es TikTok y por qué es relevante?  
3. ¿Cómo funciona técnicamente el algoritmo de recomendación de TikTok?  
4. Graph Neural Networks (GNN): Explicación técnica  
5. Fórmula matemática del modelo de recomendación  
6. Interpretación gráfica del modelo aplicado al Usuario A  
7. Conclusión  
8. Referencias  

---

## 1. Introducción
Los algoritmos de recomendación son un claro ejemplo del poder transformador de las matemáticas, con un impacto significativo en la sociedad, la economía y la política. Estos sistemas están presentes en múltiples plataformas digitales, moldeando la forma en que consumimos contenido y tomamos decisiones.

En mis clases sobre Big Data y Teoría de Grafos siempre busco conectar estos conceptos clave con ejemplos prácticos cercanos a los estudiantes. Uno de los ejemplos más populares y relevantes es el algoritmo de recomendaciones de TikTok.

Si bien el algoritmo exacto de TikTok es un secreto empresarial, diversas investigaciones académicas han analizado modelos similares basados en Graph Neural Networks (GNN). Estas redes neuronales avanzadas permiten generar recomendaciones altamente personalizadas, lo que explica la efectividad del sistema de TikTok.

---

## 2. ¿Qué es TikTok y por qué es relevante?
TikTok es una plataforma de redes sociales que permite a los usuarios crear, compartir y descubrir videos cortos. Desde su lanzamiento en 2016, la plataforma ha experimentado un crecimiento exponencial, superando los mil millones de usuarios activos mensuales en todo el mundo, convirtiéndose en una fuerza significativa en términos culturales, económicos y políticos.

---

## 3. ¿Cómo funciona técnicamente el algoritmo de recomendación de TikTok?
El algoritmo de TikTok se basa esencialmente en **matemática aplicada** mediante técnicas avanzadas de **Machine Learning** y análisis masivo de datos (**Big Data**). Si múltiples usuarios interactúan positivamente con tipos similares de videos (por ejemplo: Baile, Comedia, Tutoriales), el algoritmo recomienda automáticamente otros contenidos relacionados (como Lip Sync, Deportes o Bromas). Este enfoque se denomina _filtrado colaborativo_ y permite realizar recomendaciones personalizadas a gran escala y en tiempo real.

---

## 4. Graph Neural Networks (GNN): Explicación técnica
Las Graph Neural Networks son redes neuronales especializadas en manejar datos estructurados en forma de grafos. En estos grafos, los nodos representan entidades (usuarios y videos), mientras que las aristas capturan sus relaciones o interacciones. Las GNN aprenden representaciones (_embeddings_) mediante la agregación iterativa de información desde los nodos vecinos, facilitando recomendaciones altamente personalizadas.

---

## 5. Fórmula matemática del modelo de recomendación
La puntuación final de recomendación integra tres elementos clave:

\[ R = w_1 \cdot I + w_2 \cdot C + w_3 \cdot V \]

- **I** mide la interacción histórica mediante *embeddings*.  
- **C** evalúa las propiedades del contenido (tipo, duración).  
- **V** mide el potencial viral basado en interacciones (likes, comentarios, compartidos).  
- **w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>** son pesos entrenables que ajustan la importancia relativa de cada factor.

---

## 6. Interpretación gráfica del modelo aplicado al Usuario A
![Gráfica explicativa del modelo para el Usuario A](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-KkBpJpHLLAm4hhDuaS94uuJFob_vLBC5SmL98Vm4XB6vcnX_TfEhVN3Jl3oVdfw6bIszivMIY8sBRaW__sw4wFEbC9igj2UnxRIWMkSnvBLz7B6eiOuP5CpyHUz0Ufu2PW6T55VuxjgymyP8pfwd-qJ89dqq3PFodpbwF9TvSZa7o06fbCZR5hFgbzE)
> *Contribución de cada término de la fórmula en la recomendación (Imagen A)*  
> *Fuente: Elaboración propia*

---

## 7. Conclusión
El análisis del algoritmo de TikTok demuestra cómo la combinación de matemáticas avanzadas, Machine Learning y Big Data puede influir en nuestra experiencia digital de manera imperceptible pero profunda. La clave del éxito de TikTok radica en su capacidad para entender los intereses individuales de cada usuario con una precisión sorprendente, manteniéndolos enganchados a través de recomendaciones altamente personalizadas.

Comprender estos mecanismos no solo es esencial para quienes estudian Inteligencia Artificial y Ciencia de Datos, sino también para entender el alto impacto que tienen estos algoritmos.

---

## 8. Referencias
[Ver Video (Explicación de Shou Chew)](https://www.tiktok.com/@tedtoks/video/7225292301864635694)
