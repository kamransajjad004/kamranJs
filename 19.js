/* 
| Original   | Converted to Number | Converted to String | Converted to Boolean |
|-------------|--------------------|---------------------|----------------------|
| false       | 0                  | "false"             | false                |
| true        | 1                  | "true"              | true                 |
| 0           | 0                  | "0"                 | false                |
| 1           | 1                  | "1"                 | true                 |
| "0"         | 0                  | "0"                 | true                 |
| "1"         | 1                  | "1"                 | true                 |
| NaN         | NaN                | "NaN"               | false                |
| Infinity    | Infinity           | "Infinity"          | true                 |
| -Infinity   | -Infinity          | "-Infinity"         | true                 |
| ""          | 0                  | ""                  | false                |
| "20"        | 20                 | "20"                | true                 |
| "twenty"    | NaN                | "twenty"            | true                 |
| null        | 0                  | "null"              | false                |
| undefined   | NaN                | "undefined"         | false                |

*/
