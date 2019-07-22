# Create_Note Statement template

## Purpose
This Statement template specifies how to record a note being created by a tutor or other member of staff. The note must be attached to an existing case.

Natural language example of a typical Statement: "At 11:00 on 6 February 2016 tutor Angela Jones created a note on case ID '123456' on Jisc Notes".

## Actor
The Actor entity identifies the member of staff who is creating the note.

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
The Verb, [created](/vocabulary.md#created), describes the action of creating the note.

Common entity identifier: [VerbA](/common_structures.md#verba)

### Entity Example:

``` javascript
"verb": {
   "id": "http://activitystrea.ms/schema/1.0/create",
   "display": {
      "en" : "create"
   }
}
```

## Object
The Object is the note that is being created.

Common entity identifier: [ObjectA](/common_structures.md#objecta). object.definition.extensions.http://xapi.jisc.ac.uk/subType should not be included.

### Entity Example:

``` javascript
"object": {
   "objectType": "Activity",
   "id": "**HOMEPAGE**/**NOTE_ID**",	
   "definition": {
      "type": "http://xapi.jisc.ac.uk/note",			
      "name": { "en": "6 Feb 16 note from Angela"
      }   
   }
}
```

## Timestamp

An ISO 8601 format timestamp that corresponds to the time when the note was created.

### Example:

``` javascript
"timestamp": "2016-02-06T11:00:00.000Z"
```

## Result
The result.response property contains plain text from the note encoded as per the encoding of the rest of the statement. There must be no markup,  HTML entity encodings or invalid characters.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Data type</th></tr>
	<tr>
		<td>result.response [0..1]</td>
		<td>Text of note</td>
		<td>plain text string (256)</td>
	</tr>
</table>

### Example:

``` javascript
"result":{
	"response": "Had face-to-face meeting with student."
}
```

## Context

The Context describes the parent case of the note in context.contextActivies.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used to input the note. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td>string</td>
	</tr>
	<tr>
		<td>context.contextActivities.parent.id [1]</td>
		<td>A mandatory property containing the id that identifies the parent case that the note is about. 
		<td>string</td>
	</tr>
	<tr>
		<td>context.extensions.https://xapi.jisc.ac.uk/recipeCat [0..1]</td>
		<td>Recommended For querying lookup. Set to category of recipe.<br/></td>
		<td>string</td>
	</tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended, identifies the version of the Jisc xAPI Profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>

</table>

### Example:
``` javascript
"context": {
	"platform": "Jisc Notes",
	"contextActivities": {
        	"parent": [{
            		"id" : "https://notes.jisc.ac.uk/138371"
        	}]
	},
	"extensions": {
		"http://xapi.jisc.ac.uk/recipeCat": "Case",
		"http://xapi.jisc.ac.uk/version" : "1.0.2"
		}
	}
}
```
## Full example
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
			"en" : "create"

        "parent": [
        {
            "id" : "https://notes.jisc.ac.uk/138371"
        }
		 ]
	  },

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "Note",
			"http://xapi.jisc.ac.uk/version" : "1.0.3"

			}
	},
	"object": {
		"objectType": "Activity",
		"id": "**HOMEPAGE**/**NOTE_ID**",	
		"definition": {
			"type": "http://xapi.jisc.ac.uk/note",
			"name": {
				"en": "6 Feb 16 note from Angela"
      			}   
   		}
	},
	"timestamp": "2016-02-06T11:00:00.000Z",
	"result":{
		"response": "Had face-to-face meeting with student."
	},
	"context": {
		"platform": "Jisc Notes",
		"contextActivities": {
        		"parent": [{
            			"id" : "https://notes.jisc.ac.uk/138371"
        		}]
		},
		"extensions": {
			"http://xapi.jisc.ac.uk/recipeCat": "Case",
			"http://xapi.jisc.ac.uk/version" : "1.0.2"
		}
	}
}
```
