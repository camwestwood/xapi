# Tracking app. Record an activity against a target 


## Purpose
This recipe defines the structure and terms to record the experience of recording an activity against an target on the mobile app. 

## Recording an activity

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
The verb is to be decided

### Entity Example:
``` javascript
"verb": {
        "id": "",
        "display": {
            "en": "created"
        }
    },
```

### Object

The object should be the target.


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
    	"http://xapi.jisc.ac.uk/target_value" : "20"
    }
  }
}
```


## Example