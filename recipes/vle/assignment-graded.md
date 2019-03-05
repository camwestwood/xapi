# vle_assignment_graded Statement template

[Statement Template Changes](/version_changes.md#assignment-graded)

## Purpose
This Statement template records a graded assignment.

Natural language example of a typical Statement: "John Smith scored 90% when he completed his ABC assignment in module LA101 (raw score 45), marked by Angela Jones, indicating success on this assignment. Minimum possible score: 0; maximum score: 50."

## Definition
### Actor

Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The Actor entity describes the individual whose work has been graded.

### Example:
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

The Verb [scored](/vocabulary.md#verbs) describes the student receiving a score for a learning activity.

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
Common entity identifier: ResultA [common structures](/common_structures.md#result-a) page.

The result entity is required for this kind of statement.

### Example of grade result:

``` javascript 
"result": {
        "extensions": {
        	"http://xapi.jisc.ac.uk/grade": "E"
        },
		
        "success": false,
        "completion": true,
        "response": "Your answer should have been: The cow jumped over the moon."
         }
````

### Object
Common entity identifier: uses a refinement of ObjectB, as defined on the [common structures](/common_structures.md#objectb) page.

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
The Context for assignment graded is based on ContextA on the [common structures](/common_structures.md#contexta) page, except that an instructor may be present.

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
	<td>string. Must have the value "Agent".</td>
</tr>
<tr>
	<td>context.instructor.name [1]</td>
	<td>Full name of instructor</td>
	<td>string</td>
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
	<td>context.extension.courseArea [0..1]</td>
	<td>Umbrella course/parent area by its an UDD Module Instance ID or VLE Module ID. More information can be found on the [vocabularies page](/vocabulary.md#coursearea).</td>
	<td>JSON object</td>
<tr> 
	<tr>
		<td><a href="vocabulary.md#recipe-category">context.extensions.https://xapi.jisc.ac.uk/recipeCat</a> [0..1]</td>
		<td>Recommended For querying lookup. Set to "VLE" in vle statements <br/></td>
		<td>string</td>
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
                "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
            },
        
    "platform": "Moodle"
	
    "extensions":  {
      	"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
             },
				
		"http://xapi.jisc.ac.uk/recipeCat": "VLE",		
		"http://xapi.jisc.ac.uk/sessionId": "32456891" ,
		"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0.2"
        }
```


### Complete VLE Specific Examples
[Blackboard Example](/vle/blackboard/asssignment_graded.json)

[Moodle Example](/vle/moodle/assignment_graded.json)
