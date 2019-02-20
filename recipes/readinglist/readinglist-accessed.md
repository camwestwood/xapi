# accessed external document statement template

[Statement Template Changes](/version_changes.md#access_service)


## Purpose



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
	"id": "http://www.contenthost.com/books/5"   	 	
	"definition": {
		"type": "http://activitystrea.ms/schema/1.0/service"
    	}
}
```



### Context


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
