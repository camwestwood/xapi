# reading_list_viewed_item Statement template

Based on generic Statement template: [Viewed](/generic/view.md)

[Statement Template Changes](/version_changes.md#readinglist-resource-viewed)

## Purpose
This template defines the structure and terms to record the experience of viewing a reading list item

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

### Entity Example:
The Actor entity is used to identify the individual that is viewing the reading list item. 

``` Javascript
"actor": {
  "objectType": "Agent",
  "name": "John Smith",
  "account": {
    "name": "jsmith12",
    "homePage": "https://readinglist.alpha.jisc.ac.uk/"
  }
}
```


### Verb
Common entity identifier: [VerbA](../common_structures.md#verba). 

### Entity Example:
It denotes the action of the user requesting the resource that the user wishes to view. 

``` javascript
"verb": {
  "id": "http://id.tincanapi.com/verb/viewed",
  "display": {
    "en" : "viewed"
  }
}
```

### Object
Common entity identifier:  [ObjectA](../common_structures.md#objecta)


### Entity Example:
The Object for viewed Statements identifies what is being viewed. 


``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://reading.jisc.ac.uk/page/4/item/view.php?id=9"   	 	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/activities/reading-list-item",			
		"name": { "en": "Sample reading list item"}
    }
}
```


### Context
Common entity identifier: [ContextB](/common_structures.md#contextb) . 


### Entity Example:
The contextActivities parent contains the id of the list the item belongs to.

``` javascript
"context": {
	"contextActivities":{
            "parent":[
                {
                    "id":"http://reading.jisc.ac.uk/page/4"
                }
            ]
        },
        
        "platform": "Talis Aspire",
        "extensions": {
		
			"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
			},
			
 		"http://xapi.jisc.ac.uk/sessionId":"32456891",
        "http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
		"http://xapi.jisc.ac.uk/version" : "1.0.3",
		
			}
		}
```

### Full Example

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
  		"id": "http://id.tincanapi.com/verb/viewed",
  			"display": {
    		"en" : "viewed"
  		}
	}
	"object": {
		"objectType": "Activity",
		"id": "https://readinglist.alpha.jisc.ac.uk/",
		"definition": {
			"type": "http://xapi.jisc.ac.uk/activities/reading-list-item",
			"name": {
				"en": "Intro to Java"
			}
		}
	},
	
	"timestamp": "2015-09-18T01:54:51.484Z",
	
	"context": {

	"contextActivities":{
            "parent":[
                {
                    
                    "id":"http://reading.jisc.ac.uk/page/4"
                    
                }
            ]
        },

		"platform" :"Talis Aspire",
		"extensions": {
			"http://xapi.jisc.ac.uk/recipeCat": "Readinglist",,
			"http://xapi.jisc.ac.uk/version": "1.0.3"
	
  		}
  	}
}
```
