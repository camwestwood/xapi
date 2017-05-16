# Post a discussion generic statement template


## Purpose
This template defines the structure and terms to record the experience of posting to a discussion forum.


Examples:

- [Forum Reply](../recipes/vle/forum-post.md)

### Actor
Common entity identifier:  [ActorA](/common_structures.md#actora)

The actor entity describes the individual that is posting a discussion.

#### Entity properties:

<table>
<tr><th>Property</th><th>Description</th></tr>
<tr>
<td>actor.objectType [1]</td><td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc profile.</td>
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
<td>A JSON Object with <b>account.name</b> giving a system login id for the subject of the statement and <b>account.homepage</b> giving the URL of the home page of the application for which the login id applies.</td></tr>
</table>

### Example:

``` Javascript
"actor": {
  "objectType": "<ObjectType set to Agent>",
  "name": "<Real Name: Example: John Smith>",
  "account": {
    "name": "<Account name: Example: jsmith12>",
    "homePage": "<URL of the home page for the application. Example: https://courses.alpha.jisc.ac.uk/moodle>"
  }
}
```

### Result
Common entity identifier: [ResultD](/common_structures.md#resultd)

This property contains the content of the post.

#### Entity properties:

<table>
	<tr><th>Property [cardinality]</th><th>Description</th></tr>
	<tr><td>result.response [1]</td><td>Content of post or reply</td></tr>
</table>


#### Example:

``` javascript
 "result":{
        "response":"<Text posted: Example I have some good links on that subject, I will find them for you>"
    }
``` 

### Object
Common entity identifier: [ObjectA](/common_structures.md#objecta)

#### Entity Properties:
The object defines the forum that has been posted to,

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the object of the xAPI statement. This must be unique (within a given platform) across all object types.</td>
	</tr>
		<tr>
		<td>object.definition.type [1]<br />
	object.definition.name [0..1]<br />
	object.definition.extensions.http://xapi.jisc.ac.uk/subType [0..1]<br />
	object.definition.extensions.http://xapi.jisc.ac.uk/uddModInstanceID [0..1]</td>
		<td>A JSON object comprising both standard xAPI attributes and the Jisc profile 'subType' and 'uddModInstanceID' extensions.<br/>
    The <b>type</b> indicates the type of the object of the statement. It is required and valid values are listed on the <a href="vocabulary.md#31-activity-types">vocabulary page</a>.<br/>
    The <b>name</b> is optional.<br/>
    The <b>subType</b> extension may be used to indicate the sub-type of this activity, if applicable for the recipe being used to create the statement. This qualifies the object.objectType, and is described on the [vocabularies](vocabulary.md#32-object-definition-extensions) page.<br />
	</tr>
	
</table>

#### Entity Example:
The object defines the forum that has been posted to,

 ``` javascript
"object": {
	"objectType": "<Objecttype: Activity",
	"id": "<id of forum or group being posted to. Example: http://moodle2.bolton.ac.uk/mod/forum/discuss.php?d=19474">	
	"definition": {
		"type": "<iri of the type of activity. In post statements: http://xapi.jisc.ac.uk/vle/forum-post>",			
		"name": { "en": "<name of sample post" },			   
	 }
	 "extensions": {
     		 "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
	 }
    }
}
