# Interaction Statement template

## Purpose
This Statement template specifies how to record an interaction between staff and students.

It is a provisional statement

## Notes

Currently the object is another agent, so the statement is very simple "actor interacted with agent". In the case statenents it was decided to have an activity as the object and put the additional actor in the context. This needs discussion. 

## Actor
The Actor entity identifies the individual member of staff who is opening the case.

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
This Verb, TBD, describes the action of interacting with another member of staff or student,

Common entity identifier: [VerbA](/common_structures.md#verba)

### Entity Example:

``` javascript
"verb": {
   "id": "TBD",
   "display": {
      "en" : ""
   }
}
```

## Object



### Entity Example

``` javascript
   "object": {
    "objectType": "Activity",
    "id": "**HOMEPAGE**/**OBJECT_ID**",	
    "definition": {
            "type": "**TYPE_TBD**",			
            "name": { "en": "**NAME_TBD" }   
     },
```

## Timestamp

The Timestamp property must be set to the date and time of the interaction

### Example:

``` javascript
"timestamp": "2016-02-05T10:00:00.000Z"
```

## Context
The Context must identify the type of interaction and reason


### Entity Example:

``` javascript
"context": {
	"platform": "**PLATFORM**",

    "extensions": {
			"http://xapi.jisc.ac.uk/extensions/interaction_type": "interaction_type",
			"http://xapi.jisc.ac.uk/extensions/interaction_reason": "interaction_reason"
			}
```
## Full Example

```
{
	
    "actor": {
        "objectType": "Agent",
        "account": {
			"name": "**STUDENT_ID**",
			"homePage": "**HOMEPAGE**"
        }
    },
  "verb": {
        "id": "**verb_TBD**",
        "display": {
            "en": "interacted with"
        }
    },



   "object": {
    "objectType": "Activity",
    "id": "**HOMEPAGE**/**OBJECT_ID**",	
    "definition": {
            "type": "**TYPE_TBD**",			
            "name": { "en": "**NAME_TBD" }   
     },

"timestamp": "**TIMESTAMP**",

"context": {
	"platform": "**PLATFORM**",

    "extensions": {
            "http://xapi.jisc.ac.uk/extensions/interaction_type": "**INTERACTION_TYPE**",
            "http://xapi.jisc.ac.uk/extensions/interaction_reson": "**INTERACTION_REASON**"
            
			}
				
        }
        
}
```
