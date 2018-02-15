#tracking app set a target statement

## Purpose
This statement defines the structure and terms to record the experience of setting a target in the tracking app. 

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

The verb created created denotes the action of creating a target.

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/created",
        "display": {
            "en": "created"
        }
    },
```

### Object

The object should be the target that has been completed.

### Example

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
      "http://xapi.jisc.ac.uk/uddModInstanceID" : "2016.sem1.psy101"
      "http://xapi.jisc.ac.uk/target_name" : "Reading for exams "
      "http://xapi.jisc.ac.uk/target_catergory" : "Reading"
      "http://xapi.jisc.ac.uk/target_value" : "120"
      "http://xapi.jisc.ac.uk/target_time_period" : "Week"	
    }
  }
}

### Statement Example

``` javascript

{
	"actor": {
		"objectType": "Agent",
		"account": {
			"name": "jsmith12",
			"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
		}
	},

	"verb": {
		"id": "http://adlnet.gov/expapi/verbs/created",
		"display": {
			"en": "created"
		}
	},


	"object": {
		"objectType": "Activity",
		"id": "https://jisc.ac.uk/studygoal/target?id=100",
		"definition": {
			"type": "https://xapi.jisc.ac.uk/target",
			"name": {
				"en": "Target"
			},
			"extensions": {
				"http://xapi.jisc.ac.uk/uddModInstanceID": "2016.sem1.psy101",
				"http://xapi.jisc.ac.uk/target_name": "Reading for exams ",
				"http://xapi.jisc.ac.uk/target_catergory": "Reading",
				"http://xapi.jisc.ac.uk/target_value": "120",
				"http://xapi.jisc.ac.uk/target_time_period": "Week"
			}
		}
	}
}

```