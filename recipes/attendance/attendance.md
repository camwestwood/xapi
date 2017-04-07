
# Attended_Learning_Event statement template
Revision: 0.2

## Purpose
This statement defines the structure and terms to record a learner's attendance of an event such as a lecture or other learning activity. The expectation is that the source data will be collected by a system designed to explicitly record attendance via some action of the learner, such as swiping a card.

In this statement:

- Agent and verb

Student with identifier STUDENT_ID (and name NAME) attended a learning activity.

- Object

It was an event activity with id of ACTIVITY_EVENT_ID, of type ACTIVIITY_TYPE.

- Context

Event was a part of module instance MOD_INSTANCE_ID. The activity type has an id of Activity_Type_ID. The maximum number of people who could have attended the event was ACTIVITY_MAX_COUNT. The time it started was ACTIVITY_LOGGED_START and ended at ACTIVITY_LOGGED_END. The activity was led by instructor with identifer STAFF_ID.
			
			

### Actor

Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who has attended the learning activity.

``` Javascript
{
    "version": "1.0.0",
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

Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:

The verb [attended](/vocabulary.md#verbs) denotes the action of the user's browser or app requesting the resource that the user wishes to view.

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
            "en": "attended"
        }
    },
```

### Result
Common entity identifier: [ResultC](/common_structures.md#resultc)

#### Entity Example:
The result.completion must be set true or false, indicating if the actor attended the activity. The extension activity_late can be set to 1 if the actor did not attend the event on time.


``` javascript
 "result":{
        "completion":true,
		
	 "extensions":{
		  "http://xapi.jisc.ac.uk/activity_late":"1",
		 }
    }
```

### Object
Common entity identifier: [ObjectC](/common_structures.md#objectc)

#### Entity Example:
The object defines the activity that has been completed. Examples of valid object.definition Activity object Types can be found in [the vocabulary](../vocabulary.md#30-object).

``` javascript

"object":{
		"objectType":"Activity",
		"id":"L1001",
		"definition":{
			"type":"http://xapi.jisc.ac.uk/lecture",
			"name":{
				"en":"Lecture"
			},
			"description":{
				"en":"The first lecture of 101"
				}
			},
			
			
		}
		
```

### Context
Common entity identifier: Common entity identifier: [ContextD](/common_structures.md#contextD)


#### Entity Example:




``` javascript
 "context": {
        "extensions": {
            "http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
            "http://xapi.jisc.ac.uk/activity_type_id": "1",
            "http://xapi.jisc.ac.uk/activity_max_count": "32",
            "http://xapi.jisc.ac.uk/activity_mandatory": "1",
            "http://xapi.jisc.ac.uk/recipeVersion": "attendanceV0.1",
            "http://xapi.jisc.ac.uk/starttime": "2016-02-05T10:00:00.000Z",
            "http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z",
            "http://xapi.jisc.ac.uk/courseArea": {
                "http://xapi.jisc.ac.uk/vle_mod_id": "LA101-200-2016S1-0",
                "id": "http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
            }
        },
        "instructor": {
            "objectType": "Agent",
            "account": {
                "name": "2",
                "homePage": "http://localhost/moodle"
            }
        }
    }
```


# Example
``` javascript
{
    "id": "12345678-1234-5678-1234-567812345678",
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
            "en": "attended"
        }
    },
    "result": {
        "completion": true,
        "extensions": {
            "http://xapi.jisc.ac.uk/activity_late": "1"
        }
    },
   object":{
		"objectType":"Activity",
		"id":"L1001",
		"definition":{
			"type":"http://xapi.jisc.ac.uk/lecture",
			"name":{
				"en":"Lecture"
			},
			"description":{
				"en":"The first lecture of 101"
				}
			},
		}
    },
    "context": {
        "extensions": {
            "http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
            "http://xapi.jisc.ac.uk/activity_type_id": "1",
            "http://xapi.jisc.ac.uk/activity_max_count": "32",
            "http://xapi.jisc.ac.uk/activity_mandatory": "1",
            "http://xapi.jisc.ac.uk/recipeVersion": "attendanceV0.1",
			"http://xapi.jisc.ac.uk/starttime": "2016-02-05T10:00:00.000Z",
            "http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z",
            "http://xapi.jisc.ac.uk/courseArea": {
                "http://xapi.jisc.ac.uk/vle_mod_id": "LA101-200-2016S1-0",
                "id": "http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
            }
        },
        "instructor": {
            "objectType": "Agent",
            "account": {
                "name": "2",
                "homePage": "http://localhost/moodle"
            }
        }
    }
}

```
