# accessed service statement template

[Statement Template Changes](/version_changes.md#access_service)

## Purpose
This template defines the structure and terms to record the experience of accessing a service, such as an internal library catalogue or an external collection of journals.

Natural language example of a typical Statement: "The student, John Smith, clicked on the link to the BMJ Journals service via the university's ezproxy library system."

## Actor
Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The actor entity identifies the individual that is accessing an econtent service.

### Example:

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "john-smith",
            "homePage": "http://ezproxy.jisc.ac.uk"
        }
    }
}
```

## Timestamp
An ISO 8601 format timestamp that corresponds to the time when the service was accessed.

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
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page. 

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
		<td>An identifier for the service accessed. This must be unique across all object types.</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. It is required and must be http://activitystrea.ms/schema/1.0/service.</td>
		<td>http://activitystrea.ms/schema/1.0/service</td>
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
      "id": "https://journals.bmj.com/",
      "definition": {
         "type": "http://activitystrea.ms/schema/1.0/service",
         "name": "BMJ Journals Service"
      }
   }
}
```

## Context

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform that gives access to the service. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known.</td>
		<td>string</td>
	</tr>	
	<tr>
		<td>context.extensions.version [0..1]</td>
		<td>Recommended. Identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/></td>
		<td>decimal</td>
	</tr>
		<td>context.extensions.ip-address [1]</td>
		<td>Client's IP address. An IPv4 address is recommended.</td>
		<td>IP address</td>
	</tr>
	<tr>
		<td>context.extensions.recipeCat version [0..1]</td>
		<td>Recommended for querying lookup. Set to "Library" in library statements.<br/></td>
		<td>"Library"</td>
	</tr>
</table>

### Example:

``` javascript
{
   "context": {
      "platform": "ezproxy",
      "extensions": {
         "http://xapi.jisc.ac.uk/version": "1.0.2",
         "http://id.tincanapi.com/extensions/ip-address": "165.154.154.1",
         "https://xapi.jisc.ac.uk/recipeCat": "Econtent"
      }
   }
}
```

## Full Example
``` javascript
{
	"actor": {
		"objectType": "Agent",
		"name": "John Smith",
		"account": {
			"name": "john-smith",
			"homePage": "http://ezproxy.jisc.ac.uk"
		}
	},
	"timestamp": "2018-09-18T01:54:51.484Z",
	"verb": {
		"id": "http://activitystrea.ms/schema/1.0/access",
		"display": {
			"en": "access"
		}
	},
	"object": {
		"objectType": "Activity",
		"id": "https://journals.bmj.com/",
		"definition": {
			"type": "http://activitystrea.ms/schema/1.0/service",
			"name": "BMJ Journals Service"
		}
	},
	"context": {
		"platform": "ezproxy",
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.3",
			"http://id.tincanapi.com/extensions/ip-address": "165.154.154.1",
			"https://xapi.jisc.ac.uk/recipeCat": "Econtent"
		}
	}
}
```
