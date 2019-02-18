# accessed service statement template

[Statement Template Changes](/version_changes.md#access_service)


## Purpose

## For discussion

* Is accessed ok?
* How accessed items relate to reading lists
	* we use contextActivities.parent (see example), at one stage we decided against using arrays, but I think we decided its ok (and it is always array of 1!)
	* Is then then going to create a chain of contextActivities.parents accessed_item->list_item-list
* What is the object.type or how do we work it out? Are we using subtypes

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
            "homePage": "https://readinglist.jisc.ac.uk/"
        }
    },
```

### Timestamp
An ISO 8601 format timestamp that corresponds to the time when the service was accessed.

### Example:

``` javascript
"timestamp": "2015-09-18T01:54:51.484Z",
`````` 

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb, [access](/vocabulary.md#verbs), denotes the action of the user's browser or app requesting the econtent.

### Example:

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/access",
        "display": {
            "en": "access"
        }
    },
```


### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page. 

An object type of http://activitystrea.ms/schema/1.0/service is required for this statement,

### Example

``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://www.contenthost.com/"   	 	
	"definition": {
		"type": "http://activitystrea.ms/schema/1.0/service"
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
		<td>context.extension.ip-address [1]</td>
		<td>client's IP address. An IPv4 address is recommended.</td>
		<td>ip address</td>
	</tr>
	<tr>
		<td>context.extensions.statementCat version [0..1]</td>
		<td>Recommended for querying lookup. Set to "readinglist" in readinglist statements <br/></td>
		<td>string</td>
	</tr>
</table>


### Example:

``` javascript
	"context": {
		"platform": "Echo 360",

	"contextActivities":{
            "parent":[
                {
                    
                    "id":"http://reading.jisc.ac.uk/page/4/item"
                    
                }
            ]
        },

		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.3",
			"http://id.tincanapi.com/extensions/ip-address": "165.154.154.1",
			"https://xapi.jisc.ac.uk/statementCat": "Readinglist"
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
			"homePage": "http://readinglist.jisc.ac.uk"
		}
	},
	"timestamp": "2015-09-18T01:54:51.484Z",
	
	"verb": {
        	"id": "http://activitystrea.ms/schema/1.0/access"	,
       		 "display": {
           		"en": "access"
        		}
	},
	"object": {
		"objectType": "Activity",
		"id": "http://onlinelibrary.jisc.ac.uk/",
		"definition": {
			"type": ""
		}

	},	
	"context": {
		"platform": "Echo 360",

		"contextActivities":{
            "parent":[
                {
                    
                    "id":"http://reading.jisc.ac.uk/page/4/item"
                    
                }
            ]
        },

		"extensions": {
			"http://xapi.jisc.ac.uk/version": "1.0.3",
			"http://id.tincanapi.com/extensions/ip-address": "165.154.154.1",
			"https://xapi.jisc.ac.uk/statementCat": "Readinglist"
		}
	}
}
```
