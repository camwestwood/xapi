# Jisc Learning Analytics Common Structures
The following sections describe common patterns used across several of the recipes.
Wherever a recipe refers to a "common entity identifier", the example given in the recipe follows one of the patterns given on this page.

## ActorA
Common entity identifier:  ActorA

This entity is required across all recipes in the Jisc profile.

The actor entity describes the individual that is the subject of the statement.

<table>
<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</th></tr>
<tr>
	<td>actor.objectType [1]</td>
	<td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc profile.</td>
	<td>Must have the value "Agent"</td>
</tr>
<tr>
	<td>actor.name [0..1]</td>
	<td>Full name of user.</td>
	<td>string</td>
</tr>
<tr>
	<td>actor.account [1]</td> 
	<td>Account details of agent[1]</td> 
	<td>JSON Object</td> 
</tr>	
<tr>
	<td>actor.account.name [1]</td> 
	<td>Login id for the subject</td> 
	<td>string</td> 
</tr>
<tr>
	<td>actor.account.homepage [1]</td> 
	<td>URL of the home page of the application for which the login id applies.</td> 
	<td>url</td> 
</tr>
</table>

### Example
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

## VerbA
Common entity identifier: VerbA

This entity is required across all recipes in the Jisc profile.

The Verb structure indicates the action which the statement expresses. The verbs used in the Jisc profile are listed on the [vocabularies](vocabulary.md#verb) page.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<tr>
		<td>verb.id [1]</td>
		<td>An IRI that identifies the Verb. Valid IRIs depend on the recipe and are given on the relevant recipe page.</td>
		<td>IRI</td>
	</tr>
	<tr>
		<td>verb.display [1]</td>
		<td>A human readable representation of Verb, takes a RFC 5646 Language Tag. </td>
		<td>string </td>
	</tr>
</table>


### Example
``` javascript
"verb": {
  "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
  "display": {
    "en" : "logged in to"
  }
}
```

## Context
Depending on the recipe, different patterns describe the circumstances that form the setting of the statement, so that it can be better understood.

### ContextA
Common entity identifier: ContextA

This pattern is used across many recipes in the Jisc profile, but there may be additional data elements required for some recipes. Four extensions are provided for, with IRIs as defined on the <a href="vocabulary.md#extensions">vocabularies page</a>.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended, identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extension.sessionId [0..1]</td>
		<td>The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</td>
		<td>string</td>
	<tr> 
		<td>context.extension.ip-address [1]</td>
		<td>client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	<tr> 
		<td>context.extension.courseArea [0..1]</td>
		<td>Umbrella course/parent area by its home page URI and / or its identifier. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>..</td>
		<td>JSON object</td>
	<tr> 
	</table>

#### Example:
``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
	
			"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
				"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
		},
					
		"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
		"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
			}
        }
``` 
### ContextB
Common entity identifier: ContextB (Deprecated)

ContextB pattern is similar to ContextA, but with the addition of a contextActivities property with a ‘grouping’ property. This allows statements to be associated to the activity described in the object entities as part of a larger whole.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.contextActivities [0..1]</td>
		<td>An optional property that holds a mandatory ‘grouping’ property. It allows statements to be associated with the object entity's activity as part of a larger whole. The example shows a course within the VLE. 
		<td>The 'grouping' property has an <a href="#objecta">ObjectA</a> as its value.</td>
	</tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
		</tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended, identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extension.sessionId [0..1]</td>
		<td>The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</td>
		<td>string</td>
	<tr> 
		<td>context.extension.ip-address [1]</td>
		<td>client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	<tr> 
		<td>context.extension.courseArea [0..1]</td>
		<td>Umbrella course/parent area by its home page URI and / or its identifier. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>..</td>
		<td>JSON object</td>
	<tr> 
</table>

#### Example:
``` javascript
"context": {
	"contextActivities":{
            "grouping":[
                {
                    "objectType":"Activity",
                    "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
                    "definition":{
                        "type":"http://xapi.jisc.ac.uk/courseArea",
                        "name":{
                            "en":"xAPI Basics"
                        },
                        "description":{
                            "en":"xAPI Basics course for Learning Analytics enthusiasts"
                        }
                    }
                }
            ]
        },
        
        "platform": "Moodle",
        "extensions": {
		
			"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
				"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
			},
			
 		"http://xapi.jisc.ac.uk/sessionId":"32456891",
        "http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
			}
		}
```

### ContextC

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
	<td>Umbrella course/parent area by its home page URI and / or its identifier.</td>
	<td>JSON object</td>
</tr>
</table>

## Object
Depending on the recipe, different patterns apply to express the object of a statement.

### ObjectA
Common entity identifier: ObjectA

This object pattern describes the core attributes of Object as used in the Jisc profile.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
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
		<td>Indicates the type of the object of the statement. It is required and valid values are listed on the <a href="vocabulary.md#activity-types">vocabulary page</a></td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional object name</td>
		<td>string</td>
	</tr>
	<tr>
		<td>object.definition.extensions.http://xapi.jisc.ac.uk/subType [0..1]</td>
		<td>May be used to indicate the sub-type of this activity, if applicable for the recipe being used to create the statement. This qualifies the object.objectType, and is described on the [vocabularies](vocabulary.md#object-definition-extensions) page.</td>
		<td>iri</td>
	</tr>
</table>

#### Example:
``` javascript
"object": {
  "objectType": "Activity",
  "id": "https://courses.alpha.jisc.ac.uk/moodle",
  "definition": {
    "type": "http://activitystrea.ms/schema/1.0/application",
    "name": {
      "en": "University of Jisc VLE"
    },
    "extensions": {
      "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
    }
  }
}
```

### ObjectB
Common entity identifier: ObjectB

This object pattern describes an activity that has been completed. Examples of valid object.definition vocabulary Activity object Types are listed on the [vocabularies](vocabulary.md) page.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
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
		<td>object.definition.extensions.http://xapi.jisc.ac.uk/dueDate [0..1]</td>
		<td>Indicates when an assignment is due</td>
		<td>ISO 8601 date time</td>
	</tr>
</table>


#### Example:
``` javascript
"object":{

		"objectType":"Activity",
		"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
		"definition":{
			"type":"http://adlnet.gov/expapi/activities/assesment",
			"name":{
				"en":"Course Assignment"
			},
			"description":{
				"en":"Course Assignment description"
				}
			},
			
		    "extensions":{
				"http://xapi.jisc.ac.uk/dueDate": "2016-02-05T17:59:45.000Z"
			}
			
		}
```

### ObjectC
Common entity identifier: ObjectC

The object pattern defines an activity that has been completed. [Examples of valid object.definition Activity object Types can be found in the vocabulary](../vocabulary.md#30-object).



<table>
	<tr><th>Property [cardinality]</th><th>Description</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for a single unique learning event.</td>
	</tr>
	<tr>
		<td>object.definition [1]<br/>
		object.definition.type [1]<br/>
		object.definition.extension.http://id.tincanapi.com/extension/datetime [1]<br/>
		object.definition.extension.http://id.tincanapi.com/extension/duration [0..1]</td>
		<td>The <b>type</b> indicates the type of the object of the statement. It is required and valid values are listed on the <a href="vocabulary.md#31-activity-types">vocabulary</a> page.</br>
				The <b>name</b> holds the name of the learning activity.</br>
		The <b>description</b> describes the learning activity.</br>
<b>"http://id.tincanapi.com/extension/datetime"</b> is an extension that holds a ISO 8601 date time that indicates when the learning event started.<br /><b>"http://id.tincanapi.com/extension/duration"</b> represents the length of time the event is scheduled to take, expressed as a string formatted as an ISO8601 duration. Note that ISO8601 duration allows representations to extend beyond their carry over points. e.g. one and a half hours can be represented as either PT1H30M or PT90M.</td>
	</tr>
</table>

Example:

``` javascript

"object":{
		"objectType":"Activity",
		"id":"http://www.poppleton.ac.uk/psy101/lecture1",
		"definition":{
			"type":"http://activitystrea.ms/schema/1.0/event",
			"name":{
				"en":"Lecture"
			},
			"description":{
				"en":"The first lecture of psychology 101"
				}
			},
			
		    "extensions":{
				"http://id.tincanapi.com/extension/datetime": "2016-02-05T10:00:00.000Z",
				"http://id.tincanapi.com/extension/duration": "PT1H30M"
			}
			
		}
		
```

### ObjectD

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
	   <td>Requires an identifier for the type of event</td>
	   <td>Integer related to activity type</td>
	</tr> 
	<tr>
	   <td><a href="/vocabulary.md#event-type-description">object.definition.extensions.http://xapi.jisc.ac.uk/event_type_description</a> [0.1]</td>
	   <td>description of the event type</td>
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

## Result
In the Jisc profile, the use of the result entity and any of its properties is optional.

### ResultA
Common entity identifier: ResultA

This result pattern describes the completion of a learning activity and is optional.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.completion [1]</td>
		<td>When set to "true", result.completion indicates that the learner attended the event. "false" indicates that the learner did not attend the event.</td>
		<td>Boolean</td>
	</tr>
</table>

#### Example:
``` javascript
 "result":{
        "completion":true
    }
```

## ResultB
Common entity identifier: ResultB
This result pattern describes completion and is usually optional. It can include scaled, raw, min and max score, success, and response (the instructor's feedback). See [score](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#Score). See the [vocabulary](https://github.com/jiscdev/xapi/blob/vocabulary.md) page for a definition of the 'http://xapi.jisc.ac.uk/grade' extension.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.completion [1]</td>
		<td>When set to "true", result.completion indicates that the learner attended the event. "false"indicates that the learner did not attend the event.</td>
		<td>Boolean</td>
	</tr>
	<tr>
		<td>result.score.scaled [0..1]</td>
		<td>The score related to the experience as modified by scaling and/or normalization</td>
<td>decimal number between -1 and 1, inclusive.</td>
	</tr>
	<tr>
		<td>result.score.raw [0..1]</td>
		<td>Unmodified score</td>
<td>decimal number between min and max (if present, otherwise unrestricted), inclusive</td>
	</tr>
	<tr>
		<td>result.score.min [0..1]</td>
		<td>The lowest possible score</td>
<td>decimal number less than max (if present)</td>
	</tr>
	<tr>
		<td>result.score.max [0..1]</td>
		<td>The highest possible score</td>
		<td>decimal number greater than min (if present)</td>
	</tr>
	<tr>
		<td>result.success [0..1]</td>
		<td>Indicates whether or not the attempt was successful.</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>result.response [0..1]</td>
		<td>Instructor's or automatic feedback</td>
		<td>string (256)</td>
	</tr>
	<tr>
		<td>result.extensions.http://xapi.jisc.ac.uk/grade [0..1]</td>
		<td>Non-numerical assessment result</td>
		<td>string (256)</td>
	</tr>
</table>

## Example:

```
"result": {

	"completion":true,
	 
    "score": {
    "scaled": 0.25,
        "raw": 25,
        "min": 0,
        "max": 100
     },
		
    "success": false,
    "completion": true,
    response": "The cow jumped over the moon."
	
    }

````

For grade, leave out min and max, and insert the following:
````
        "extensions": { 
             "http://xapi.jisc.ac.uk/grade": "5 Stars"
        }
````
### ResultC
Common entity identifier: ResultC

This pattern describes the result and if the actor was on time to the event, if they were late and what category a late

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



### Example

``` javascript
 "result":{
        "completion":true,
		
		 "extensions":{
		  "http://xapi.jisc.ac.uk/attendance_late": 1,
		  "http://xapi.jisc.ac.uk/attendance_category":"1",
		 }
    }
```

### ResultD
Common entity identifier: ResultD

This pattern contains the content of the post.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th></tr>
	<tr><td>result.response [1]</td><td>Content of post or reply</td></tr>
</table>

### Example


``` javascript
 "result":{
        "response":"I have some good links on that subject, I will find them for you"
    }
``` 
