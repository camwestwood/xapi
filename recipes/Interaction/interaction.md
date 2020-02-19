# Interaction Statement template

## Purpose
This Statement template specifies how to record an interaction between staff and students.

It is a provisional statement

## Notes

Currently the object is another agent, so the statement is very simple "actor interacted with agent". In the case statenents it was decided to have an activity as the object and put the additional actor in the context. This needs discussion. 

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
This Verb, [interacted](/vocabulary.md#created), describes the action of interacting with another member of staff or student,

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
The Object is an actor describing the member of staff or student

Common entity identifier: [VerbA](/common_structures.md#verba)

### Entity Example

``` javascript
Object": {
   "objectType": "AGENT",
   "account": {
       "name": "ds10",
       "homePage": "https://notes.jisc.ac.uk""
   },

```

## Timestamp

The Timestamp property must be set to the date and time of the interaction

### Example:

``` javascript
"timestamp": "2016-02-05T10:00:00.000Z"
```

## Context
The Context must identify the type of interaction

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
			"http://xapi.jisc.ac.uk/extensions/interaction_type": "interaction_type"
			}
```
## Full Example

```
{
	
    "actor": {
        "objectType": "Agent",
        "account": {
			"name": "**STUDENT_ID**",
			"homePage": "**HOMEPAGE**"
        }
    },
  "verb": {
        "id": "http://xapi.jisc.ac.uk/verbs/interacted",
        "display": {
            "en": "interacted with"
        }
    },

"object": {
   "objectType": "AGENT",
   "account": {
       "name": "**INTERACTION_WITH**",
       "homePage": "**HOMEPAGE**"
    }
   },

"timestamp": "**TIMESTAMP**",

"context": {
	"platform": "**PLATFORM**",

    "extensions": {
			"http://xapi.jisc.ac.uk/extensions/interaction_type": "interaction_type"
			}
				
        }
        



}
```
