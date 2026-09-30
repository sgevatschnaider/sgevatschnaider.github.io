## 1. A graph describes relationships; a protocol defines rules

A **directed acyclic graph**, or DAG, consists of vertices and oriented edges with no directed cycles. Following the arrows cannot bring us back to the starting point.

DAGs can represent task dependencies, data versions and precedence relationships. In distributed systems, they can also represent relationships between transactions, blocks or messages.

Graph structure alone does not determine how consensus is reached. **Data representation, transaction validity and agreement between participants are related but distinct layers.**

## 2. A chain is also a graph structure

A blockchain can be represented as a graph where each block references its predecessor. A more general DAG permits several references and branches. The important questions are what each vertex represents and what each edge means.

| Structure | What a vertex represents | What an edge may represent |
|---|---|---|
| Chain of blocks | A block | A reference to the previous block. |
| Block DAG | A block | References to several earlier blocks. |
| Transaction DAG | A transaction | Dependencies or approvals, depending on the protocol. |
| Message DAG | A message | Causal relationships between messages. |

Not every DAG-based system uses transactions as its vertices. Nor does every new vertex provide final confirmation of the earlier ones.

## 3. Validating a transaction is not the same as finalising it

Validation may include checking signatures, formatting and spending conditions. Resolving conflicts requires rules determining which transactions can coexist. Finality establishes when a decision can no longer be reversed within the protocol’s model.

If two transactions try to spend the same resource, a graph can represent both. The protocol must resolve the conflict: drawing a DAG does not eliminate it.

## 4. Consensus remains a central question

A system must make its assumptions explicit: who participates, how false identities are resisted, what proportion of malicious participants can be tolerated and what network conditions are required.

Using a DAG does not automatically mean dispensing with validators, mining, staking, fees or coordinators. Those properties depend on the specific construction.

The Byzantine generals problem helps formulate the difficulty of reaching agreement when participants may fail or behave maliciously. A DAG is a representation tool and, in some protocols, part of the consensus mechanism; it is not a universal solution by itself.

## 5. Comparing scalability without confusing categories

The historical note compared a generic blockchain with a generic DAG using fixed transactions-per-second figures. That comparison is too broad.

To compare systems, we need to identify the implementation, workload, hardware, latency, finality criterion and test conditions. It also matters whether transactions execute complex contracts or simply transfer an asset.

Fees and performance change with design and demand. They cannot be inferred solely from whether a structure is linear or a DAG.

## 6. IOTA as a historical and changing example

The original January 2025 note mentioned IOTA’s Tangle. That example should be read in its historical context. IOTA announced a migration from Stardust to the Rebased network for 5 May 2025, with a new architecture and validator participation.

A description of the historical Tangle should therefore not automatically be presented as a current description of IOTA. When studying a specific project, consult documentation for the version being analysed.

## 7. Questions for studying a protocol

- What does each vertex and edge represent?
- How are incompatible transactions detected and resolved?
- Which participants order, validate or finalise data?
- What assumptions support security?
- Under what conditions was performance measured?

These questions help us move from a visual metaphor to an understanding of the system.

## References

- [IOTA: guide to the Rebased upgrade](https://blog.iota.org/rebased-mainnet-upgrade/).
- [DAG-Based Blockchain Systems](https://arxiv.org/abs/2312.09816), retained from the original note.

This revised edition distinguishes data structure from protocol and preserves the historical text in the archive.
