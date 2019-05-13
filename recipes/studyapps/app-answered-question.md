# quiz_question_answered statement template

## Purpose
Use this template to create a specific Statement for a student answering 1 or more questions.

## Definition

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who answered the question.

``` Javascript
"actor": {
  "objectType": "Agent",
  "account": {
    "name": "jsmith12",
    "homePage": "https://jisc.ac.uk/studygoal/"
  }
}
```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:
The Verb [answered](/vocabulary.md#answered). It denotes the action of the Actor answering a question, where the Object is generally an activity representing the question or questions.

``` javascript
"verb": {
  "id": "http://adlnet.gov/expapi/verbs/answered",
  "display": {
    "en" : "answered"
  }
}
```

### Timestamp

#### Entity Example:
In question answered statements the timestamp property is set to the time the question/s were answered.

 "timestamp": "2016-02-05T10:00:00.000Z"

### Object
Common entity identifier: [ObjectC](/common_structures.md#objectc)

#### Entity Example:

``` javascript
	"object": {
		"id": "http://app/sentiment/quiz1/question1",
		"objectType": "Activity",
		"definition": {
			"name": {
				"en": "sentiment"
			},
			"description": {
				"en": "How are you feeling today?"
			},
			"interactionType": "choice",
			"type": "http://activitystrea.ms/schema/1.0/question",
			"choices": [{
					"id": "Very Happy",
					"description": "Very Happy"
				},
				{
					"id": "Happy",
					"description": "Happy"
				},
				{
					"id": "Sad",
					"description": "Sad"
				}, {
					"id": "Very Sad",
					"description": "Very Sad"
				}

			]
		}
	}
```

### Result
Common entity identifier: ResultA [common structures](/common_structures.md#result-a) page.

#### Entity Example:
The result entity stores the response to the question

``` javascript
 "result": {
      "response": "Sad"
    },
```
	

### Context
Common entity identifier: [ContextB](/common_structures.md#contextb)

#### Entity Example:
Although it is not typical for mobile application interactions, the Context may describe the parent quiz of the question in context.contextActivies, and optionally, the courseArea (with module identifiers). See the [VLE Example](../vle/answered_questions.md) for details.


``` javascript
  "context": {
    
      "platform": "App",
      "extensions": {
	    "http://xapi.jisc.ac.uk/recipeCat": "app",
		"http://xapi.jisc.ac.uk/version": "1.0.3",
		"http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O", 
		"http://xapi.jisc.ac.uk/captured_from": "ios",
        "http://id.tincanapi.com/extension/ip-address": "193.24.14.15"
        }
    }
```

#### Full Example

```
{
"actor": {
	"objectType": "Agent",
	"account": {
		"name": "jsmith12",
		"homePage": "https://jisc.ac.uk/studygoal/"
	}
},
"verb": {
	"id": "http://adlnet.gov/expapi/verbs/answered",
	"display": {
		"en" : "answered"
	}
},
"object": {
	"id": "http://app/sentiment/quiz1/question1",
	"objectType": "Activity",
	"definition": {
		"type": "http://activitystrea.ms/schema/1.0/question",
		"interactionType": "Choice",

		"name": {
			"en": "Sentiment"
			},

		"description": {
				"en": "How are you feeling today?"
			},
		
        "choices": [{
                "id": "Very Happy",
                "description": "Very Happy"
            },
            {
                "id": "Happy",
                "description": "Happy"
            },
            {
                "id": "Sad",
                "description": "Sad"
            }, {
                "id": "Very Sad",
                "description": "Very Sad"
            }

        ]
	}
},

"timestamp":  "2016-02-05T10:00:00.000Z",

"result": {
	"response": "Sad"
},

"context": {
		
	"platform": "Studygoal",
			
	"extensions": {
		"http://xapi.jisc.ac.uk/recipeCat": "APP",
		"http://xapi.jisc.ac.uk/version": "1.0.3",
		"http://xapi.jisc.ac.uk/sessionId": "v535a", 
		"http://id.tincanapi.com/extension/ip-address": "192.168.6.3", 
		"http://xapi.jisc.ac.uk/captured_from": "ios"
		
	}
				
	
}
}
```