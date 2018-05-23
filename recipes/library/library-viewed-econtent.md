# econtent viewed statement template

Based on generic template statement: [Viewed](/generic/view.md)

[Statement Template Changes](/version_changes.md#econtent)

## Purpose
This template defines the structure and terms to record the experience of viewing econtent.

### Actor
Common entity identifier:  ActorA, as defined on the [common structures](/common_structures.md#actora) page.

The actor entity describes the individual that is accessing econtent.

### Example:

``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "john-smith",
            "homePage": "http://ezproxy.jisc.ac.uk"
        }
    },
```

### Timestamp
An ISO 8601 format timestamp that corresponds to the time when the content was accessed.

### Example:

``` javascript
"timestamp": "2015-09-18T01:54:51.484Z",
`````` 

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb, [viewed](/vocabulary.md#verbs), denotes the action of the user's browser or app requesting the econtent.

### Example:

``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en": "viewed"
        }
    },
```


### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page.

### Example

``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://onlinelibrary.jisc.ac.uk/doi/10.1111"   	 	
	"definition": {
		"type": "http://id.tincanapi.com/activitytype/resource",			
		"name": { "en": "The Condition of the Working Class in England"
		},
		"extensions": {
     		 "http://xapi.jisc.ac.uk/subType": "http://xapi.jisc.ac.uk/journal"
	 	}
    	}
}
```





### Context

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known.</td>
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
		<td>client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	</tr>
	<tr>
		<td>context.extensions.statementCat version [0..1]</td>
		<td>Recommended for querying lookup. Set to "Library" in library statements <br/></td>
		<td>string</td>
	</tr>
</table>

### Example:

``` javascript
 "context": {
		"platform": "UxAPI",
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.1"
			"http://xapi.jisc.ac.uk/sessionId": "A438L",
			"http://id.tincanapi.com/extensions/ip-address": "IP",
			"https://xapi.jisc.ac.uk/statementCat": "Library"
			
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
			"name": "Jsmith12",
			"homePage": "http://ezproxy.jisc.ac.uk"
		}
	},
	"timestamp": "2015-09-18T01:54:51.484Z",
	"verb": {
		"id": "http://id.tincanapi.com/verb/viewed",
		"display": {
			"en": "viewed"
		}
	},
	"object": {
		"objectType": "Activity",
		"id": "http://onlinelibrary.jisc.ac.uk/doi/10.1111",
		"definition": {
			"type": "http://id.tincanapi.com/activitytype/resource",
			"name": {
				"en": "The Condition of the Working Class in England"
			},
			"extensions": {
				"http://xapi.jisc.ac.uk/subType": "http://xapi.jisc.ac.uk/journal"
			}
		}
	},	
	"context": {
		"platform": "UxAPI",
		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.1",
			"http://xapi.jisc.ac.uk/sessionId": "32456891",
			"http://id.tincanapi.com/extensions/ip-address": "10.3.3.48",
			"https://xapi.jisc.ac.uk/statementCat": "Library"
		}
	}
}
```
