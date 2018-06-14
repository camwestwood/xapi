# quiz_question_answered statement template

In this version the Moodle domain IRIs for subType are not definitive, but purely given as examples. Moodle domain experts will control these IRIs.

## Purpose
Use this template to create a specific Statement for a student answering 1 or more questions in a quiz, but not yet completing it.

## Definition

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity properties:
The actor entity describes the individual who answered the question.

### Example:

``` Javascript
"actor": {
  "objectType": "Agent",
  "account": {
    "name": "jsmith12",
    "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
  }
}
```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:
The Verb [answered](/vocabulary.md#answered). It denotes the action of the Actor answering a question, where the Object is generally an activity representing the question or questions.

### Example:

``` javascript
"verb": {
  "id": "http://adlnet.gov/expapi/verbs/answered",
  "display": {
    "en" : "answered"
  }
}
```

### Timestamp

In quiz answered statements the timestamp property is set to the time the questions were answered.

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"

### Object

The Correct Responses Pattern contains an array of response patterns. A learner's response will be considered correct if it matches any of the response patterns in that array. See the <a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#response-patterns">xAPI spec for more details

### Entity properties:
<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the quiz</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the Object of the Statement. It is required and valid values are listed on the vocabulary page.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional object name</td>
		<td>string</td>
	</tr>
	<tr>
		<td>object.definition.interactionType [0..1]</td>
		<td>The type of interaction. Possible values are: true-false, choice, fill-in, long-fill-in, matching, performance, sequencing, likert, numeric or other. <a href="https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#interaction-types">xAPI spec for more details</a>.</td>
		<td>iri</td>
	</tr>
</table>


### Example

``` javascript
"object": {
  "id": "http://localhost/moodle/mod/quiz/view.php?id=10",
  "objectType": "Activity",
  "definition": {
		"interactionType": "true-false",
		"description": {
			"en": "Greener is a color"
		},

		"type": "http://activitystrea.ms/schema/1.0/question"
	}

}

```

### Result
Common entity identifier: ResultA [common structures](/common_structures.md#resulta) page.

### Example

``` javascript
 "result": {
      "response": "false",
      "completion": true,
      "success": false,
      "score": {
        "max": 1
      }
    },
```
	

### Context
Common entity identifier: [ContextB](/common_structures.md#contextb)

#### Entity Example:
The Context may describe the parent quiz of the question in context.contextActivies, and optionally, the courseArea (with module identifiers).


#### Example:
``` javascript
  "context": {
    
      "platform": "Moodle",
      
      "extensions": {
				"http://xapi.jisc.ac.uk/statementCat": "VLE",
				"http://xapi.jisc.ac.uk/version": "x-2017-05-16",
				"http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O", 
        "http://id.tincanapi.com/extension/ip-address": "193.24.14.15", 
        "http://xapi.jisc.ac.uk/courseArea": {
						"http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
        	}
        },
        
      "contextActivities": {
        "parent": [
          {
            "id": "http://localhost/moodle/mod/quiz/view.php?id=10"
          }
        ]
      }
    },
```

## Full Example:

``` javascript

{
	"actor": {
	"objectType": "Agent",
	"account": {
		"name": "jsmith12",
		"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
	}
},
"verb": {
	"id": "http://adlnet.gov/expapi/verbs/answered",
	"display": {
		"en" : "answered"
	}
},
"object": {
	"id": "http://localhost/moodle/mod/quiz/view.php?id=10",
	"objectType": "Activity",
	"definition": {
				"interactionType": "true-false",
				"type": "http://activitystrea.ms/schema/1.0/question"
		}
},

 "result": {
			"response": "true",
			"completion": true,
			"success": false,
			"score": {
				"max": 1
			}
		},

	"context": {
		
			"platform": "Moodle",
			
			"extensions": {
					"http://xapi.jisc.ac.uk/statementCat": "VLE",
					"http://xapi.jisc.ac.uk/version": "x-2017-05-16",
					"http://xapi.jisc.ac.uk/sessionId": "Iye9OqwM9O", 
					"http://id.tincanapi.com/extension/ip-address": "193.24.14.15", 
					"http://xapi.jisc.ac.uk/courseArea": {
							"http://xapi.jisc.ac.uk/vle_mod_id": "Test1"
						}
				},
				
			"contextActivities": {
				"parent": [
					{
						"id": "http://localhost/moodle/mod/quiz/view.php?id=10"
					}
				]
			}
		}
}

```
