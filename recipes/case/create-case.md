# Create note Statement template

## Purpose
This Statement template records an intervention case being created by a tutor.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that is creating the case


``` Javascript
"actor": {
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
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Example Example
The object is the case that has been opened.

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

In create statements the Timestamp property must be set to the date and time that the case was created

#### Example:
``` javascript

 "timestamp": "2016-02-05T10:00:00.000Z"

```


### Context

#### Entity Example:
The Context must describe the target of the case. A mode of intervention and the weighting may also be added.


``` javascript
"context": {
	"platform": "**PLATFORM**",
    "extensions": {
			"http://xapi.jisc.ac.uk/recipeCat": "Case",
			"http://xapi.jisc.ac.uk/mode" : "email",
			"http://xapi.jisc.ac.uk/weighting" : 3 ,
			"http://xapi.jisc.ac.uk/version" : "1.0.2"

			"http://xapi.jisc.ac.uk/case-target" {
				"actor": {
					"objectType": "Agent",
					"account": {
						"name": "**STUDENT_ID**",
						"homePage": "**HOMEPAGE**"
				}
				
			}

			}
		}

}
```

