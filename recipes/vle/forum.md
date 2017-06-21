# VLE forum post and reply template

## Purpose
This statement defines the structure and terms to record a post or reply to a forum within a VLE.

There is a hierarchy of items that need to be identified to send this statement  

1. A parent forum. This information is required for the context of the statement
2. The discussion or thread. This is the object for the statement statements
3. Any posts to the discussion, actual content of the post is part of the result entity.

### Actor

Common entity identifier: [ActorA](../common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who is making the reply.

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb

Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:

The verb depends on whether the post starts or continues a discussion?.

- The verb [posted](/vocabulary.md#posted) denotes the action of starting a discussion on a forum.
- [replied](/vocabulary.md#replied) denotes the action of replying to a discussion topic on a forum.

``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/replied",
        "display": {
            "en": "replied"
        }
    },
```

### Result
Common entity identifier: [ResultD](/common_structures.md#resultd)

The result.response entity contains plain text from the post  encoded as per the encoding of the rest of the statement. There must be no markup,  HTML entity encodings or invalid characters.

#### Entity Example:


``` javascript
 "result":{
        "response":"Does anybody have any good links to this subject?"
    }
```

### Object
Common entity identifier: [ObjectD](/common_structures.md#objectd)

#### Entity Example:
The object defines the discussion or thread

 ``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle2.bolton.ac.uk/mod/forum/discuss.php?d=19474"	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/vle/forum",			
		"name": { "en": "Forum post" },			   
	 }
    }
}
```



### Context
Common entity identifier: ContextX, as defined on the [common structures](/common_structures.md#contextb) page.


### Example:

``` javascript
"context": {

    "http://jisc.ac.uk/forumArea" :"http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=138371",
    "platform": "Moodle",
    "extensions": {
		"http://xapi.jisc.ac.uk/courseArea": {
      		 	"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
                "id": "http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
			},
			
	"http://xapi.jisc.ac.uk/sessionId":"32456891",
	"http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
	"http://xapi.jisc.ac.uk/version" : "1.0"
			}
		}
```
