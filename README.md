# pq- Decision Procedure

A TypeScript implementation of the decision procedure for the pq- formal system from "Gödel, Escher, Bach: an Eternal Golden Braid" (1979) by Douglas Hofstadter.

## About

This project implements the decision procedure for validating theorems in the pq- formal system, which is introduced in Chapter II of GEB to demonstrate formal systems and mathematical reasoning.

## The pq-System (from the book)

The formal system of this Chapter is called the pq-system. It is not important to mathematicians or logicians-in fact, it is just a simple invention of mine. Its importance lies only in the fact that it provides an excellent example of many ideas that play a large role in this book. There are three distinct symbols of the pq-system:

p q -

The letters p, q, and the hyphen.

The pq-system has an infinite number of axioms. Since we can't write them all down, we have to have some other way of describing what they are. Actually, we want more than just a description of the axioms; we want a way to tell whether some given string is an axiom or not. A mere description of axioms might characterize them fully and yet weakly-which was the problem with the way theorems in the MIU-system were characterized. We don't want to have to struggle for an indeterminate-possibly infinite length of time, just to find out if some string is an axiom or not. Therefore, we will define axioms in such a way that there is an obvious decision procedure for axiomhood of a string composed of p's, q's, and hyphens.

DEFINITION: xp-qx- is an axiom, whenever x is composed of hyphens only.

Note that 'x' must stand for the same string of hyphens in both occurrences For example, - -p-q---is an axiom. The literal expression `xp-qx-' is not an axiom, of course (because 'x' does not belong to the pq-system); it is more like a mold in which all axioms are cast-and it is called an axiom schema. The pq-system has only one rule of production:

RULE: Suppose x, y, and z all stand for particular strings containing only hyphens. And suppose that x py qz is known to be a theorem. The 'xpy-qz-' is a theorem.

For example, take x to be'--', y to be'---', and z to be'-'. The rule tells us:

If --p---q- turns out to be a theorem, then so will --p----q--.

## Installation

To install dependencies:

```bash
bun install
```
