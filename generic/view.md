# resource_viewed generic statement template

## Purpose
This template defines the structure and terms to record the experience of viewing a resource on a platform.

Examples:

- [VLE resource viewed](../recipes/vle/Module-View.md)

### Actor
Common entity identifier:  [ActorA](../common_structures.md#actora)

The actor entity describes the individual that is viewing a resource.

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
  "name": "<Real Name: e.g. John Smith>",
  "account": {
    "name": "<Account name: e.g. jsmith12>",
    "homePage": "<URL of the home page for the application: e.g. https://courses.alpha.jisc.ac.uk/moodle>"
  }
}
```

### Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb,[viewed](../vocabulary.md#verbs) denotes the action of the user requesting the resource that the user wishes to view.

#### Entity properties:

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>verb.id [1]</td>
		<td>An IRI that identifies the Verb. http://id.tincanapi.com/verb/viewed in viewed statements.</td>
	</tr>
	<tr>
		<td>verb.display [1]</td>
		<td>A human readable representation of Verb. It takes a RFC 5646 Language Tag. "viewd" in viewed statements </td>
	</tr>
</table>



### Example:

``` javascript
"verb": {
  "id": "<URI of Verb: i.e http://id.tincanapi.com/verb/viewed >",
  "display": {
    "en" : "<Human readable representation of verb: i.e viewed>"
  }
}
```

### Context
Common entity identifier: [ContextA](../common_structures.md#contexta) page.

#### Entity properties:
<table>
<tr><th>Property</th><th>Description</th></tr>
	<tr><td>context.platform [1]</td>
	<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td></tr>
	<tr><td>context.extensions.version [0..1]
		 context.extension.sessionId [0..1]
		 context.extension.ip-address [1]
		 context.extension.courseArea [0..1]
		 </td>
		<td>Four extensions are provided for, with IRIs as defined on the <a href="vocabulary.md#41-context-extensions">vocabularies page</a>.
  	  The <b>sessionID</b> extension is the VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.<br/>
    The <b>ip-address</b> is used to identify the client's IP address. An IPv4 address is recommended.<br/>
    The <b>version</b> extension is recommended, and identifies the version of the Jisc xAPI profile found on the ReadMe page. <br/>
	The <b>courseArea</b> identifies Umbrella course/parent area by its home page URI. More information can be found on the <a href="vocabulary.md#umbrella-course-area">vocabularies page</a>.
		</td></tr></table>

### Example:

``` javascript
"context": {
        "platform": "<Platform: e.g: Moodle>",
        "extensions": {
	
      	"http://xapi.jisc.ac.uk/courseArea": {
	    "http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
            "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
		},
					
	"http://xapi.jisc.ac.uk/sessionId": "<Session id: e.g: 32456891>"  ,
	"http://id.tincanapi.com/extension/ip-address": "<Ip address of client 10.3.3.48>"
	"http://xapi.jisc.ac.uk/version" : "<jisc xapi version: e.g 1.0>"
			}
        }
```

### Object

Common entity identifier: [ObjectA](../common_structures.md#objecta)

For this statement the object needs to identify what was viewed. A list of valid values  for the object definition type can be found on the[vocabularies page](../vocabulary.md#Object.definition.extension)

#### Entity properties:

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
    The <b>uddModInstanceID</b> extension records the module instance with which the learning activity is associated. It is not usually required and overlaps with context.extension.courseArea. [See issue 140](https://github.com/jiscdev/xapi/issues/140) </td>
	</tr>
	
</table>

### Example

``` javascript
"object": {
  "objectType": "<ObjectType: i.e Activity>",
  "id": "<id of Object: e.g https://courses.alpha.jisc.ac.uk/moodle>",
  "definition": {
    "type": "<type of object: e.g. http://activitystrea.ms/schema/1.0/application>",
    "name": {
      "en": "<English Description: e.g University of Jisc VLE>"
    },
    "extensions": {
      "http://xapi.jisc.ac.uk/subType": "<Subtype: e.g http://id.tincanapi.com/activitytype/lms>"
    }
  }
}

'''



