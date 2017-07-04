# vle_assignment_graded statement template

[Statement Template Changes](/version_changes.md#assignment-graded)

## Purpose
This activity records a graded assignment.

Natural language example of a typical statement: "John Smith scored 90% when he completed his ABC assignment in module LA101 (raw score 45), marked by Angela Jones, indicating success on this assignment. Minimum possible score: 0; maximum score: 50."

## Definition
### Actor
Common entity identifier:  ActorA

Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The actor entity describes the individual whose work has been graded.

### Example:
``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb, [scored](/vocabulary.md#verbs) describes the student receiving a score for a learning activity.

### Example:

``` javascript
 "verb":{
        "id":"http://adlnet.gov/expapi/verbs/scored ",
        "display":{
            "en":"scored"
         }
    }
``` 

### Result
Common entity identifier: ResultB, as defined on the [common structures](/common_structures.md#resultb) page.

In the Jisc profile, the use of the result entity and any of its properties is optional. 

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.score.scaled [0..1]</td>
		<td>The score related to the experience as modified by scaling and/or normalization</td>
<td>decimal number between -1 and 1, inclusive.</td>
	</tr>
	<tr>
		<td>result.score.raw [0..1]</td>
		<td>Unmodified score</td>
<td>decimal number between min and max (if present, otherwise unrestricted), inclusive</td>
	</tr>
	<tr>
		<td>result.score.min [0..1]</td>
		<td>The lowest possible score</td>
<td>decimal number less than max (if present)</td>
	</tr>
	<tr>
		<td>result.score.max [0..1]</td>
		<td>The highest possible score</td>
		<td>decimal number greater than min (if present)</td>
	</tr>
	<tr>
		<td>result.success [0..1]</td>
		<td>Indicates whether or not the attempt was successful.</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>result.completion [0..1]</td>
		<td>Indicates whether or not the Activity was completed.</td>
		<td>true or false</td>
	</tr
	>	<tr>
		<td>result.response [0..1]</td>
		<td>Instructor's or automatic feedback</td>
		<td>string (256)</td>
	</tr>
	<tr>
		<td>result.extensions.http://xapi.jisc.ac.uk/grade [0..1]</td>
		<td>Non-numerical assessment result</td>
		<td>string (256)</td>
	</tr>
</table>

### Example:

```
"result": {
        "score": {
            "scaled": 0.25,
            "raw": 25,
            "min": 0,
            "max": 100
        },
		
        "success": false,
        "completion": true,
        "response": "Your answer should have been: The cow jumped over the moon."
         }

````

### Object
Common entity identifier: ObjectB, as defined on the [common structures](/common_structures.md#objectb) page.

The object defines the activity that has been evaluated. [Examples of valid object.definition vocabulary on Activity objectTypes](/common_structures.md#object) can be found on the vocab page.


### Example:
``` javascript

"object":{
		"objectType":"Activity",
		"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
		"definition":{
			"type":"http://adlnet.gov/expapi/activities/assessment",
			"name":{
				"en":"Course Assignment"
			},
			"extensions":{
				"http://xapi.jisc.ac.uk/dueDate": "2016-02-05T17:59:45.000Z"
			}
		}
		
```

### Context
Common entity context: based on ContextC in the [common structures](/common_structures.md#contexta) page.

<table>
<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<td>context.instructor [0..1]</td>
	<td></td>
	<td>JSON Object</td>
</tr>
<tr>
	<td>context.instructor.objectType [1]</td>
	<td>Must be "Agent"</td>
	<td>String, Must be "Agent"</td>
</tr>
<tr>
	<td>context.instructor.account.homepage [1] </td>
	<td>URL of the home page of the application for which the login id applies.</td>
	<td>url</td>
</tr>
<tr>
	<td>context.instructor.account.name [1] </td>
	<td>account.name gives the login id for the instructor.</td>
	<td>string</td>
</tr>
<tr>
	<td>context.extensions.version [0..1]</td>
	<td>Recommended,  identifies the version of the Jisc xAPI profile found on the ReadMe page.</td>
	<td>string</td>
</tr>
<tr>
	<td><a href="vocabulary.md#course-area">context.extensions.https://xapi.jisc.ac.uk/courseArea</a> [0..1]</td>
	<td>Umbrella course/parent area by its home page URI and / or its identifier.</td>
	<td>JSON object</td>
</tr>
</table>

### Example

``` javascript
"context": {
		
	"instructor": {
            "objectType": "Agent",
            "name": "Ray Keenan",
            "account": {
                "name": "RKeenan",
                "homePage": "http://localhost/moodle"
            },
        
    "platform": "Moodle"
	
    "extensions":  {
      	"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
              	},
				
		"http://xapi.jisc.ac.uk/sessionId": "32456891" ,
		"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
        }
```


### Complete VLE Specific Examples
[Blackboard Example](/vle/blackboard/asssignment_graded.json)

[Moodle Example](/vle/moodle/asssignment_graded.json)
