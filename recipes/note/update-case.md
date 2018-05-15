# note_update Statement template

[Statement Template Changes](/version_changes.md#create-note)

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

#### Example:
``` javascript

"context": {
	"platform": "Jisc Notes",
	
	"instructor": {
		"objectType": "Agent",
		"account": {
			"name": "**TUTOR_ID**",
			"homePage": "**HOMEPAGE**"
		},
	

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/type": "**TYPE**",
			"http://xapi.jisc.ac.uk/weighting" : **WEIGHTING**
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}


```

### Timestamp

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
	"platform": "UxAPI",
	
	"instructor": {
		"objectType": "Agent",
		"account": {
			"name": "**TUTOR_ID**",
			"homePage": "**HOMEPAGE**"
		}
	

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/mode" : "**MODE**",
			"http://xapi.jisc.ac.uk/weighting" : **WEIGHTING**,
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}


}

```


