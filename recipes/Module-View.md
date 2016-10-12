#vle_resource_viewed recipe
Revision: 1.3

##Purpose
This recipe defines the structure and terms to record the experience of viewing a vle resource such as a Moodle Module or Blackboard building block (eg a page as identified by its url)

### Actor
Common entity identifier:  Actor.A, as defined on the [common structures](../common_structures.md#actora) page.

The actor entity describes the individual that is viewing a vle resource.

### Example:

``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage: "jsmith12"https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb
Common entity identifier: Verb.A, as defined on the [common structures](../common_structures.md#verba) page.

The Verb,[viewed](/vocabulary.md#verbs) denotes the action of the user's browser or app requesting the resource that the user wishes to view.


``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en": "viewed"
        }
    },
```
### Context
Common entity identifier: Context.A, as defined on the [common structures](../common_structures.md#contextc) page.

For this recipe the courseArea is required. See the [vocabularies](vocabulary.md#Umberella-course-area) page for more information

</table>

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
			"http://xapi.jisc.ac.uk/recipeVersion" : "vle_resource_viewedV1.3"
			
			}
              
        }
```

### Object

Common entity identifier: Object.A, as defined on the [common structures](../common_structures.md#objecta) page.

For this recipe the object needs to identify what was viewed. A list of valid values can be found at [the definition of object.definition.extensions on the vocabulary page](../vocabulary.md#Object.definition.extension)

<table>
	<tr><th>Property</th><th>Jisc Profile Information</th><th>Entity Obligations</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>Must be "Activity".</td>
		<td><ul>
		    <li>object.ojectType [0.1]</li></ul><td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for a single unique Activity</td>
		<td><ul>
		    <li>object.id [0.1]</td>
	</tr>
		<tr>
		<td>object.definition</td>
		<td>A JSON object. object.definition.type describes the activity and object.definition.extensions.subtype can be used to described the subtype of this activity.</td>
		 <td>
		    <ul>
				<li>object.definition.type [1]</li>
				<li>object.definition.name [0.1]</li>
				<li>object.definition.description [0.1]</li>
				
			</ul>
			</td>
	</tr>
</table>

``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13"   	 	//  unique id or url of the item being logged into
	"definition": {
		"type": "http://xapi.jisc.ac.uk/define/vle/page",			//  definition type as above
		"name": { "en": "Sample page" },			   //  name of item as returned by VLE
		"description": { "en": "sample page" } //  description of item as returned by VLE
	 }
}
```

### Complete VLE Specific Examples
[Moodle Example](/vle/moodle/moduleview.js)

[Blackboard Example](/vle/blackboard/course_content_access.json)
