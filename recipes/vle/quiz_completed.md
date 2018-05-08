# quiz_assessed statement template

## Purpose

## Definition

### Actor
Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The actor entity describes the individual who is making the post.

#### Entity Example:


``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

#### Entity properties:
The verb used in quiz_assessed statement is [completed](/vocabulary.md#verbs).

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en": "completed"
        }
    },
``` 


### Result
Common entity identifier: ResultA [common structures](/common_structures.md#resulta) page.

### Example

``` javascript 

 "result": {
      "duration": "PT9S",
      "completion": true,
      "score": {
        "max": 10,
        "raw": 1,
        "scaled": 0.1
      }
    },

```

### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page.


#### Entity Example:


#### Example:

``` javascript

    "object": {
	  "objectType": "Activity",
      "id": "http://localhost/moodle/mod/quiz/view.php?id=10",
		  "definition": {
			     "type": "http://xapi.jisc.ac.uk/vle/quiz"
		  }
    }
		
```

### Context
Common entity identifier: ContextA, as defined on the [common structures](/common_structures.md#contexta) page. 

#### Entity Example:


### Example:

``` javascript
"context": {
      "extensions": {
        "http://xapi.jisc.ac.uk/statementCat": "VLE",
        "http://xapi,jisc.ac.uk/courseArea": {
          "http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
        },
        "http://id.tincanapi.com/extension/ip-address": "143.32.45.1",
        "http://xapi.jisc.ac.uk/version": "x-2017-05-16",
        "http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O"
      },
```

## Full Example

 ``` javascript
    "actor": {
      "account": {
        "homePage": "http://localhost/moodle",
        "name": "stu1"
      },
      "objectType": "Agent"
    },
    "timestamp": "2017-08-10T16:37:43+02:00",
    "version": "1.0.0",
    "id": "8ff2892d-93d1-45e5-9e5b-b7e2a65305cb",
    "result": {
      "duration": "PT9S",
      "completion": true,
      "score": {
        "max": 10,
        "raw": 1,
        "scaled": 0.1
      }
    },
    "verb": {
      "id": "http://adlnet.gov/expapi/verbs/completed"
      "display": {
        "en": "completed"
      },
      
    },
    "object": {
	  "objectType": "Activity",
      "id": "http://localhost/moodle/mod/quiz/view.php?id=10",
		  "definition": {
			"description": {
			  "en": "A module"
			},
			"name": {
			  "en": "mquiz"
			},
			"type": "http://xapi.jisc.ac.uk/vle/quiz"
		  }
    },
		
	"context": {
      "extensions": {
        "http://xapi.jisc.ac.uk/statementCat": "VLE",
        "http://xapi.jisc.ac.uk/courseArea": {
          "http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
        },
        "http://id.tincanapi.com/extension/ip-address": "143.32.45.1",
        "http://xapi.jisc.ac.uk/version": "x-2017-05-16",
        "http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O"
      },
      "platform": "Moodle"
    },
  }
}```