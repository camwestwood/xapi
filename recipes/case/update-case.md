# Update_Case Statement template

## Purpose
This Statement template specifies how to record a case being updated by a tutor or other member of staff.

Natural language example of a typical Statement: "At 10:30 on 13 February 2016 tutor Angela Jones updated the case ID '123456' on Jisc Notes".

## Actor
The Actor entity identifies the member of staff that updated the case.

Common entity identifier: [ActorA](/common_structures.md#actora)

### Entity Example:

``` Javascript
"actor": {
   "objectType": "Agent",
   "name": "Angela Jones",
   "account": {
      "name": "ajones",
      "homePage": "https://notes.jisc.ac.uk"
   }
}
```

## Verb
The Verb, [created](/vocabulary.md#created), describes the action of updating the case.

Common entity identifier: [VerbA](/common_structures.md#verba)

### Entity Example:

``` javascript
"verb": {
   "id": "http://xapi.jisc.ac.uk/update",
   "display": {
      "en" : "updated"
   }
}
```

## Object
The object is the case being updated.

Common entity identifier: [ObjectA](/common_structures.md#objecta)

### Entity Example

``` javascript
"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**CASE_ID**",	
   "definition": {
   		"type": "http://xapi.jisc.ac.uk/case",			
   		"name": {
			"en": "Case"
		}   
    }
}

```
## Timestamp

This property must be set to the date and time that the case was updated.

### Example:

``` javascript
"timestamp": "2016-02-13T10:30:00.000Z"
```

## Context
The Context contains extensions that describe the update, for example a mode of intervention or weighting.

### Entity Example:

``` javascript
"context": {
	"platform": "Jisc Notes",
    	"extensions": {
		"http://xapi.jisc.ac.uk/mode" : "email",
		"http://xapi.jisc.ac.uk/weighting" : 7 ,
		"http://xapi.jisc.ac.uk/recipeCat": "Case",
		"http://xapi.jisc.ac.uk/version" : "1.0.3"
		}
}
```

## Full Example:
```
{
	"actor": {
   		"objectType": "Agent",
   		"name": "Angela Jones",
   		"account": {
      			"name": "ajones",
      			"homePage": "https://notes.jisc.ac.uk"
   		}
   	},
	"verb": {
   		"id": "http://xapi.jisc.ac.uk/update",
   		"display": {
      			"en" : "updated"
   		}
	},
	"object": {
   		"objectType": "Activity",
   		"id": "**HOMEPAGE**/**CASE_ID**",	
   		"definition": {
   			"type": "http://xapi.jisc.ac.uk/case",			
   			"name": { 
				"en": "Case"
			}   
    		}
	},
	"timestamp": "2016-02-13T10:30:00.000Z",
	"context": {
		"platform": "Jisc Notes",
    		"extensions": {
			"http://xapi.jisc.ac.uk/mode" : "email",
			"http://xapi.jisc.ac.uk/weighting" : 7 ,

			"http://xapi.jisc.ac.uk/recipeCat": "Note",
			"http://xapi.jisc.ac.uk/version" : "1.0.3"
			}
		}
	}
}
```
