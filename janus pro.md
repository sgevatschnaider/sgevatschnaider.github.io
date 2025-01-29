# Janus-Pro: China en la era de la inteligencia artificial

[**English Version**](https://economiayetica.blogspot.com/2025/01/janus-pro-nuevo-modelo-multimodal.html)

---

## Imagen generada por Janus-Pro

[![Dragón generado por Janus-Pro](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2iWc7ntKcjabvTgW-V8r-4ifTxDd-g31rtKMX_IFoDE92011Oor_FsnoymKiuEGeMKZZOTLOpb7GladDXczkbjV2Wg2Xhjd84Sav6gkKMwyOZX2TFVA5IUxrs2Mnl8rYZ3yEL0iJ2fcLW051v25IW0Hlg2Q4IuOvmb5JR9kOFBiiaaFJniWk7l344NOw/s320/dragon%20generado%20por%20janus.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2iWc7ntKcjabvTgW-V8r-4ifTxDd-g31rtKMX_IFoDE92011Oor_FsnoymKiuEGeMKZZOTLOpb7GladDXczkbjV2Wg2Xhjd84Sav6gkKMwyOZX2TFVA5IUxrs2Mnl8rYZ3yEL0iJ2fcLW051v25IW0Hlg2Q4IuOvmb5JR9kOFBiiaaFJniWk7l344NOw/s768/dragon%20generado%20por%20janus.jpg)

Imagen generada por medio de Janus-Pro

---

## 1. Introducción

El objetivo de esta nota es analizar el nuevo modelo generador de imágenes, su arquitectura, comparándola con los modelos de difusión.

### 1.1 ¿Qué es Janus-Pro?

Janus-Pro es un modelo multimodal avanzado desarrollado por DeepSeek-AI, diseñado para integrar y optimizar las capacidades de comprensión y generación de imágenes y texto en un solo marco arquitectónico. Es una evolución directa de su predecesor, Janus, con mejoras significativas en rendimiento, escalabilidad y estabilidad.

---

## 2. ¿Cómo Funciona Janus-Pro?

### 2.1 Arquitectura desacoplada

Los modelos multimodales son sistemas de inteligencia artificial capaces de procesar y combinar múltiples tipos de datos o "modalidades", como texto, imágenes, audio y video, en un mismo modelo.

Janus-Pro se basa en un diseño que resuelve uno de los problemas principales de los modelos multimodales: la interacción entre las tareas de comprensión y generación visual. Este problema surge porque estas tareas requieren representaciones diferentes de la misma entrada (imágenes o texto). Para abordarlo, Janus-Pro introduce una arquitectura desacoplada formada por los componentes siguientes:

**A. Codificadores separados:**

- **Codificador de comprensión:** Diseñado específicamente para extraer información semántica de imágenes. Esto incluye identificar objetos, relaciones y patrones dentro de la imagen. Por ejemplo, analizar una imagen para responder preguntas como: "¿Cuántos árboles hay en esta foto?".

- **Codificador de generación:** Convierte las imágenes en una secuencia de tokens discretos (IDs visuales), lo que facilita su manejo por el modelo de lenguaje. Esto es crucial para generar imágenes basadas en descripciones textuales.

Luego de la comprensión y la generación viene la etapa del transformador:

**B. Transformador autorregresivo unificado:**

- Ambos tipos de representaciones (textuales y visuales) son procesados por un transformador autorregresivo común, lo que permite una interacción fluida entre texto e imágenes.

- Este transformador:
  - Integra y alinea texto e imágenes en una sola representación.
  - Predice salidas en secuencia, ya sea un texto o una imagen, garantizando coherencia semántica.

### 2.2 Proceso de generación

El proceso de generación en Janus-Pro está optimizado para traducir texto en imágenes de alta calidad, siguiendo un flujo paso a paso:

1. Conversión del texto en tokens  
2. Traducción a características visuales

**Ventajas del enfoque**  
- *Precisión semántica:* Gracias a los codificadores separados, Janus-Pro entiende mejor los detalles en descripciones textuales y los traduce con mayor fidelidad a imágenes.  
- *Estabilidad y calidad:* La mezcla de datos reales y sintéticos mejora la consistencia y la estética de las imágenes generadas.  
- *Versatilidad:* El uso de tokens visuales permite a Janus-Pro manejar prompts complejos y generar imágenes coherentes incluso con descripciones cortas.

---

## Ejemplo de Arquitectura

[![Arquitectura Janus-Pro](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidWdewl2jKM-uNb5lhJbNuzzEtxi7hNn5eTnJ1_MphobfnEsfn1eNIV2tXff1yejDypmha8vm8HyFgcygCAaqVnNw7636SJPAMj2SUazmHo3uqKcGNHVcL9lEk0B1LO4M9W_PEnpvfMRfzc0F_KVtV_Lk125eHbXEOoeEzwiMKPaYvNzlerLvKeSqeuNo/s320/arquitectura.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidWdewl2jKM-uNb5lhJbNuzzEtxi7hNn5eTnJ1_MphobfnEsfn1eNIV2tXff1yejDypmha8vm8HyFgcygCAaqVnNw7636SJPAMj2SUazmHo3uqKcGNHVcL9lEk0B1LO4M9W_PEnpvfMRfzc0F_KVtV_Lk125eHbXEOoeEzwiMKPaYvNzlerLvKeSqeuNo/s657/arquitectura.png)

La figura representa cómo Janus-Pro maneja dos tareas diferentes: por un lado la comprensión Multimodal (lado izquierdo, azul) y por otro la generación de Imágenes (lado derecho, amarillo). Ambas tareas están conectadas a un transformador autorregresivo unificado, que actúa como el núcleo del modelo, procesando texto e imágenes de manera fluida.  
*Fuente: Janus-Pro: Unified Multimodal Understanding and Generation with Data and Model Scaling*

---

## 3. ¿Qué es difusión y por qué Janus-Pro no la utiliza?

Los modelos de difusión son un enfoque popular en la generación de imágenes, que funciona eliminando gradualmente el ruido de una imagen hasta generar una visualización coherente. Es como comenzar con un lienzo completamente borroso y mejorar poco a poco los detalles en múltiples pasos. Ejemplos notables incluyen Stable Diffusion y DALL-E.

Sin embargo, Janus-Pro no utiliza este método. En lugar de ello, emplea un transformador autorregresivo, que genera imágenes token por token de manera secuencial, en un flujo unificado que combina texto e imágenes. Este enfoque reduce la necesidad de múltiples iteraciones (características de la difusión), siendo más eficiente y ligero para ciertas tareas.

**Tabla comparativa: Modelos de Difusión vs. Janus-Pro**  

[![Tabla comparativa Modelos de Difusión vs. Janus-Pro](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCYU5xOlWxEKXdcoJGuQX-camwKkzDl40eWzJK8CyFz_HGMa5IKCz8F2x6rMPu6hBCVgO7pJi-h0-9fF_m9_rcOjemgRdOroJdzSHRgvLRgCaS6ACWNzydY1EiPshDmmPjXPHOBbWBMFkh6BbCfBE6mncbzmaQogfftSGR4UHkQfCWH3yMUhygWN4w2HA/s320/tabla%20comparativa%20modelos%20difusion%20janus%20espa%C3%B1ol.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCYU5xOlWxEKXdcoJGuQX-camwKkzDl40eWzJK8CyFz_HGMa5IKCz8F2x6rMPu6hBCVgO7pJi-h0-9fF_m9_rcOjemgRdOroJdzSHRgvLRgCaS6ACWNzydY1EiPshDmmPjXPHOBbWBMFkh6BbCfBE6mncbzmaQogfftSGR4UHkQfCWH3yMUhygWN4w2HA/s753/tabla%20comparativa%20modelos%20difusion%20janus%20espa%C3%B1ol.png)

*Fuente: Elaboración propia*

**Conclusión**  
Se puede observar que si bien los modelos de difusión son potentes para la generación de imágenes de alta resolución y calidad artística, el enfoque basado en transformadores autorregresivos de Janus-Pro logra resultados notables, es ligero y mejor adaptado para combinar tareas de comprensión y generación. Esto lo convierte en una solución ideal para aplicaciones prácticas multimodales.

---

## Referencias

- [**Janus-Series**](https://github.com/deepseek-ai/Janus)  
- [**Paper**](https://github.com/deepseek-ai/Janus/blob/main/janus_pro_tech_report.pdf)
