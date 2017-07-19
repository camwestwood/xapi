# Attended_Learning_Event statement template

[Statement Template Changes](/version_changes.md#attendance)

## Purpose
This statement defines the structure and terms to record a learner's attendance of an event such as a lecture or other learning activity. The expectation is that the source data will be collected by a system designed to explicitly record attendance via some action of the learner, such as swiping a card, or of the teacher, such as completing an electronic register.
			

### Actor

Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who has attended the event.

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

Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:

The verb used in the attendance statement is "attended" (http://adlnet.gov/expapi/verbs/attended). It indicates the actor was present at a virtual or physical event or activity. It uses the Jisc common entity identifier [VerbA](/common_structures.md#verba).

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/attended",
        "display": {
            "en": "attended"
        }
    },
```

### Result
The result.completion must be set true or false, indicating if the actor attended the event. The extension [attendance_late](/vocabulary.md#attendance-late) can be set to 1 if the actor did not attend the event on time. [Attendance_category](/vocabulary.md#attendance-category) can be used to express additional detail, for example whether lateness was extreme or condoned, or to provide the source system attendance type code (as might be recorded in a conventional paper register). 

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.completion [1]</td>
		<td>When set to "true", result.completion indicates that the learner attended the event. "false"indicates that the learner did not attend the event.</td>
		<td>Boolean</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#attendance-late">http://result.extension.http://xapi.jisc.ac.uk/attendance_late</a> [0..1]</td>
		<td>When set to 1, indicates the person was late</td>
<td>Integer 0/1. 1 for late</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#attendance-category">result.extension.http://xapi.jisc.ac.uk/attendance_category [0..1]</a></td>
		<td>Indicates any given category for non-attendance or lateness. </td>
		<td>String</td>
	</tr>		
</table>


#### Entity Example:

``` javascript
 "result":{
        "completion":true,
		
	 "extensions":{
		  "http://xapi.jisc.ac.uk/attendance_late":1,
		  "http://xapi.jisc.ac.uk/attendance_category":"1",
		 }
    }
```

### Object


The object pattern defines an event that has been attended.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the object of the xAPI statement. This must be unique (within a given platform) across all object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. It is required and valid values are listed on the <a href="vocabulary.md#31-activity-types">vocabulary page</a></td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional object name</td>
		<td>string</td>
	</tr> 
	<tr>
	   <td>object.definition.extensions.http://xapi.jisc.ac.uk/subType [0.1]</td>
	   <td>May be used to qualify what kind of timetabled event occurred using an IRI given on the
	   <a href="vocabulary.md#31-activity-types">vocabulary</a> page. Permitted values are: "http://xapi.jisc.ac.uk/lecture" or "http://id.tincanapi.com/activitytype/tutor-session".</td>
	   <td>iri</td>
	</tr> 
	<tr>
	   <td><a href ="/vocabulary.md#event-type-id">object.definition.extensions.http://xapi.jisc.ac.uk/event_type_id </a>[0.1]</td>
	   <td>An identifier for the type of event. id is from locally-defined list. </td>
	   <td>Integer related to activity type</td>
	</tr> 
	<tr>
	   <td><a href="/vocabulary.md#event-type-description">object.definition.extensions.http://xapi.jisc.ac.uk/event_type_description</a> [0.1]</td>
	   <td>Description of the event type. Description is from locally-defined list. </td>
	   <td>String, description of event</td>
	</tr> 
	<tr>
	   <td><a href="/vocabulary.md#event-max-count">object.definition.extensions.http://xapi.jisc.ac.uk/event_max_count </a>[0.1]</td>
	   <td>The maximum number of people that could have attended the event. </td>
	   <td>Integer</td>
	</tr> 
	<tr>
	   <td><a href="/vocabulary.md#event-mandatory">object.definition.extensions.http://xapi.jisc.ac.uk/event_mandatory</a>[0.1]</td>
	   <td>States if the event was optional or not</td>
	   <td>Integer, 1 for mandatory, 0 for non mandatory</td>
	</tr>
	<tr>
	   <td><a href="/vocabulary.md#timetabled-event">object.definition.extensions.http://xapi.jisc.ac.uk/event_timetabled</a>[0.1]</td>
	   <td>States if the event was timetabled or not</td>
	   <td>Integer, 1 for mandatory, 0 for non mandatory</td>
	</tr>
	<tr>
	   <td>object.definition.extensions.http://xapi.jisc.ac.uk/starttime [0.1]</td>
	   <td>Planned start time. Uses datetimes for planned end of event.</td>
	   <td>ISO 8601 timestamp</td>
	</tr>
	<tr>
	<td>object.definition.extensions.http://xapi.jisc.ac.uk/endtime [0.1]</td>
	   <td>The planned end time of event. Uses datetimes for planned end time of event</td>
	   <td>ISO 8601 timestamp</td>
	</tr> 
 </table>


#### Entity Example:
The object defines an event that has been attended. Information on the event can be found in the object.extensions. See the [objectD section in the common structures document](/common_structures.md#objectd).

``` javascript

 "object": {
        "objectType": "Activity",
        "id": "http://wicketkeeper.poppleton.ac.uk/modules/2016/sem1/psy101/qlecture1",
        "definition": {
            "type": "http://xapi.jisc.ac.uk/lecture",
            "name": {
                "en": "Psychology 101 Introduction"
            },
            "description": {
                "en": "The first tutorial of psychology 101"
            },
	    "extensions": {
            	"http://xapi.jisc.ac.uk/subType": "http://xapi.jisc.ac.uk/workshop"
	    	"http://xapi.jisc.ac.uk/starttime": "2016-02-05T10:00:00.000Z",
          	"http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z",
            	"http://xapi.jisc.ac.uk/event_type_id": "1",
		"http://xapi.jisc.ac.uk/event_timetabled": 1,
	    	"http://xapi.jisc.ac.uk/event_type_description": "Lecture", 
            	"http://xapi.jisc.ac.uk/event_max_count": 32,
            	"http://xapi.jisc.ac.uk/event_mandatory": 1
       	 }
    },
		
```

### Context


<table>
<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<td>context.instructor [0..1]</td>
	<td></td>
	<td>JSON Object</td>
</tr>
<tr>
	<td>context.instructor.objectType [1]</td>
	<td>Must be "Agent"</td>
	<td>String, Must be "Agent"</td>
</tr>
<tr>
	<td>context.instructor.account.homepage [1] </td>
	<td>URL of the home page of the application for which the login id applies.</td>
	<td>url</td>
</tr>
<tr>
	<td>context.instructor.account.name [1] </td>
	<td>account.name gives the login id for the instructor.</td>
	<td>string</td>
</tr>
<tr>
	<td>context.extensions.version [0..1]</td>
	<td>Recommended,  identifies the version of the Jisc xAPI profile found on the ReadMe page.</td>
	<td>string</td>
</tr>
<tr>
	<td>context.extensions.https://xapi.jisc.ac.uk/devicelocation [0..1]</td>
	<td>Devicelocation is an optional geojson object with  geolocation details of the device used to attend the event.</td>
	<td>JSON object following the geojson spec</td>
</tr>
<tr>
	<td><a href="vocabulary.md#course-area">context.extensions.https://xapi.jisc.ac.uk/courseArea</a> [0..1]</td>
	<td>Umbrella course/parent area by a UDD Module Instance ID or VLE Module ID.</td>
	<td>JSON object</td>
</tr>
</table>

#### Entity Example:


``` javascript
 "context": {
    "instructor": {
            "objectType": "Agent",
            "account": {
                "name": "2",
                "homePage": "http://localhost/moodle"
            }
		},
		
	"extensions": {
        "http://xapi.jisc.ac.uk/version": "1.0",
		"http://xapi.jisc.ac.uk/deviceLocation": {
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [51.510531, -0.118930]
					},
				"properties": {
				"name": "University of Jisc"
				}
		},	
			
	"http://xapi.jisc.ac.uk/courseArea": {
        "http://xapi.jisc.ac.uk/vle_mod_id": "LA101-200-2016S1-0",
		"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
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
    "result":{
        "completion":true,
		
		"extensions":{
		  "http://xapi.jisc.ac.uk/attendance_late":1,
		  "http://xapi.jisc.ac.uk/attendance_category":"1",
		 }
    }
		
     "object": {
        "objectType": "Activity",
        "id": "http://wicketkeeper.poppleton.ac.uk/modules/2016/sem1/psy101/qlecture1",
        "definition": {
            "type": "http://xapi.jisc.ac.uk/lecture",
            "name": {
                "en": "Psychology 101 Introduction"
            },
            "description": {
                "en": "The first tutorial of psychology 101"
            },
			
	"extensions": {
            "http://xapi.jisc.ac.uk/subType": "http://xapi.jisc.ac.uk/workshop"
	    "http://xapi.jisc.ac.uk/starttime": "2016-02-05T10:00:00.000Z",
            "http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z",
            "http://xapi.jisc.ac.uk/event_type_id": "1",
	    "http://xapi.jisc.ac.uk/event_timetabled": 1,
	    "http://xapi.jisc.ac.uk/event_type_description": "Lecture", 
            "http://xapi.jisc.ac.uk/event_max_count": 32,
            "http://xapi.jisc.ac.uk/event_mandatory": 1
       	 }
    
	"context": {
		"instructor": {
            		"objectType": "Agent",
            		"account": {
                		"name": "2",
                		"homePage": "http://localhost/moodle"
            }
		},
		
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0",
			"http://xapi.jisc.ac.uk/deviceLocation": {
				"type": "Feature",
				"geometry": {
					"type": "Point",
					"coordinates": [51.510531, -0.118930]
						},
					"properties": {
					"name": "University of Jisc"
					}
			},	
			
		"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101-200-2016S1-0",
			"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
					}	
			}

```
