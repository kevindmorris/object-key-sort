# 🧼 @kevindmorris/object-sort

Get your keys sorted.

## Getting Started

Using npm:

```
npm i @kevindmorris/object-sort
```

## Usage

### sortBy

Sort an object's keys.

**Parameters:**

- **object:** An object.
- **options:** An options object.
- **options.nested:** Whether to sort any nested objects or not.

**Returns:**

- A sorted object.

**Example Usage:**

Import:

```
import { sortKeys } from "@kevindmorris/object-sort"

sortKeys({ c: 3, b: 2, a: 1 });
// => { a: 1, b: 2, c: 3 }
```

```
import { sortKeys } from "@kevindmorris/object-sort"

sortKeys({ c: 3, b: 2, a: { y: 2, x: 1 } }, { nested: true });
// => { a: { x: 1, y: 2 }, b: 2, c: 3 }
```

```
import { sortKeys } from "@kevindmorris/object-sort"

sortKeys({ c: 3, b: 2, a: { y: 2, x: 1 } }, { nested: false });
// => { a: { y: 2, x: 1 }, b: 2, c: 3 }
```
