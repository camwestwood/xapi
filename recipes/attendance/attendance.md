# Attended_Learning_Event Statement template

[Statement Template Changes](/version_changes.md#attendance)

## Purpose

This Statement defines the structure and terms to record a learner's attendance at an event such as a lecture or other learning activity. The expectation is that the source data will be collected by a system designed to record attendance explicitly via some action of the learner, such as swiping a card, or of the teacher, such as completing an electronic register.

Attendance at either timetabled events or non-timetabled events can be recorded in an attendance statement. It is vital that the correct object.definition.type is used to differentiate them:

- timetabled event - object.definition.type: http://xapi.jisc.ac.uk/event_timetabled
- non-timetabled event - object.definition.type: http://xapi.jisc.ac.uk/event_non-timetabled

A **timetabled event** is a learning activity that is specifically recorded in the provider's timetabling system for students to attend usually but not exclusively within the context of a module or course; for example, a lecture, seminar or practical. These events will usually have fixed start and end times.

A **non-timetabled event** is an event not contained within the provider's timetabling system, for example an ad hoc learning activity, pastoral activity or a non-teaching activity. These events may or may not have fixed start and end times, and may or may not be within the context of a module or course. Most importantly, they are not covered by the timetabled event definition.

Natural language example of a typical Statement: "Logged via Moodle from the Study Goal app, John Smith was late attending the Psychology 101 Introduction workshop, which started at 09:00 on 24th May 2015. This workshop was part of LA101-200-2016, a Psychology module."

## Actor

Common entity identifier: [ActorA](/common_structures.md#actora)
The Actor entity describes the individual who has attended the event.

### Entity Example:

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    }
}
```

## Verb

Common entity identifier: [VerbA](/common_structures.md#verba)

The Verb used in the attendance Statement is "attended" (http://adlnet.gov/expapi/verbs/attended). It indicates the Actor was present at a virtual or physical event or activity. It uses the Jisc Profile common entity identifier [VerbA](/common_structures.md#verba). The verb by itself does not indicate what kind of event was attended.

### Entity Example:

``` javascript
{
   "verb": {
      "id": "http://adlnet.gov/expapi/verbs/attended",
      "display": {
         "en": "attended"
      }
   }
}
```

## Object

The Object entity defines an event that has been attended. 1 of 2 values for object.definition.type is permitted; see Purpose above.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the Object of the Statement, i.e. for the event for which attendance is being recorded. This must be unique (within a given platform) across all Object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the Object of the Statement. It is required and must be either http://xapi.jisc.ac.uk/event_timetabled or http://xapi.jisc.ac.uk/event_non-timetabled  (see above for the definitions).</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>An optional short title for the event</td>
		<td>string</td>
	</tr>
		<tr>
		<td>object.definition.description [0..1]</td>
		<td>Optional description of the Activity</td>
		<td>string</td>
	</tr>
	<tr>
	   <td>object.definition.extensions.http://xapi.jisc.ac.uk/subType [0.1]</td>
	   <td>May be used to qualify what kind of event occurred - for example, for a timetabled event whether it was a lecture, practical, a group tutorial, etc - using the approach documented on the
	   <a href="/vocabulary.md#31-activity-types">vocabulary</a> page. Separate subType lists for timetabled and non-timetabled events may be used.</td>
	   <td>iri</td>
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
	   <td><a href="/vocabulary.md#event-mandatory">object.definition.extensions.http://xapi.jisc.ac.uk/event_mandatory</a> [0.1]</td>
	   <td>States whether or not the event was mandatory.</td>
	   <td>Integer, 1 for mandatory, 0 for non mandatory</td>
	</tr>
	<tr>
	   <td>object.definition.extensions.http://xapi.jisc.ac.uk/starttime [1]</td>
	   <td>Planned start time. Uses datetimes for planned start time of event.</td>
	   <td>ISO8601 timestamp</td>
	</tr>
	<tr>
	<td>object.definition.extensions.http://xapi.jisc.ac.uk/endtime [0.1]</td>
	   <td>Planned end time. Uses datetimes for planned end time of event. Recommended</td>
	   <td>ISO8601 timestamp</td>
	</tr>
 </table>

### Entity Example:
The Object defines an event that has been attended. Information on the event can be found in the object.extensions.

``` javascript
{
   "object": {
      "objectType": "Activity",
      "id": "http://wicketkeeper.poppleton.ac.uk/modules/2016/sem1/psy101/qlecture1",
      "definition": {
         "type": "http://xapi.jisc.ac.uk/event_timetabled",
         "name": {
            "en": "Psychology 101 Introduction"
         },
         "description": {
            "en": "The first tutorial of psychology 101"
         },
	 "extensions": {
            "http://xapi.jisc.ac.uk/subType": "http://poppleton.xapi.jisc.ac.uk/workshop",
            "http://xapi.jisc.ac.uk/event_type_description": "Workshop",
            "http://xapi.jisc.ac.uk/event_max_count": 32,
            "http://xapi.jisc.ac.uk/event_mandatory": 1,
            "http://xapi.jisc.ac.uk/starttime": "2016-02-05T10:00:00.000Z",
            "http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z"
         }
      }
   }
}
```
## Result
The `result` component is used to indicate facts about the student's attendance or non-attendance.

The result.completion must be set to true if the student attended the event, or false otherwise. The extension [attendance_late](/vocabulary.md#attendance-late) can be set to 1 if the student did not attend the event on time. [Attendance_category](/vocabulary.md#attendance-category) can be used to express additional detail, for example whether lateness was extreme or condoned, or to provide the source system attendance type code (as might be recorded in a conventional paper register). The values which may be used for the attendance_category are not constrained, and may be those used in the source system.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.completion [1]</td>
		<td>When set to "true", result.completion indicates that the learner attended the event, "false" indicates that the learner did not attend the event.</td>
		<td>Boolean</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#attendance-late">result.extensions.http://xapi.jisc.ac.uk/attendance_late</a> [0..1]</td>
		<td>When set to 1, indicates the person was recorded as being late. Not used when result.completion is false.</td>
<td>Integer 0/1. 1 for late</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#attendance-category">result.extensions.http://xapi.jisc.ac.uk/attendance_category</a> [0..1]</td>
		<td>Indicates any given category for non-attendance or lateness. </td>
		<td>String</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#Submission-time">result.extensions.http://xapi.jisc.ac.uk/submission_time</a> [0..1]</td>
		<td>Indicates the time the result was submitted</td>
		<td>ISO8601 timestamp</td>
	</tr>	

</table>

### Entity Example:

``` javascript
{
   "result":{
      "completion": true,
      "extensions": {
         "http://xapi.jisc.ac.uk/attendance_late": 1,
	 "http://xapi.jisc.ac.uk/submission_time": "2015-05-24T09:00",
         "http://xapi.jisc.ac.uk/attendance_category": "L"
      }
   }
}
```

## Context

<table>
<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<td>context.platform [0..1]</td>
	<td>The platform used by the student or member of staff to record the student's attendance. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Study Goal".</td>
	<td>string</td>
</tr>
<tr>
	<td>context.instructor [0..1]</td>
	<td>Tutor or other member of staff involved</td>
	<td>JSON Object</td>
</tr>
<tr>
	<td>context.instructor.objectType [1]</td>
	<td>Must be "Agent"</td>
	<td>String, must be "Agent"</td>
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
	<td>context.extensions.http://xapi.jisc.ac.uk/version [0..1]</td>
	<td>Recommended. Identifies the version of the Jisc Profile found on the ReadMe page.</td>
	<td>decimal</td>
</tr>
<tr>
	<td>context.extensions.https://xapi.jisc.ac.uk/deviceLocation [0..1]</td>
	<td>deviceLocation is an optional geoJSON Object with  geolocation details of the device used to attend the event.</td>
	<td>JSON Object following the geoJSON spec</td>
</tr>
<tr>
	<td><a href="vocabulary.md#course-area">context.extensions.https://xapi.jisc.ac.uk/courseArea</a> [0..1]</td>
	<td>Standard container for the UDD Course Instance ID and/or the UDD Module Instance ID which the attendance is related to.</td>
	<td>JSON Object</td>
</tr>
	<tr>
		<td><a href="vocabulary.md#recipeCategory">context.extensions.https://xapi.jisc.ac.uk/recipeCat</a>[0..1]</td>
		<td>Recommended For querying lookup. Set to "attendance" in attendance templates.<br/></td>
		<td>string</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#captured_from">context.extensions.https://xapi.jisc.ac.uk/captured_from</a>[0..1]</td>
		<td>The application or device type that captured the attendance; for example, Web, Android, iOS.<br/></td>
	<td>string</td>
	</tr>
</table>

#### Entity Example:

``` javascript
{
   "context": {
      "platform" :"Study Goal",
      "instructor": {
         "objectType": "Agent",
         "account": {
            "name": "RKeenan",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
         }
      },
      "extensions": {
         "http://xapi.jisc.ac.uk/version": "1.0.2",
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
            "http://xapi.jisc.ac.uk/uddCourseInstanceID": "LA101-200",
            "http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
         },
         "http://xapi.jisc.ac.uk/recipeCat": "Attendance",
         "http://xapi.jisc.ac.uk/captured_from": "ios"
      }
   }
}
```

## Timestamp
In attendance statements the timestamp property must be set to the start time of the timetabled event; the value must be identical to the value found in the starttime extension.

### Entity Example
```
{
 "timestamp": "2016-02-05T10:00:00.000Z"
}
```

## Full Example
``` javascript
{
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
	"object": {
		"objectType": "Activity",
		"id": "http://wicketkeeper.poppleton.ac.uk/modules/2016/sem1/psy101/qlecture1",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/event_timetabled",
			"name": {
				"en": "Psychology 101 Introduction"
			},
			"description": {
				"en": "The first tutorial of psychology 101"
			 },
			"extensions": {
				"http://xapi.jisc.ac.uk/subType": "http://poppleton.xapi.jisc.ac.uk/workshop",
				"http://xapi.jisc.ac.uk/event_type_description": "Workshop",
				"http://xapi.jisc.ac.uk/event_max_count": 32,
				"http://xapi.jisc.ac.uk/event_mandatory": 1,
				"http://xapi.jisc.ac.uk/starttime": "2016-02-05T09:00:00.000Z",
				"http://xapi.jisc.ac.uk/endtime": "2016-02-05T14:00:00.000Z"
			}
		}
	},
	"result":{
		"completion":true,
		"extensions":{
			"http://xapi.jisc.ac.uk/attendance_late":1,
			"http://xapi.jisc.ac.uk/attendance_category":"1",
			"http://xapi.jisc.ac.uk/submission_time": "2016-02-05T10:00:00.000Z"
		}
	},
	"context": {
		"platform" :"Study Goal",
		"instructor": {
			"objectType": "Agent",
			"account": {
				"name": "RKeenan",
				"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
			}
		},
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.1",
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
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
			},
			"http://xapi.jisc.ac.uk/recipeCat": "Attendance",
			"http://xapi.jisc.ac.uk/captured_from": "ios"
		}
	},
	"timestamp": "2016-02-05T10:00:00.000Z"
}
```
