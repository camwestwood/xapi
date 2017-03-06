#Physical_Presence Recipe
Revision: 0.1

DRAFT

## Purpose

This recipe defines the structure and terms to record a user being at a physical space on campus.

### Actor

Common entity identifier: Common entity identifier: [ActorA](../common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who is present in the physical space.

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
The verb, at, describes the actor being at the location.

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/at",
        "display": {
            "en" : "at"
        }
    }

```

### Object

Common entity identifier:
ObjectToDo


#### Entity Example:
The object defines the activity of being at the place. Institutions should talk to a data scientist for guidance on place names and descriptions.

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
The timestamp defines the time at which the actor arrived at the location.

``` javascript
"timestamp": "2012-07-05T18:30:32.360Z",
```

### Context

Common entity identifier: Context*

#### Entity Example:

The context includes the version number of this recipe.
context.platform defines the platform that captures the presence.

``` javascript
"context": {
  "extensions": {
    "http://xapi.jisc.ac.uk/recipeVersion" : "physical_presence0.1",
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
		"id": "http://activitystrea.ms/schema/1.0/at",
		"display": {
			"en": "at"
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
			"http://xapi.jisc.ac.uk/recipeVersion": "physical_presence.1",
			"http://xapi.jisc.ac.uk/logPlatform": "WiFi access logs"
		}
	},
	"timestamp": "2012-07-05T18:30:32.360Z",
	"id": "12345678-1234-5678-1234-567812345678"
}

```
