# note_update Statement template

[Statement Template Changes](/version_changes.md#create-note)

## Purpose
This Statement template records a note being created about a student by a tutor. The note is attached to a case.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that is creating the note

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
  "id": "http://xapi.jisc.ac.uk/create",
  "display": {
    "en" : "create"
  }
}
```


### Object

``` javascript

"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**CASE_ID**",	
   "definition": {
   		"type": "http://xapi.jisc.ac.uk/note",			
   		"name": { "en": "Case" }   
    }
   },


```


### Context



#### Example:
``` javascript

"context": {
	"platform": "**PLATFORM**",

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/type": "**TYPE**",
			"http://xapi.jisc.ac.uk/weighting" : **WEIGHTING**
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}


```

### Timestamp

An ISO 8601 format timestamp that corresponds to the time of when the note was created

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"



## Result
``` javascript
"result":{
	"response": "**NOTE**"
},
```

### Context

#### Example:
``` javascript

"context": {
	"platform": "Jisc Notes",
	

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/mode" : "**MODE**",
			"http://xapi.jisc.ac.uk/weighting" : **WEIGHTING**,
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}


}

```


