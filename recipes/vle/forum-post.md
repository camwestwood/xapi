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

### Context
Common entity identifier: [ContextA](/common_structures.md#contexta)


<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>context.contextActivities [0..1]<br />
		context.contextActivities.grouping [1]
		</td>
		<td>An optional property that holds a mandatory ‘grouping’ property. It allows statements to be associated with the object entity's activity as part of a larger whole. The example shows a course within the VLE. The 'grouping' property has an <a href="#objecta">ObjectA</a> as its value.</td>
	</tr>
	<tr>
		<td>context.platform [1]</td>
		<td>The platform used in the experience of this learning activity. This is required. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
	</tr>
	<tr>
		<td>context.extensions.courseArea [0..1]<br />
			context.extensions.sessionId [0..1]<br />
			context.extensions.ip-address [1]<br />
			context.extensions.ip-address [1]<br />
			context.extensions.version [1]
</td>
		<td>Four extensions are provided for, with IRIs as defined on the <a href="vocabulary.md#41-context-extensions">vocabularies page</a>.<br/>
    The <b>sessionID</b> extension is the VLE session ID, or a suitably hashed version of it. A value should be provided if it is available.<br/>
    The <b>ip-address</b> is used to identify the client's IP address. An IPv4 address is recommended.<br/>
    The <b>version</b> extension is recommended, and identifies the version of the Jisc xAPI profile found on the ReadMe page.
	<br/>
    The <b>courseArea</b> extension is recommended, and identifies umbrella course/parent area by its home page URI. More information can be found on the <a href="vocabulary.md#umbrella-course-area">vocabularies page</a>.</td>
		</tr>
</table>

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