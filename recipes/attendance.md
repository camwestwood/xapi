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


### Object



### Context


#### Entity Example:
Contexual Information
_Recipe version?_

#### Entity Example:
The object is the place the person is attending, in this case the library.

_ need to check what is possible here_ 

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>Must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for a single unique Activity</td>
	</tr>
		<tr>
		<td>object.definition</td>
		<td>A JSON object. object.definition.type states activity type is place.</td>
	</tr>
</table>

``` javascript
"object": {
	"objectType": "Activity",
	 "id": "  ", /
	 "definition": {
		  "name": {"en-GB" : "Library Name" },
		 "description": { "en": "Description.",
        },
       
       "type": "http://activitystrea.ms/schema/1.0/place",
   }
}
```

### Complete VLE Specific Examples
[Moodle Example](/vle/moodle/moduleview.js)

[Blackboard Example](/vle/blackboard/course_content_access.json)
