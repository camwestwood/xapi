# Create note Statement template



[Statement Template Changes](/version_changes.md#create-note)

## Purpose
This Statement template records an intervention case being created about a student by a tutor.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that note is creating the case


``` Javascript
actor": {
		"objectType": "Agent",
		"account": {
			"name": "**TUTOR_ID**",
			"homePage": "**HOMEPAGE**"
		}
	
```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:
This Verb, [created](/vocabulary.md#created), describes the action of creating the object

``` javascript
"verb": {
  "id": "http://activitystrea.ms/schema/1.0/create",
  "display": {
    "en" : "created"
  }
}
```


### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page.

The object is a case that has been opened

#### Example:
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

## Result
The result may contain the inital note attached to the case

``` javascript
"result":{
	"response": "**NOTE**"
},
```

### Context
Common entity identifier: Context*


#### Example:
``` javascript

"context": {
	"platform": "**PLATFORM**",
	
    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Case",
			"http://xapi.jisc.ac.uk/mode" : "**MODE**",
			"http://xapi.jisc.ac.uk/weighting" : **WEIGHTING**,
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}

}
```

### Timestamp



#### Example:
``` javascript

 "timestamp": "2016-02-05T10:00:00.000Z"

```
