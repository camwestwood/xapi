# VLE forum post and reply template

## Purpose
This statement defines the structure and terms to record a post or reply to a forum within a VLE.

### Actor

Common entity identifier: [ActorA](../common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who is making the post.

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb

Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:

The verb [create](/vocabulary.md#create) denotes the action of creating an object, in this case starting a discussion on a forum.

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/create",
        "display": {
            "en": "create"
        }
    },

```

### Timestamp

In forum post statements the timestamp property must be set to the date and time of the post.

#### Example:

 "timestamp": "2016-02-05T10:00:00.000Z"


### Result
The result.response entity contains plain text from the post encoded as per the encoding of the rest of the statement. There must be no markup,  HTML entity encodings or invalid characters.

<table>
	<tr><th>Property [cardinality]</th><th>Description</th></tr>
	<tr><td>result.response [1]</td><td>Content of post or reply</td></tr>
</table>


#### Entity Example:


``` javascript
 "result":{
        "response":"Does anybody have any good links to this subject?"
    }
```

### Object
Common entity identifier: [ObjectA](/common_structures.md#objecta). The object.definition.type is http://xapi.jisc.ac.uk/forum-post

#### Entity Example:
The object defines the discussion or thread that was posted.

Example 1: Create a discussion
 ``` javascript
"object": {
	"objectType": "Activity",
	"id": "https://courses.alpha.jisc.ac.uk/mod/forum/discuss.php?d=19474"	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/post",			
		"name": { "en": "Post" },			   
	 }
    }
}
```


### Context
The Context may describe the parent forum of the thread in context.contextActivies, and optionally, the courseArea (with module identifiers).

#### Entity Example:

``` javascript
"context": {
    "platform": "Moodle",
	
  	"contextActivities": {
        "parent": [
        {
            "id" : "https://courses.alpha.jisc.ac.uk/mod/forum/view.php?id=138371"
        }
		 ]
	  },

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "VLE",
			
			"http://xapi.jisc.ac.uk/courseArea": {
      		 	"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
			},
			
			"http://xapi.jisc.ac.uk/sessionId":"32456891",
			"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}
```

#### Example

``` javascript
{
	"timestamp": "2016-02-05T10:00:00.000Z",
    "actor": {
        "objectType": "Agent",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
  "verb": {
        "id": "http://activitystrea.ms/schema/1.0/create",
        "display": {
            "en": "create"
        }
    },
 "result":{
        "response":"Does anybody have any good links to this subject?"
    },

"object": {
   "objectType": "Activity",
   "id": "https://courses.alpha.jisc.ac.uk/mod/forum/discuss.php?d=19474",	
   "definition": {
   	"type": "http://xapi.jisc.ac.uk/forum-post",			
   	"name": { "en": "Forum Post" }   
    }
   },

"context": {
    "platform": "Moodle",
	
  	"contextActivities": {
        "parent": [
        {
            "id" : "https://courses.alpha.jisc.ac.uk/mod/forum/view.php?id=138371"
        }
		 ]
	  },

    "extensions": {
			"http://xapi.jisc.ac.uk/statementCat": "VLE",
			
			"http://xapi.jisc.ac.uk/courseArea": {
      		 	"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0"
			},
			
			"http://xapi.jisc.ac.uk/sessionId":"32456891",
			"http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
			"http://xapi.jisc.ac.uk/version" : "1.0.1"
			}
		}


}
``` 
