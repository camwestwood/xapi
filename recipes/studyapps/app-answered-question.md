# quiz_question_answered statement template

## Purpose
Use this template to create a specific Statement for a student answering 1 or more questions.

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
    "homePage": "https://jisc.ac.uk/studygoal/"
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

In quiz answered statements the timestamp property is set to the time the question/s were answered.

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"

### Object

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

### Example

``` javascript
 "result": {
      "response": "Sad"
    },
```
	

### Context
Common entity identifier: [ContextB](/common_structures.md#contextb)

#### Entity Example:
Although it is not typical for mobile application statements, the Context may describe the parent quiz of the question in context.contextActivies, and optionally, the courseArea (with module identifiers). See the (VLE Example)[] for details.

This


#### Example:
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


```
