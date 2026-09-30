## 1. When a convincing answer is not a true answer

A language model may produce a fluent explanation, cite a non-existent paper or combine incompatible facts. The answer sounds convincing, but its content is unsupported. This kind of output is commonly called a **hallucination**.

Two problems should be distinguished: a claim may be false about the world, or it may contradict the documents provided to the model. The distinction matters because evaluation and correction strategies also differ.

**Example.** We ask for the author of a specific paper. The model gives a plausible name. To assess the answer, plausibility is insufficient: we need to check the original paper.

## 2. Mitigation tools and their limits

| Tool | What it contributes | What it does not guarantee |
|---|---|---|
| Retrieval-augmented generation, or RAG | Lets the system consult relevant documents before generating an answer. | That the correct document is retrieved or correctly interpreted. |
| Self-consistency | Compares several responses or reasoning trajectories and looks for agreement. | That several agreeing responses are true. |
| Reasoning and decomposition | Organises a problem into steps that can be examined. | That an extended explanation is a valid proof. |
| Tool-based verification | Checks calculations, citations and claims against external resources. | That the tool or source is suitable for every claim. |
| Abstention | Allows the system to acknowledge missing evidence. | That it always recognises the limits of its knowledge. |

These tools can reduce errors on specific tasks. Their effectiveness should be measured using relevant examples, verifiable sources and an explicit evaluation criterion.

## 3. Reading theoretical limits carefully

In *LLMs Will Always Hallucinate, and We Need to Live With This*, Sourav Banerjee, Ayushi Agarwal and Saloni Singla present an argument about structural limitations, drawing on computation theory and undecidable problems. This is the theoretical position of that paper, which should be read with attention to its definitions and assumptions.

It does not follow directly that every concrete question will receive a wrong answer, or that all mitigation strategies are useless. **The absence of a universal correctness guarantee and accuracy on a bounded task are different questions.**

## 4. Gödel and the halting problem: what they do and do not say

Gödel’s incompleteness theorems concern formal systems satisfying specific conditions. A language model does not automatically become one of those systems merely because it produces text or uses mathematical operations.

The halting problem establishes that no general algorithm can decide, for every program and every input, whether the program will terminate. It does not mean that an LLM implementation cannot enforce a token limit. A system can stop generation after a defined budget.

These results help us think about general limits of computational procedures. Connecting those limits to observable model behaviour requires a precise argument; an analogy cannot replace it.

## 5. Retrieving a needle is not always an undecidable problem

Searching a finite collection of documents can be a computable task. A different question is whether a retrieval system finds the relevant passage or whether a model uses a long context correctly.

*Needle in a haystack* experiments therefore evaluate practical capabilities under specific conditions. They should not automatically be confused with an undecidability theorem covering every document search.

## 6. From confidence in tone to confidence in evidence

When examining an answer, ask: what claim is being made? What source supports it? Does the source actually say that? Can the calculation be reproduced? What remains uncertain?

A useful response may include limitations, alternatives or a request for more information. Evaluation improves when we examine evidence and the scope of a claim as well as the fluency of the text.

## References

- Banerjee, Agarwal and Singla: [LLMs Will Always Hallucinate, and We Need to Live With This](https://arxiv.org/abs/2409.05746).
- Huang and colleagues: [A Survey on Hallucination in Large Language Models](https://arxiv.org/abs/2311.05232).

This revised edition clarifies conceptual distinctions in the January 2025 note. The original text remains available in the archive.
