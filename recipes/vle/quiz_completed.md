# quiz_assessed statement template

## Purpose

## Definition

### Actor

Common entity identifier: [ActorA](../common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who is making the post.

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
Common entity identifier: [VerbA](/common_structures.md#verba)

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
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Entity Example:


#### Example:

``` javascript

    "object": {
	  "objectType": "Activity",
      "id": "http://localhost/moodle/mod/quiz/view.php?id=10",
		  "definition": {
			"description": {
			  "en": "A quiz"
			},
			"name": {
			  "en": "mquiz"
			},
			"type": "http://xapi.jisc.ac.uk/vle/quiz"
		  }
    }
		
```

### Context
Common entity identifier: [ContextB](/common_structures.md#objectb)

#### Entity Example:
The Context may describe the parent forum of the thread in context.contextActivies, and optionally, the courseArea (with module identifiers).


#### Entity properties:


### Example:

``` javascript
"context": {
      "extensions": {
        "http://xapi.jisc.ac.uk/statementCat": "VLE",
        "http://xapi,jisc.ac.uk/courseArea": {
          "http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
        },
        "http://id&46;tincanapi&46;com/extension/ip-address": "0:0:0:0:0:0:0:1",
        "http://xapi.jisc.ac.uk/version": "x-2017-05-16",
        "http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O"
      },
```

## Full Example

 
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
        "http://id&46;tincanapi&46;com/extension/ip-address": "0:0:0:0:0:0:0:1",
        "http://xapi.jisc.ac.uk/version": "x-2017-05-16",
        "http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O"
      },
      "platform": "Moodle"
    },
  }
}```