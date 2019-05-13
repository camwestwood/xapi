# Post an update to a target.


## Purpose
This recipe defines the structure and terms to record the experience of updating a target.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

### Entity Example:
The actor entity describes the individual that is setting the target.


``` Javascript
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }

```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

The verb created created denotes the action of updating a target.

### Entity Example:
``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/update",
        "display": {
            "en": "update"
        }
    },
```


### Object

The object should be the target that is being updated, extensions carry new or updated values.

### Entity Example:

``` javascript
"object": {
  "objectType": "Activity",
  "id": "https://jisc.ac.uk/studygoal/target?id=100",
  "definition": {
    "type": "https://xapi.jisc.ac.uk/target",
    "name": {
      "en": "Target"
    },
    "extensions": {

      "http://xapi.jisc.ac.uk/target_value" : "120"

    }
  }
}


### Example:
