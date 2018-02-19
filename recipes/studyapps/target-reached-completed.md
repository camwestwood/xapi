#tracking app. Reached/completed a target. 

## Purpose
This statement defines the structure and terms to record the experience of completing a target. 

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

The verb completed  denotes the action of completing a target.

### Entity Example:

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en": "completed"
        }
    },
```

### Object

The object is the target that has been completed.

### Entity Example:

``` javascript
"object": {
  "objectType": "Activity",
  "id": "https://jisc.ac.uk/studygoal/target?id=100",
  "definition": {
    "type": "https://xapi.jisc.ac.uk/target",
    "name": {
      "en": "Target"
    }
  }
}


