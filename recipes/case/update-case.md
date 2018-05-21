# Case_Update Statement template

## Purpose
This Statement template records a case being updated, for example the weighting being changed.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that a note is created about

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
This Verb, [created](/vocabulary.md#created), describes the action of creating the object

``` javascript
"verb": {
  "id": "http://xapi.jisc.ac.uk/update",
  "display": {
    "en" : "updated"
  }
}
```


### Object
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Example Example
The object is the case is being updated


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

In create statements the Timestamp property must be set to the date and time that the case was updated.

#### Example:

"timestamp": "2016-02-05T10:00:00.000Z"

### Context

#### Entity Example:
The Context must describe extensions that describe the updates. A mode of intervention and the weighting may also be added.

#### Example:
``` javascript

"context": {
	"platform": "Jisc Notes",

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/mode" : "email",
			"http://xapi.jisc.ac.uk/weighting" : 7 ,
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}
}

```