# VLE forum post statement template

[Statement Template Changes](/version_changes.md#posted-in-forum)

## Purpose
This statement defines the structure and terms to record a post to a forum within a VLE

### Actor

Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The actor entity describes the individual who is making the post.

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

The verb [posted](/vocabulary.md#posted) denotes the action of posting a discussion topic or message on a forum.

``` javascript
"verb": {
        "id": "https://w3id.org/xapi/acrossx/verbs/posted",
        "display": {
            "en": "posted"
        }
    },
```

### Result
Common entity identifier: [ResultD](/common_structures.md#resultd)

#### Entity Example:


``` javascript
 "result":{
        "response":"Does anybody have any good links to this subject?"
    }
```

### Object
Common entity identifier: [ObjectD](/common_structures.md#objectd)

#### Entity Example:
The object defines the forum that has been posted to,

 ``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://http://moodle2.bolton.ac.uk/mod/forum/discuss.php?d=19474"	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/vle/forum-post",			
		"name": { "en": "Sample post" },			   
	 }
	 "extensions": {
     		 "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
	 }
    }
}
```
### Context
Common entity identifier: [ContextA](/common_structures.md#contexta)

### Example:

``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
	
      	"http://xapi.jisc.ac.uk/courseArea": {
	    "http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
            "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
		},
					
	"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
	"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
	"http://xapi.jisc.ac.uk/version" : "1.0"
			}
        }
```
