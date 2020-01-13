# item_borrowed Statement template

[Statement Template Changes](/version_changes.md#borrowed)

## Purpose
This template defines the structure and terms to record the experience of borrowing an item from the library.

Natural language example of a typical Statement: "The student, John Smith, borrowed a book from the main library"

## Actor
Common entity identifier: [ActorA](/common_structures.md#actora) 

The actor entity identifies the individual borrowing the object.

### Example:

``` Javascript
{
   "actor": {
      "objectType": "Agent",
      "name": "John Smith",
      "account": {
         "name": "jsmith20",
         "homePage": "http://library.universityofjisc.ac.uk/" 
      }
   }
}
```

## Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb [borrowed](http://activitystrea.ms/schema/1.0/borrowed_from) indicates that the student has borrowed from the object.

### Example:

``` javascript
{
"verb": {
		"id": "http://xapi.jisc.ac.uk/verbs/borrowed_from",
		"display": {
			"en": "borrowed from"
		}
	},
}
```

## Object

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the thing being borrowed. This must be unique across all object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. For borrowing site statements the id is: "http://xapi.jisc.ac.uk/borrowing_site",</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Optional name of the thing being borrowed</td>
		<td>string</td>
	</tr>
</table>


### Example

``` javascript
	"object": {
		"objectType": "Activity",
		"id": "http://library.universityofjisc.ac.uk/mainLibrary",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/borrowing_site",
			"name": { "en": 
				"Main Library"
			}
		},
	}
```

## Timestamp
An ISO 8601 format timestamp that corresponds to the time of when the actor borrowed from the library.

### Example:

``` javascript
{
   "timestamp": "2018-11-18T13:05:51.484Z"
}
```

## Context

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [0..1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known.</td>
		<td>string</td>
	</tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI Profile found on the ReadMe page.<br/></td>
		<td>decimal</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#recipe-category">context.extensions.https://xapi.jisc.ac.uk/recipeCat</a> [0..1]</td>
		<td>Recommended. For querying lookup. Set to "Library" in library statements.<br/></td>
		<td>"Library"</td>
	</tr>
</table>

### Example:

``` javascript
{
   "context": {
      "platform" :"WorldShare",
      "extensions": {
	"http://xapi.jisc.ac.uk/version": "1.1",
	"http://xapi.jisc.ac.uk/recipeCat": "Library",
      }
   }
}
```

## Full Example:
``` javascript
{
	"actor": {
		"objectType": "Agent",
		"name": "John Smith",
		"account": {
			"name": "jsmith20",
			"homePage": "http://library.universityofjisc.ac.uk/" 
		}
	},
	"verb": {
		"id": "http://xapi.jisc.ac.uk/verbs/borrowed_from",
		"display": {
			"en": "borrowed from"
		}
	},
	"object": {
		"objectType": "Activity",
		"id": "http://library.universityofjisc.ac.uk/mainLibrary",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/borrowing_site",
			"name": { "en": 
				"Main Library"
			}
		},
	},
	"timestamp": "2018-11-18T13:05:51.484Z",
	"context": {
		"platform" :"WorldShare",
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.1",
			"http://xapi.jisc.ac.uk/recipeCat": "Library"
		}
	}
}
```
