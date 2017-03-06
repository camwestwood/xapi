# leave_physical_presence statement template
Revision: 0.1

## Purpose
This template defines the structure and terms to record a user leaving a physical space on campus.

### Actor
Common entity identifier: Common entity identifier: [ActorA](../common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who has left the physical space.

``` Javascript
"actor": {
  "objectType": "Agent",
  "name": "John Smith",
  "account": {
    "name": "jsmith12",
    "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
  }
}
```

### Verb
Common entity identifier: [VerbA](../common_structures.md#verba)

#### Entity Example:
The Verb, leave, describes the action of the actor leaving the object.

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/leave",
        "display": {
            "en" : "leave"
        }
    },
```

### Object
Common entity identifier: Object*

#### Entity Example:
The object defines the activity of leaving the place. Institutions should talk to a data scientist for guidance on place names and descriptions.

``` javascript
"object": {
  "objectType": "Activity",
  "id": "http://locations.university.ac.uk/library/5328",
  "definition": {
    "type": "http://activitystrea.ms/schema/1.0/place",
    "name": {
      "en": "Library",
	  "description":{
				"en":"The east campus library"
				}
			}
		}
	}
```

### Timestamp


#### Entity Example:
The timestamp defines the time at which the actor left the location.

``` javascript
"timestamp": "2012-07-05T18:30:32.360Z",
```

### Context

Common entity identifier: Context*

#### Entity Example:

The context includes the version number of this template.
context.platform defines the platform that captures the presence.

``` javascript
"context": {
  "extensions": {
    "http://xapi.jisc.ac.uk/recipeVersion" : "physical_presence_left0.1",
	"http://xapi.jisc.ac.uk/logPlatform": "WiFi Access Logs"
  }
}
```


## Example

``` javascript

{
	"actor": {
		"objectType": "Agent",
		"name": "John Smith",
		"account": {
			"name": "jsmith12",
			"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
		}
	},
	"verb": {
		"id": "http://activitystrea.ms/schema/1.0/leave"",
		"display": {
			"en": "left"
		}
	},
	"object": {
		"objectType": "Activity",
		"id": "http://locations.university.ac.uk/library/5328",
		"definition": {
			"type": "http://activitystrea.ms/schema/1.0/place",
			"name": {
				"en": "Library"

			}
		}
	},
	"context": {
		"extensions": {
			"http://xapi.jisc.ac.uk/recipeVersion": "physical_presence_leaving.1",
			"http://xapi.jisc.ac.uk/logPlatform": "WiFi access logs"
		}
	},
	"timestamp": "2012-07-05T18:30:32.360Z",
	"id": "12345678-1234-5678-1234-567812345678"
}

```


