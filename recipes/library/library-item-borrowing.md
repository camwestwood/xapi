# borrowed statement template

[Statement Template Changes](/version_changes.md#borrowed)

## Purpose
This template defines the structure and terms to record the experience of viewing a vle resource such as a Moodle Module or Blackboard building block (eg a page as identified by its url)

### Actor
Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

### Example:

``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith20",
            "homePage": "http://library.universityofjisc.ac.uk/" 
        }
    },
```

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb depends [borrowed](http://activitystrea.ms/schema/1.0/borrowed) indicates that the actor has borrowed the object.


### Example:

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/borrowed",
        "display": {
            "en": "borrowed"
        }
    },
```


### Object

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the object of the xAPI statement. This must be unique across all object types.</td>
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
	<tr>
		<td>object.definition.extensions.http://oclc.com/number [0..1]</td>
		<td>OCLC Number</td>
		<td>string</td>
	<tr>
</table>


### Example

``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://library.universityofjisc.ac.uk/0123456789" 	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/library/resource",	
		"name": { "en": "Intro to Java" },			   
	        }
		"extensions": {
			"http://xapi.jisc.ac.uk/subType":"http://id.tincanapi.com/activitytype/book",
			"http://oclc.com/number": "1234567890",
		}
}
```

### Timestamp
An ISO 8601 format timestamp that corresponds to the time of when the item was borrowed.

### Example:

``` javascript
"timestamp": "2015-09-18T01:54:51.484Z",
```


### Context


<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended, identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
		<td>string</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#statement-category">context.extensions.https://xapi.jisc.ac.uk/statementCat</a> [0..1]</td>
		<td>Recommended For querying lookup. Set to "Library" in library statements <br/></td>
		<td>string</td>
	</tr>
</table>




### Example:

``` javascript
"context": {
 
  "extensions": {
	"http://xapi.jisc.ac.uk/statementCat": "Library",
	"http://xapi.jisc.ac.uk/version": "1.0.1"
	
  }
}
```

### Full Example:
``` javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "http://library.universityofjisc.ac.uk/" 
        }
    },
	"verb": {
        "id": "http://activitystrea.ms/schema/1.0/borrowed",
        "display": {
            "en": "borrowed"
        }
    },
	"object": {
		"objectType": "Activity",
		"id": "http://library.universityofjisc.ac.uk/0123456789",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/library/resource",
			"name": {
				"en": "Intro to Java"
			},
			"extensions": {
				"http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/book",
				"http://oclc.com/number": "ocn123456789"
			}
		}
	},
	
	"timestamp": "2015-09-18T01:54:51.484Z",
	
	"context": {
 
		"extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "library",
			"http://xapi.jisc.ac.uk/version": "1.0.1"
	
  		}
  	}
}
```