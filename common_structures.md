# Jisc Learning Analytics Common Structures
The following sections describe common structures used across several of the Statement templates.
Wherever a Statement template refers to a "common entity identifier", the example given in the Statement template follows or extends 1 of the structures on this page.

For each common structure there is a table that lists:

- the name of each property contained in the entity; whether mandatory, indicated by [1], or optional, indicated by [0..1]
- a human-readable description of each property
- the format of the content of the property.

An example is supplied for each structure and its common variants.

## ActorA
Common entity identifier:  ActorA

This entity is required across all Statements in the Jisc Profile.

The Actor entity describes the individual that is the subject of the Statement.

<table>
<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</th></tr>
<tr>
	<td>actor.objectType [1]</td>
	<td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc Profile.</td>
	<td>Must have the value "Agent"</td>
</tr>
<tr>
	<td>actor.name [0..1]</td>
	<td>Full name of user.</td>
	<td>string</td>
</tr>
<tr>
	<td>actor.account [1]</td> 
	<td>Account details of Agent.</td> 
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

This entity is required across all Statements in the Jisc Profile.

The Verb structure indicates the action which the Statement expresses. The Verbs used in the Jisc Profile are listed on the [vocabularies](vocabulary.md#verb) page.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<tr>
		<td>verb.id [1]</td>
		<td>An IRI that identifies the Verb. Valid IRIs depend on the Statement and are given on the relevant Statement page.</td>
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
The significance of data in a Statement can be more clearly understood if we describe the circumstances surrounding the Statement. These circumstances are described in a Statement's Context entity.

### ContextA
Common entity identifier: ContextA

This pattern is used across many Statements in the Jisc Profile, but there may be additional data elements required for some Statements. Four extensions are provided, with IRIs as defined on the <a href="vocabulary.md#extensions">vocabularies page</a>.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI Profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extension.sessionId [0..1]</td>
		<td>The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</td>
		<td>string</td>
	<tr> 
		<td>context.extension.ip-address [1]</td>
		<td>Client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	<tr> 
		<td>context.extension.courseArea [0..1]</td>
		<td>The academic context in which this Activity is situated (e.g. umbrella course, or parent area). The properties in courseArea must be a UDD Module Instance ID or a VLE Module ID or both. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>.</td>
		<td>JSON object</td>
	<tr> 
	<tr> 
		<td>context.extension.sequenceNumber [0..1]</td>
		<td>If the activity is part of a sequence then SequenceNumber can be used as a counter</td>
		<td>int</td>
	<tr> 
		<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/statementCat [0..1]</td>
		<td>Recommended For querying lookup. Set to category of statement. Attendance, VLE, Library <br/></td>
		<td>string</td>
	</tr>
	</table>
	
	

#### Example:
``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
	
			"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
			},
					
		"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
		"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
			}
        }
``` 
### ContextB
Common entity identifier: ContextB

The ContextB pattern is similar to ContextA, but with the addition of a contextActivities property with a ‘parent’ property. This allows statements to be associated to the Activity described in the Object entities as part of a larger whole. In the Jisc profile all ContextActivities arrays must be an array with only 1 value.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.contextActivities [0..1]</td>
		<td>An optional property that holds a mandatory parent property. It allows statements to be associated with the Object entity's Activity as part of a larger whole. The example shows a course within the VLE. 
		<td>The 'property' property has a object as its value, typically just the object.id.</td>
	</tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
		</tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended, identifies the version of the Jisc xAPI Profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extension.sessionId [0..1]</td>
		<td>The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</td>
		<td>string</td>
		</tr>
	<tr> 
		<td>context.extension.ip-address [1]</td>
		<td>Client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
		</tr>
	<tr> 
		<td>context.extension.courseArea [0..1]</td>
		<td>Umbrella course/parent area by its an UDD Module Instance ID or VLE Module ID. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>..</td>
		<td>JSON object</td>
		</tr>
	<tr> 
		<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/statementCat [0..1]</td>
		<td>Recommended For querying lookup. Set to category of statement. Attendance, VLE, Library <br/></td>
		<td>string</td>
	</tr>
</table>

#### Example:
``` javascript
"context": {
	"contextActivities":{
            "parent":[
                {
                    
                    "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
                    
                }
            ]
        },
        
        "platform": "Moodle",
        "extensions": {
		
			"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
			},
			
 		"http://xapi.jisc.ac.uk/sessionId":"32456891",
        "http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
			}
		}
```




## Object
Depending on the Statement, different patterns apply to express the Object of a Statement.

### ObjectA
Common entity identifier: ObjectA

This Object pattern describes the core attributes of Object as used in the Jisc Profile.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the object of the xAPI Statement. This must be unique (within a given platform) across all Object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the Object of the Statement. It is required and valid values are listed on the [vocabularies](vocabulary.md#activity-types) page.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional Object name</td>
		<td>string</td>
	</tr>
	<tr>
		<td>object.definition.extensions.http://xapi.jisc.ac.uk/subType [0..1]</td>
		<td>May be used to indicate the sub-type of this Activity, if applicable for the recipe being used to create the Statement. This qualifies the object.objectType, and is described on the [vocabularies](vocabulary.md#object-definition-extensions) page.</td>
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

This Object pattern describes an Activity with a due date.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the Object of the xAPI Statement. This must be unique (within a given platform) across all Object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the Object of the Statement. It is required and valid values are listed on the <a href="vocabulary.md#31-activity-types">vocabulary page</a></td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional Object name</td>
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
			"type":"http://adlnet.gov/expapi/activities/assessment",
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
## Result A

The entity can include scaled, raw, min and max score, success, and response (the instructor's feedback) if known. See [score](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#Score). See the [vocabulary](vocabulary.md) page for a definition of the 'http://xapi.jisc.ac.uk/grade' extension.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.score.scaled [0..1]</td>
		<td>The score related to the experience as modified by scaling and/or normalization.  If the raw value can be calculated as a percentage then the scaled may be populated as such. In the example shown, there is a 100 question quiz and a user has 25 questions correct, corresponding to a raw value of ‘25’ and a scaled value of ‘0.25’ (25%). If the data is not scaled then it should not be given and should not be zero</td>
<td>decimal number between -1 and 1, inclusive.</td>
	</tr>
	<tr>
		<td>result.score.raw [0..1]</td>
		<td>Unmodified score. If not present then grade must be given.</td>
<td>decimal number between min and max (if present, otherwise unrestricted), inclusive</td>
	</tr>
	<tr>
		<td>result.score.min [0..1]</td>
		<td>The lowest possible score. If known this should be given.</td>
<td>decimal number less than max (if present)</td>
	</tr>
	<tr>
		<td>result.score.max [0..1]</td>
		<td>The highest possible score. If known this should be given.</td>
		<td>decimal number greater than min (if present)</td>
	</tr>
	<tr>
		<td>result.success [0..1] Deprecated</td>
		<td>Indicates whether or not the attempt was successful. Deprecated</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>result.completion [0..1]</td>
		<td>Indicates whether or not the Activity was completed.</td>
		<td>true or false</td>
	</tr
	>	<tr>
		<td>result.response [0..1]</td>
		<td>Instructor's or automatic feedback</td>
		<td>string (256)</td>
	</tr>
	<tr>
		<td>result.extensions.http://xapi.jisc.ac.uk/grade [0..1]</td>
		<td>Non-numerical assessment result. If not present then score.raw must be given</td>
		<td>string (256)</td>
	</tr>
</table>

### Example of score that can be calculated as a percentage

``` javascript 
"result": {
        "score": {
            "scaled": 0.25,
            "raw": 25,
            "min": 0,
            "max": 100
        },
		
        "success": false,
        "completion": true,
        "response": "Your answer should have been: The cow jumped over the moon."
         }
````

### Example of grade result:

```
"result": {
        "extensions": {
        	"http://xapi.jisc.ac.uk/grade": "E"
        },
		
        "success": false,
        "completion": true,
        "response": "Your answer should have been: The cow jumped over the moon."
         }
````