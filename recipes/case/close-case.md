# Close_Case Statement template

## Purpose
This Statement template specifies how to record a case being closed.

Natural language example of a typical Statement: "At 10:00 on 5 February 2016 tutor Angela Jones closed the case with ID '123456' on Jisc Notes".

### Actor
The Actor entity describes the individual member of staff who is closing the case.

Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:

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

### Verb
This Verb, [closed](/vocabulary.md#closed), describes the action of closing the case.

Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:

``` javascript
"verb": {
  "id": "http://xapi.jisc.ac.uk",
  "display": {
    "en" : "closed"
  }
}
```

### Object
The Object is the case is being closed.

Common entity identifier: [ObjectA](/common_structures.md#objecta). There is no subType extension in the Object entity in this Statement.

#### Entity Example

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

### Timestamp

The Timestamp property must be set to the date and time that the case was closed.

#### Example:

``` javascript
 "timestamp": "2016-02-05T10:00:00.000Z"
```

### Context
The Context entity contains only the platform the case was on, the recipeCat and the version of the Jisc Profile.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.version [1]</td>
		<td>Identifies the version of the Jisc xAPI Profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/recipeCat [1]</td>
		<td>Recommended for querying lookup. Set to recipe of Statement, "Case".<br/></td>
		<td>string</td>
	</tr>
	</table>

#### Entity Example:

``` javascript

"context": {
	"platform": "Jisc Notes",
	"extensions": {
		"http://xapi.jisc.ac.uk/recipeCat": "Case",
		"http://xapi.jisc.ac.uk/version" : "1.0.2"
		}
	}
```

### Full Example

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
		"id": "http://xapi.jisc.ac.uk",
		"display": {
  			"en" : "closed"
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
	"platform": "Jisc Notes",
	"extensions": {
		"http://xapi.jisc.ac.uk/recipeCat": "Case",
		"http://xapi.jisc.ac.uk/version" : "1.0.2"
		}
	}
}
```
