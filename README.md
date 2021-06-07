# exsample for typedoc-plugin-merge-modules

```
src
├── index.ts
├── module1
│   └── index.ts
├── module2
│   ├── functionA.ts
│   ├── functionB.ts
│   └── index.ts
├── module3.ts
└── module4
    ├── index.ts
    └── submodule
        ├── functionA.ts
        ├── functionB.ts
        └── index.ts

4 directories, 10 files
```

v20-with-plugin | v20-bad | v20 | v19
---|---|---|---
TypeDoc v20 with `typedoc-plugin-merge-modules` | TypeDoc v20 with duplicate module definition | plane TypeDoc v20 | TypeDoc v19 with `typedoc-plugin-external-module-name`
![v20-with-plugin](./resources/v20-with-plugin.png) | ![v20-bad](./resources/v20-bad.png) | ![v20](./resources/v20.png) | ![v19](./resources/v19.png)
