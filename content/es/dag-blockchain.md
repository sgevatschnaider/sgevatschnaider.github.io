## 1. Un grafo describe relaciones; un protocolo define reglas

Un **grafo acíclico dirigido**, o DAG, está formado por vértices y aristas orientadas sin ciclos dirigidos. Si seguimos las flechas, no podemos volver al punto de partida.

Los DAG sirven para representar dependencias entre tareas, versiones de datos y relaciones de precedencia. En sistemas distribuidos también pueden representar relaciones entre transacciones, bloques o mensajes.

La estructura del grafo no determina por sí sola cómo se alcanza el consenso. **Representación de datos, validez de transacciones y acuerdo entre participantes son capas relacionadas, pero distintas.**

## 2. Una cadena también tiene estructura de grafo

Una cadena de bloques puede representarse como un grafo en el que cada bloque referencia a su predecesor. Un DAG más general permite varias referencias y ramas. Lo importante es explicar qué representa cada vértice y qué significa cada arista.

| Estructura | Qué representa un vértice | Qué puede representar una arista |
|---|---|---|
| Cadena de bloques | Un bloque | Referencia al bloque anterior. |
| DAG de bloques | Un bloque | Referencias a varios bloques anteriores. |
| DAG de transacciones | Una transacción | Dependencias o aprobaciones, según el protocolo. |
| DAG de mensajes | Un mensaje | Relaciones causales entre mensajes. |

No todos los sistemas basados en DAG tienen transacciones como vértices. Tampoco todo vértice nuevo equivale a una confirmación definitiva de los anteriores.

## 3. Validar una transacción no es lo mismo que finalizarla

Validar puede incluir comprobar firmas, formato y condiciones de gasto. Resolver conflictos exige reglas para decidir qué transacciones pueden coexistir. Alcanzar finalidad implica establecer cuándo una decisión deja de poder revertirse dentro del modelo del protocolo.

Si dos transacciones intentan gastar el mismo recurso, un grafo puede representar ambas. El protocolo debe resolver el conflicto: el dibujo del DAG no lo elimina.

## 4. El consenso sigue siendo una pregunta central

Un sistema necesita explicitar sus supuestos: quién participa, cómo se resisten identidades falsas, qué proporción de participantes maliciosos se tolera y qué condiciones de red se requieren.

Usar un DAG no implica automáticamente prescindir de validadores, minería, staking, comisiones o coordinadores. Esas propiedades dependen de la construcción concreta.

El problema de los generales bizantinos ayuda a formular la dificultad de alcanzar acuerdo con participantes que pueden fallar o actuar maliciosamente. Un DAG es una herramienta de representación y, en ciertos protocolos, una pieza del mecanismo de consenso; no es una solución universal por sí mismo.

## 5. Cómo comparar escalabilidad sin confundir categorías

La nota histórica comparaba una blockchain genérica con un DAG genérico usando cifras fijas de transacciones por segundo. Esa comparación es demasiado amplia.

Para comparar sistemas necesitamos identificar la implementación, la carga, el hardware, la latencia, el criterio de finalidad y las condiciones de la prueba. También importa si las transacciones ejecutan contratos complejos o solo transfieren un activo.

Las comisiones y el rendimiento cambian con el diseño y la demanda. No se pueden inferir solo de que una estructura sea lineal o sea un DAG.

## 6. IOTA como ejemplo histórico y cambiante

La nota original de enero de 2025 mencionaba el Tangle de IOTA. Ese ejemplo debe leerse en su contexto temporal. IOTA anunció la migración de Stardust a la red Rebased para el 5 de mayo de 2025, con una nueva arquitectura y participación de validadores.

Por eso, una descripción del Tangle histórico no debe presentarse automáticamente como descripción vigente de IOTA. Para estudiar un proyecto concreto, conviene consultar la documentación de la versión que se está analizando.

## 7. Preguntas para estudiar un protocolo

- ¿Qué representa cada vértice y cada arista?
- ¿Cómo se detectan y resuelven transacciones incompatibles?
- ¿Qué participantes ordenan, validan o finalizan los datos?
- ¿Qué supuestos sostienen la seguridad?
- ¿En qué condiciones se midió el rendimiento?

Estas preguntas permiten pasar de una metáfora visual a una comprensión del sistema.

## Referencias

- [IOTA: guía de la actualización Rebased](https://blog.iota.org/rebased-mainnet-upgrade/).
- [DAG-Based Blockchain Systems](https://arxiv.org/abs/2312.09816), referencia conservada de la nota original.

Esta edición revisada distingue la estructura de datos del protocolo y conserva el texto histórico en el archivo.
