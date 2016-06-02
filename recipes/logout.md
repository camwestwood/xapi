# VLE User Logged Out Recipe
Revision: Working Towards 1.0

## Purpose
This activity records a user logging out of a VLE.
## Definition
### Actor

The actor entity describes the individual logging out of the system.

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

Example:

``` Javascript
{

    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb

The Verb,[logged out](/vocabulary.md#verbs) describes the action of logging out of a platform.

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th></tr>
	<tr>
		<td>verb.id</td>
		<td>IRI corresponding to Verb.</td>
	</tr>
	<tr>
		<td>verb.display</td>
		<td>Agent/td>
	</tr>
		<tr>
		<td>verb.display</td>
		<td>Human readable representation of Verb. Key is a RFC 5646 Language Tag</td>
	</tr>
</table>


``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedout",
        "display": {
            "en": "logged out of"
        }
    },
``` 

### Context

[Context](/common_statements.md#context) identifies the platform that is being logged into, Moodle in this example. Plugin specific extensions are optional and not part of the core recipe.

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th></tr>
	<tr>
		<td>context.platform</td>
		<td>The platform used in the experience of this learning activity.</td>
	</tr>
	<tr>
		<td>platform.extensions</td>
		<td>The sessionID extension is the VLE session ID. [IP Address](https://registry.tincanapi.com/#uri/extension/310) is used to identify the client's real address as a Context extension.</td>
	</tr>
</table>

Example:


``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
 			"http://xapi.jisc.ac.uk/sessionId":"32456891",
            "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48"    
        }
```

### Object


The object defines the item that the user has logged out of.  A [Jisc specific extension](common_statements.md#jisc_extensions) details that it is a lms that is being logged out of.

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
		<td>verb.definition</td>
		<td>JSON object. verb.definition.type describes the activity and verb/definition.extensions.subtype can be used to described the subtype of this activity.</td>
	</tr>
</table>


``` javascript

"object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle",
        "definition": {
            "type": "http://activitystrea.ms/schema/1.0/application",
            "name": {
                "en": "A Moodle course"
            },
            "description": {
                "en": "A Moodle course"
            },
            "extensions": {
                "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
                }
            }
        },
```


### Complete VLE Specific Examples

Moodle (ToDo)

[Blackboard](blackboard/loggedout.json)
