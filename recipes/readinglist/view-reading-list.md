# viewed reading list item

## Purpose


### Actor
The Actor entity is used to identify the individual that is viewing a reading list. It uses the Jisc Profile common entity [ActorA](/common_structures.md#actora).

#### Entity properties:

<table>
<tr><th>Property</th><th>Description</th></tr>
<tr>
<td>actor.objectType [1]</td><td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc Profile.</td>
</tr>
<tr>
<td>actor.name [0..1]</td><td>Full name of user.</td>
</tr>
<tr>
<td>	
actor.account [1] <br/>
actor.account.name [1] <br/>
actor.account.homepage [1] <br/>
</td>
<td>A JSON Object with <b>account.name</b> giving a system login id for the subject of the Statement and <b>account.homepage</b> giving the URL of the home page of the application for which the login id applies.</td></tr>
</table>

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

#### Entity properties:

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

(Should we be borrowing from the library borrowed object? ISBN's that kind of thing)

	
</table>

### Example

``` javascript


``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://reading.jisc.ac.uk/page/4/item/view.php?id=9"   	 	
	"definition": {
		"type": "<What does a reading list item look like>",			
		"name": { "en": "Sample reading list item"}
    }
}
```


### Context
The Context entity can be used to describe any surrounding circumstances, including for example the device used and id of the module. If the device supports it, session Ids and ip-addresses can be recorded. Common entity identifier: ContextB, as defined on the [common structures](/common_structures.md#contextb) page. 


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
        
        "platform": "Moodle",
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
		"platform" :"Talis Aspire",
		"extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "library",,
			"http://xapi.jisc.ac.uk/version": "1.0.2"
	
  		}
  	}
}
```
