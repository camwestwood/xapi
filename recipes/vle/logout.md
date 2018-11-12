# vle_logged_out Statement template

Based on generic Statement template: [Logout](/generic/logout.md)

[Statement Template Changes](/version_changes.md#logged-out)

## Purpose

This Statement template records a user logging out of a VLE.

## Definition
### Actor
Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The Actor entity describes the individual logging out of the system.

### Example
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

This Statement uses the [logged out](/vocabulary.md#verb) Verb to describe the action of logging out of a platform.

### Example:

``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedout",
        "display": {
            "en": "logged out of"
        }
    },
```

### Context

Common entity identifier: ContextA, as defined on the [common structures](/common_structures.md#contexta) page.

Since the logged-in action is not undertaken in relation to a particular learning activity or course, only the core attributes of the Context entity are applicable.

### Example:

``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
 		"http://xapi.jisc.ac.uk/sessionId":"32456891",
        	"http://xapi.jisc.ac.uk/statementCat": "VLE",
        	"http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
		"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
```

### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page.

When logging out of the VLE the object.definition.type should be http://activitystrea.ms/schema/1.0/application. When the object.definition.type is "http://activitystrea.ms/schema/1.0/application", the subType (http://xapi.jisc.ac.uk/subType) extension should be used to identify the subType of the application that is being logged out of, in this example a Virtual Learning Environment (aka Learning Management System), identified by  http://id.tincanapi.com/activitytype/lms. Different application types should use the relevant subType, as defined on the [vocabularies](/vocabulary.md#extensions) page.


### Example
``` javascript

"object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle",
        "definition": {
            "type": "http://activitystrea.ms/schema/1.0/application",
            "name": {
                "en": "A Moodle course"
            },
            "extensions": {
                "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
                }
            }
        },
```

### Timestamp

In logged out statements the timestamp property must be set to the date and time of logging out.

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"



### Complete VLE Specific Examples

[Moodle](/vle/moodle/logout.js)

[Blackboard](/vle/blackboard/loggedout.json)
