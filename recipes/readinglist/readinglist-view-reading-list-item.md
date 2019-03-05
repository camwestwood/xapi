# viewed reading list item

## Purpose

## For discussion

### Actor
The Actor entity is used to identify the individual that is viewing the reading list item. It uses the Jisc Profile common entity [ActorA](/common_structures.md#actora).

#### Entity properties:


### Example:

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
The Verb used in view Statements is [viewed](../vocabulary.md#verbs). It denotes the action of the user requesting the resource that the user wishes to view. It uses the Jisc Profile common entity [VerbA](../common_structures.md#verba). 


### Example:

``` javascript
"verb": {
  "id": "http://id.tincanapi.com/verb/viewed",
  "display": {
    "en" : "viewed"
  }
}
```

### Object

The Object for viewed Statements identifies what is being viewed. It uses the Jisc Profile common entity [ObjectA](../common_structures.md#objecta).

### Example

``` javascript


``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://reading.jisc.ac.uk/page/4/item/view.php?id=9"   	 	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/reading-list-item",			
		"name": { "en": "Sample reading list item"}
    }
}
```


### Context
The Context entity can be used to describe any surrounding circumstances, including for example the device used and id of the module. If the device supports it, session Ids and ip-addresses can be recorded. The contextActivities parent contains the id of the list the item belongs to.

 Common entity identifier: ContextB, as defined on the [common structures](/common_structures.md#contextb) page. 


### Example:

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
      "http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0.2"
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
			"type": "<Not sure>",
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
			"http://xapi.jisc.ac.uk/recipeCat": "Library",,
			"http://xapi.jisc.ac.uk/version": "1.0.2"
	
  		}
  	}
}
```
