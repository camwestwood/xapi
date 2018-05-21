# Case_Closed Statement template

## Purpose
This Statement template records a case being closed.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity describes the individual who is closing the case

``` Javascript
"actor": {
  "objectType": "Agent",
  "account": {
    "name": "jsmith12",
    "homePage": "https://notes.jisc.ac.uk"
  }
}
```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:
This Verb, [closed](/vocabulary.md#closed), describes the action of closing the object

``` javascript
"verb": {
  "id": "http://xapi.jisc.ac.uk",
  "display": {
    "en" : "closed"
  }
}
```


### Object
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Example Example
The object is the case is being closed


``` javascript
"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**CASE_ID**",	
   "definition": {
   		"type": "http://xapi.jisc.ac.uk/case",			
   		"name": { "en": "Case" }   
    }
   },

```		

### Timestamp

In create statements the Timestamp property must be set to the date and time that the case was closed.

#### Example:

``` javascript

 "timestamp": "2016-02-05T10:00:00.000Z"

```

### Context

#### Entity Example:



``` javascript

"context": {
	"platform": "Jisc Notes",
	    "extensions": {
				"http://xapi.jisc.ac.uk/statementCat": "Note",
				"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}




