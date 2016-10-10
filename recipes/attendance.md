#Attended learning activity
Revision: 0.1

DRAFT

##Purpose
This recipe defines the structure and terms to record a learner's attendance of an event such as a lecture or other learning activity. The expectation is that the source data will be collected by a system designed to explicitly record attendance via some action of the learner, such as swiping a card.

### Actor
Common entity identifier: Actor.A

#### Entity Example:
The actor entity describes the individual who has attended the learning activity.

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th></tr>
	<tr>
		<td>actor.account</td>
		<td>Full name of user, optional.</td>
	</tr>
	<tr>
		<td>actor.objectType</td>
		<td>Agent</td>
	</tr>
		<tr>
		<td>actor.account</td>
		<td>JSON Object with unique id and home page</td>
	</tr>
</table>

``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage": "https://www.poppleton.ac.uk/attendance/stu123"
        }
    },
```

### Verb

Common entity identifier: Verb.A

#### Entity Example:

The Verb,[attended](/vocabulary.md#verbs) denotes the action of the user's browser or app requesting the resource that the user wishes to view.

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th></tr>
	<tr>
		<td>verb.id</td>
		<td>IRI corresponding to Verb.</td>
	</tr>
	<tr>
		<td>verb.display</td>
		<td>Human readable representation of Verb. Key is a RFC 5646 Language Tag</td>
	</tr>
</table>

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
            "en": "attended"
        }
    },
```

### Result
Common entity identifier: Result.B

#### Entity Example:
The optional result entity can include completion. See [the xAPI specification for a full description of the result entity](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#245-result)

<table>
	<tr><th>Property in Example</th><th>Description</th></tr>
	<tr>
		<td>result.result.completion</td>
		<td>"true". Indicates that the learner attended the event.<br/>"false"indicates that the learner did not attend the event.</td>
	</tr>
</table>

``` javascript
 "result":{
        "completion":true
    }
```

### Object
Common entity identifier: Object.E

#### Entity Example:
The object defines the activity that has been completed. [Examples of valid object.definition Activity object Types can be found in the vocabulary](../vocabulary.md#30-object).

<table>
	<tr><th>Property in Example</th><th>Description</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>The value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for a single unique learning event.</td>
	</tr>
	<tr>
		<td>object.definition</td>
		<td>JSON object. Object.definition.type identifies the activity.</td>
	</tr>
	</tr>
		<tr>
		<td>object.extension</td>
		<td>JSON object.<br/> "http://id.tincanapi.com/extension/datetime" is a ISO 8601 date time that indicates when the learning event started.<br/>"http://id.tincanapi.com/extension/duration" represents the length of time the event took. </td>
	</tr>
</table>

Example:

``` javascript

"object":{
		"objectType":"Activity",
		"id":"http://www.poppleton.ac.uk/psy101/lecture1",
		"definition":{
			"type":"http://activitystrea.ms/schema/1.0/event",
			"name":{
				"en":"Lecture"
			},
			"description":{
				"en":"The first lecture of psychology 101"
				}
			},
			
		    "extensions":{
				"http://id.tincanapi.com/extension/datetime": "2016-02-05T10:00:00.000Z",
				"http://id.tincanapi.com/extension/duration": "PT1H30M0S"
			}
			
		}
		
```

### Context
Common entity identifier: Context.D

#### Entity Example:
Plugin specific extensions are optional and not part of the core recipe. Instructor is optional and is the instructor who organised the learning event.

<table>
	<tr><th>Property in Example</th><th>Description</th></tr>
	<tr>
		<td>context.platform</td>
		<td>The system used to record attendance to this learning activity.</td>
	</tr>
	<tr>
		<td>context.extensions</td>
		<td>RecipeVersion is recommended, and identifies this recipe and its version.</td>
	</tr>
	<tr>
		<td>context.context.activities</td>
		<td>Has a context type of grouping. A course that relates to an assignment as the parent.</td>
	</tr>
</table>

``` javascript
"context": {
	"contextActivities":{
            "grouping":[
                {
                    "objectType":"Activity",
                    "id":"http://wicketkeeper.poppleton.ac.uk/courses/psy101",
                    "definition":{
                        "type":"http://xapi.jisc.ac.uk/courseArea",
                        "name":{
                            "en":"Psychology 101"
                        },
                        "description":{
                            "en":"Entrance course for psychology."
                        }
                    }
                }
            ]
        },
		
		"instructor": {
            "objectType": "Agent",
            "name": "instructor",
            "account": {
                "name": "2",
                "homePage": "http://localhost/moodle"
            },
        
        "platform": "Wicketkeeper"
        "extensions":  {
      		"http://wicketkeeper.poppleton.ac.uk/extensions": {
      		 	 "http://wicketkeeper.poppleton.ac.uk/extensions/weighting": "3"
              },
			"http://xapi.jisc.ac.uk/recipeVersion" : "attendanceV0.1"
        }
```