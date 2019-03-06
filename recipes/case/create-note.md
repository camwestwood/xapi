# note_update Statement template

## Purpose
This Statement template records a note being created by a tutor. The note must be attached to a case.

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
This Verb, [created](/vocabulary.md#created), describes the action of creating the Object

``` javascript
"verb": {
  "id": "http://activitystrea.ms/schema/1.0/create",
  "display": {
    "en" : "create"
  }
}
```

### Object
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Example Example
The object is the note that is being created:


``` javascript

"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**NOTE_ID**",	
   "definition": {
   		"type": "http://xapi.jisc.ac.uk/note",			
   		"name": { "en": "Case" }   
    }
   },

```



### Timestamp

An ISO 8601 format timestamp that corresponds to the time of when the note was created

#### Example:

``` javascript
 "timestamp": "2016-02-05T10:00:00.000Z"
```

### Result
The result.response entity contains plain text from the note encoded as per the encoding of the rest of the statement. There must be no markup,  HTML entity encodings or invalid characters.



### Example:

``` javascript
"result":{
	"response": "**NOTE**"
},
```

### Context

The Context describes the parent case of the note in context.contextActivies

#### Example:
``` javascript

"context": {
	"platform": "Jisc Notes",
	
	"contextActivities": {
        "parent": [
        {
            "id" : "https://notes.jisc.ac.uk/138371"
        }
		 ]
	  },

    "extensions": {
			"http://xapi.jisc.ac.uk/recipeCat": "Case",
			"http://xapi.jisc.ac.uk/version" : "1.0.2"
			}
		}


}

```


