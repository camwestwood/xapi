# leave_physical_presence recipe
Revision: 0.1

## Purpose
This recipe defines the structure and terms to record a user leaving a physical space on campus.

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

### Context
Common entity identifier: Context*

#### Context Example:
The context includes the version number of this recipe.



The context includes the version number of this.

``` javascript
"context": {
  "extensions": {  
    "http://xapi.jisc.ac.uk/recipeVersion" : "leave_physical_presence0.1",
  }
}
```

