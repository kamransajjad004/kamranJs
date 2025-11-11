/*
JSON vs Object Table -- Summary

Feature           | JSON                      |    Object Table

What it is         Text format for stroing/   | Stuctured storage system (usually
                   Transfering data             in databases)  
Usage              For APIs, configs, and     | For querying and persistent
                   communication              | data storage
Structure         | Key-value pairs           | Rows & columns  
Language Support  | Universal (JS,Python,etc) | Depends on DB engine (SQL, MongoDB, etc) 
Editable by humans| Yes 
Supports 

// Syntax

Definition        | Text format for storing & | In memory data structure used in code
\\                | Tranfering data           |
Quotes for keys   | Mandatory double quotes   | Optional quotes -- can use key, 'key',
\\                | ("key")                   | or "key"
String values     | Must use double quotes    | Can use single or double quotes
\\                | only                      |
Functions allowed | NO                        | YES
Comments allowed? | NO                        | YES
Data types allowed| String, number, boolean,  | Everything JSON allows + functions, symbols,
\\                | null, object, array       | undefined, etc           
Usage             | For API's, config files,  |
\\                | and storage               | For logic inside JS program
*/                  