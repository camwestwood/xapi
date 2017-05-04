# VLE forum post reply template

[Statement Template Changes](/version_changes.md#post-reply)

## Purpose
This statement defines the structure and terms to record a post to a forum with a VLE

### Actor

Common entity identifier: [ActorA](/common_structures.md#actora)

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

The verb [replied](/vocabulary.md#replied) denotes the action of replying to a post or discussion topic on a forum.

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

#### Entity Example:


``` javascript
 "result":{
        "response":"I have some good links on that subject, I will find them for you"
    }
```

### Object
Common entity identifier: [ObjectD](/common_structures.md#objectd)

#### Entity Example:
The object defines the post that has been replied to.

 ``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle2.bolton.ac.uk/mod/forum/discuss.php?d=19474"	
	"definition": {
		"type": "http://xapi.jisc.ac.uk/vle/forum-post",			
		"name": { "en": "Forum post" },			   
	 }
	 "extensions": {
     		 "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
	 }
    }
}


### Context
Common entity identifier: ContextA, as defined on the [common structures](/common_structures.md#contextc) page.
The courseArea is required. See the [vocabularies](../vocabulary.md#42-coursearea-properties) page for more information

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
	"http://xapi.jisc.ac.uk/recipeVersion" : "1.0"
			}
        }
`