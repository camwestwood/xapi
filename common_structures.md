# Jisc Learning Analytics Common Structures
The following sections describe common structures used across several of the statement templates.
Wherever a statement template refers to a "common entity identifier", the example given in the statement template follows or extends 1 of the structures on this page.

## ActorA
Common entity identifier:  ActorA

This entity is required across all statements in the Jisc profile.

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

This entity is required across all statements in the Jisc profile.

The Verb structure indicates the action which the statement expresses. The verbs used in the Jisc profile are listed on the [vocabularies](vocabulary.md#verb) page.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
<tr>
	<tr>
		<td>verb.id [1]</td>
		<td>An IRI that identifies the Verb. Valid IRIs depend on the statement and are given on the relevant statement page.</td>
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
The significance of data in a statement can be more clearly understood if we describe the circumstances surrounding the statement. These circumstances are described in a statement's Context entity.


### ContextA
Common entity identifier: ContextA

This pattern is used across many statements in the Jisc profile, but there may be additional data elements required for some statements. Four extensions are provided, with IRIs as defined on the <a href="vocabulary.md#extensions">vocabularies page</a>.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
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
		<td>The academic context in which this activity is situated (e.g. umbrella course, or parent area). The properties in courseArea must be a UDD Module Instance ID or a VLE Module ID or both. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>.</td>
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
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
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
		<td>Client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	<tr> 
		<td>context.extension.courseArea [0..1]</td>
		<td>Umbrella course/parent area by its an UDD Module Instance ID or VLE Module ID. More information can be found on the <a href="vocabulary.md#course-area">vocabularies page</a>..</td>
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
			},
			
 		"http://xapi.jisc.ac.uk/sessionId":"32456891",
        "http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0"
			}
		}
```




## Object
Depending on the statement, different patterns apply to express the object of a statement.

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

This object pattern describes an activity with a due date.

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
