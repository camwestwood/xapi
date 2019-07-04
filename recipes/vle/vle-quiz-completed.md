# vle_quiz_assessed Statement template


## Purpose
This template defines the structure and terms to record the experience of completing a quiz

## Definition

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora) 

#### Entity Example:
The actor entity describes the individual who has completed a quiz.

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

#### Entity Example:
The verb used in quiz_assessed statement is [completed](/vocabulary.md#verbs).

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en": "completed"
        }
    },
``` 

### Timestamp
In quiz completed statements the timestamp property must be set to the date and time othe quiz was completed.

#### Example:

``` Javascript
 "timestamp": "2016-02-05T10:00:00.000Z"
```

### Result
Common entity identifier: [ResultA](/common_structures.md#result-a) 

#### Entity Example:

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
Common entity identifier: [ContextA](/common_structures.md#contexta) page. 

#### Entity Example:


``` javascript
"context": {
      "extensions": {
        "http://xapi.jisc.ac.uk/recipeCat": "VLE",
        "http://xapi.jisc.ac.uk/extensions/user-agent": "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405",
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
        "http://xapi.jisc.ac.uk/recipeCat": "VLE",
    	  "http://xapi.jisc.ac.uk/extensions/user-agent": "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405",
        "http://xapi.jisc.ac.uk/courseArea": {
          "http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
        },
        "http://id.tincanapi.com/extension/ip-address": "143.32.45.1",
        "http://xapi.jisc.ac.uk/version": "x-2017-05-16",
        "http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O"
      },
      "platform": "Moodle"
    }
  }
```
