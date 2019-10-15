# Create_Case Statement template

## Purpose
This Statement template specifies how to record a case being created by a tutor or other member of staff.

Natural language example of a typical Statement: "At 10:00 on 5 February 2016 tutor Angela Jones opened a case with ID '123456' on Jisc Notes".

## Actor
The Actor entity identifies the individual member of staff who is opening the case.

Common entity identifier: [ActorA](/common_structures.md#actora)

### Entity Example:

``` Javascript
"actor": {
   "objectType": "Agent",
   "name": "Angela Jones",
   "account": {
      "name": "ajones",
      "homePage": "https://notes.jisc.ac.uk"
      }
}
```

## Verb
This Verb, [created](/vocabulary.md#created), describes the action of creating the case.

Common entity identifier: [VerbA](/common_structures.md#verba)

### Entity Example:

``` javascript
"verb": {
   "id": "http://activitystrea.ms/schema/1.0/create",
   "display": {
      "en" : "created"
   }
}
```

## Object
The Object is the case that has been opened.

Common entity identifier: [ObjectA](/common_structures.md#objecta)

### Entity Example

``` javascript
"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**CASE_ID**",	
   "definition": {
      "type": "http://xapi.jisc.ac.uk/case",			
      "name": {
         "en": "Case"
      }
   }
}

```

## Timestamp

The Timestamp property must be set to the date and time that the case was created.

### Example:

``` javascript
"timestamp": "2016-02-05T10:00:00.000Z"
```

## Context
The Context must identify the student who is the target of the case. A mode of intervention and weighting may also be added.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI Profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/recipeCat [0..1]</td>
		<td>Recommended for querying lookup. Set to recipe of Statement.<br/></td>
		<td>String, value must be "Case".</td>
	</tr>
	<tr>
		<td>context.extensions.http://xapi.jisc.ac.uk/case-target [1]</td>
		<td>Identifies student who is target of case.</td>
		<td>Actor entity (see example)</td>
	</tr>
	<tr>
		<td>context.extensions.http://xapi.jisc.ac.uk/mode [0..1]</td>
		<td>Describes the way in which the case was notified, for example "email".</td>
		<td>string</td>
	</tr>
	<tr>
		<td>context.extensions.http://xapi.jisc.ac.uk/weighting [0..1]</td>
		<td>Numerical value of the importance of the case</td>
		<td>integer</td>
	</tr>
</table>

### Entity Example:

``` javascript
"context": {

	"platform": "**PLATFORM**",
    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Case",
			"http://xapi.jisc.ac.uk/mode" : "email",
			"http://xapi.jisc.ac.uk/weighting" : 3 ,
			"http://xapi.jisc.ac.uk/version" : "1.1"

			"http://xapi.jisc.ac.uk/case-target" {
				"actor": {
					"objectType": "Agent",
					"account": {
						"name": "jsmith12",
						"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
				}
				
			}

			}
		}
}
```
## Full Example

```
{
	"actor": {
   		"objectType": "Agent",
   		"name": "Angela Jones",
   		"account": {
      			"name": "ajones",
      			"homePage": "https://notes.jisc.ac.uk"
      		}
	},
	"verb": {
   		"id": "http://activitystrea.ms/schema/1.0/create",
   		"display": {
      			"en" : "created"
   		}
	},
	"object": {
   		"objectType": "Activity",
   		"id": "**HOMEPAGE**/**CASE_ID**",	
   		"definition": {
      			"type": "http://xapi.jisc.ac.uk/case",			
      			"name": {
         			"en": "Case"
      			}
   		}
	},
	"timestamp": "2016-02-05T10:00:00.000Z",
	"context": {
		"platform": "**PLATFORM**",
   		"extensions": {
      			"http://xapi.jisc.ac.uk/version" : "1.0.2",
     			"http://xapi.jisc.ac.uk/recipeCat": "Case",
      			"http://xapi.jisc.ac.uk/mode": "email",
      			"http://xapi.jisc.ac.uk/weighting": 3,
      			"http://xapi.jisc.ac.uk/case-target": {
         			"actor": {
            				"objectType": "Agent",
	    				"name": "John Smith",
            				"account": {
               					"name": "jsmith12",
               					"homePage": "https://courses.alpha.jisc.ac.uk/moodle"
	    				}
         			}
      			}
   		}
	}
}
```
