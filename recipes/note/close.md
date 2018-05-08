# Note_Closed Statement template



[Statement Template Changes](/version_changes.md#close-note)

## Purpose
This Statement template records a note being close by a tutor.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that a note is  about

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
  "id": "http://activitystrea.ms/schema/1.0/create",
  "display": {
    "en" : "logged in to"
  }
}
```


### Object


#### Example:

``` javascript
"context": {
	"platform": "UxAPI",
	
	"instructor": {
		"objectType": "Agent",
		"account": {
			"name": "**TUTOR_ID**",
			"homePage": "**HOMEPAGE**"
		},
	

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}

```		

### Timestamp

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"


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
		},
	

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}




