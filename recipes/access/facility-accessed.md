# accessed_service statement template


## Purpose
This template defines the structure and terms to record the experience of accessing a facility or building

Natural language example of a typical Statement: "The student, John Smith, accessed the Univeristy og Jisc's Main Campus Library Building ."

## Actor
Common entity identifier: [ActorA](/common_structures.md#actora) 

The actor entity identifies the individual that is accessing an the service.

### Example:

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "john-smith",
            "homePage": "http://access.jisc.ac.uk"
        }
    }
}
```

## Timestamp
An ISO 8601 format timestamp that corresponds to the time when the building or facility was accessed.

### Example:

``` javascript
{
"timestamp": "2018-09-18T01:54:51.484Z"
}
`````` 

## Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb, [access](/vocabulary.md#verbs), denotes the action of the user's browser or app requesting the service.

### Example:

``` javascript
}
   "verb": {
      "id": "http://activitystrea.ms/schema/1.0/access",
      "display": {
         "en": "access"
      }
   }
}
```

## Object
Common entity identifier: [ObjectA](/common_structures.md#objecta) 

An object type of http://activitystrea.ms/schema/1.0/service is required for this statement.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the building or facility accessed. This must be unique across all object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. It is required and must be either http://xapi.jisc.ac.uk/activities/library or http://xapi.jisc.ac.uk/activities/facility.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional human-readable name of the service</td>
		<td>string</td>
	</tr>
</table>

### Example

``` javascript
{
   "object": {
      "objectType": "Activity",
      "id": "https://buildings.jisc.ac.uk/132",
      "definition": {
         "type": "http://xapi.jisc.ac.uk/activities/library",
         "name": "Main Library"
      }
   }
}
```

## Context

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	<tr>
		<td>context.extensions.recipeCat version [0..1]</td>
		<td>Recommended for querying lookup. Set to "Access" in access statements.<br/></td>
		<td>"Library"</td>
	</tr>
</table>

### Example:

``` javascript
{
  "context": {
		"extensions": {
				"http://xapi.jisc.ac.uk/version": "1.1",
				"https://xapi.jisc.ac.uk/recipeCat": "Access"
		}
   }
}
```

## Full Example
``` javascript
{
	"version": "1.0.0",
	"actor": {
		"objectType": "Agent",
		"account": {
			"name": "johnsmoth",
			"homePage": "http://exchange.jisc.ac.uk" 
		}
	},
	"timestamp": "**TIMESTAMP**",
	"verb": {
		"id": "http://activitystrea.ms/schema/1.0/access",
		"display": {
			"en": "accessed"
		}
	},
	"object": {
		"objectType": "Activity",
		"id": "http://buildings.jisc.ac.uk/235",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/activities/library"
		}
	},
	"context": {
		"extensions": {
				"http://xapi.jisc.ac.uk/version": "1.1",
				"https://xapi.jisc.ac.uk/recipeCat": "access"
		}
				
	}

}

```
