# Jisc Learning Analytics Common Structures
The following sections describe common patterns used across several of the recipes.
Wherever a recipe refers to a "common entity identifier", the example given in the recipe follows one of the patterns given on this page.

## Actor.A
Common entity identifier:  Actor.A

This entity is required across all recipes in the Jisc profile.

The actor entity describes the individual that is the subject of the statement.

<table>
	<tr><th>Property</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>actor.objectType</td>
		<td>
		Must have the value "Agent". Actors of type "Group" are not supported in the Jisc profile.
		</td>
		<td><ul>
		    <li>actor.objectType [1]</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>actor.name</td>
		<td>Full name of user, optional.</td>
		<td><ul>
		    <li>actor.name [0.1] </li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>actor.account</td>
		<td>JSON Object with account.name giving the login id for the subject of the statement and account.homepage giving the URL of the home page of the application for which the login id applies. Both are required.</td>
		<td><ul>
			<li>actor.account [1] </li>
		    <li>actor.account.name [1] </li>
		    <li>actor.account.homepage [1] </li>
			</ul>
		</td>
	</tr>
</table>

### Example
``` Javascript
"actor": {
  "objectType": "Agent",
  "name": "John Smith",
  "account": {
    "name": "jsmith12",
    "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
  }
}
```

## Verb.A
Common entity identifier: Verb.A

This entity is required across all recipes in the Jisc profile.

The Verb structure indicates the action which the statement expresses. The verbs used in the Jisc profile are listed on the [vocabularies](vocabulary.md#verb) page.

<table>
	<tr><th>Property</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>verb.id</td>
		<td>IRI corresponding to Verb. Valid IRIs depend on the recipe and are given on the relevant recipe page.  The verb.id is required.</td>
		<td> <ul>
		     <li>verb.id [1] </li></ul>
		</td>
	</tr>
	<tr>
		<td>verb.display</td>
		<td>Human readable representation of Verb. Key is a RFC 5646 Language Tag.  
		The verb.display structure is optional\*.</td>
		<td><ul>
		<li>verb.display[1]</li></ul> </td>
	</tr>
</table>

\* - verb.display is "recommended" in the xAPI v1.0.1 specification but is not likely to be of use within the Jisc Learning Analytics architecture.

### Example
``` javascript
"verb": {
  "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
  "display": {
    "en" : "logged in to"
  }
}
```

## Context
Depending on the recipe, different patterns apply to express the context of a statement.

### Context.A
Common entity identifier: Context.A

This pattern is used across many recipes in the Jisc profile, but there may be additional data elements required for some recipes.

<table>
	<tr><th>Property</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>context.platform</td>
		<td>The platform used in the experience of this learning activity. This is required. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td><ul><li>context.platform [1]<li></ul></td>
	</tr>
	<tr>
		<td>context.extensions</td>
		<td>
		Four extensions are provided for, with IRIs as defined on the [vocabularies](vocabulary.md#41-context-			extensions) page.<br/>
  	  The <b>sessionID</b> extension is the VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.<br/>
    The <b>ip-address</b> is required and is used to identify the client's IP address. An IPv4 address is recommended.<br/>
    The <b>recipeVersion</b> extension is recommended, and identifies the recipe (and its version) which was followed to create the xAPI statement.
	The <b>courseArea</b> identifies Umbrella course/parent area by its home page URI. More information can be found on the [vocabularies](vocabulary.md#Umberella-course-area) page. Its requirement depends on the recipe
		</td>
	
	</tr><tr>
		<td>
		<ul>
			<li>context.extension.recipeVersion [0.1]</li>
			<li>context.extension.sessionId [0.1]</li>
			<li>context.extension.ip-address [1]</li>
			<li>context.extension.recipeVersion [dependant on recipe]</li>
		</ul>
		</td>
		</tr>
</table>

#### Example:
``` javascript
"context": {
  "platform": "Moodle",
  "extensions": {
    "http://xapi.jisc.ac.uk/sessionId": "32456891",
    "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48",
    "http://xapi.jisc.ac.uk/recipeVersion" : "vle_logged_inV1.3"
  }
}
```

### Context.B
Common entity identifier: Context.B

Context.B pattern is similar to Context.A, but with the addition of a contextActivities property with a ‘grouping’ property that allows statements to be associated to the object entities activity as part of a larger whole.

<table>
	<tr><th>Property</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>context.contextActivities</td>
		<td>Property with a ‘grouping’ property that allows statements to be associated to the object entities activity as part of a larger whole. Example shows a course within the VLE</td>
		<td><ul><li>context.contextActivities [0.1]<li></ul></td>
	</tr>
	<tr>
		<td>context.platform</td>
		<td>The platform used in the experience of this learning activity. This is required. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
		<td><ul><li>context.platform [1]<li></ul></td>
	</tr>
	<tr>
		<td>context.extensions</td>
		<td>Four extensions are provided for, with IRIs as defined on the [vocabularies](vocabulary.md#41-context-extensions) page.</br>
    The <b>sessionID</b> extension is the VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</br>
    The <b>ip-address</b> is required and is used to identify the client's IP address. An IPv4 address is recommended.</br>
    The <b>recipeVersion</b> extension is recommended, and identifies the recipe (and its version) which was followed to create the xAPI statement.</td>
	</br>
    The <b>courseArea</b> extension is recommended, and identifies Umbrella course/parent area by its home page URI. More information can be found on the [vocabularies](vocabulary.md#Umberella-course-area) page.</td>
	</tr>
	</td>
		<td>
		<ul>
			<li>context.extension.courseArea [0.1]</li>
			<li>context.extension.sessionId [0.1]</li>
			<li>context.extension.ip-address [1]</li>
			<li>context.extension.recipeVersion [1]</li>
		</ul>
		</td>
</table>

#### Example:
"context": {
	"contextActivities":{
            "grouping":[
                {
                    "objectType":"Activity",
                    "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
                    "definition":{
                        "type":"http://xapi.jisc.ac.uk/courseArea",
                        "name":{
                            "en":"xAPI Basics"
                        },
                        "description":{
                            "en":"xAPI Basics course for Learning Analytics enthusiasts"
                        }
                    }
                }
            ]
        },
        
        "platform": "Moodle",
        "extensions": {
		
      		"http://xapi.jisc.ac.uk/courseArea": {
      		 	"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
                "id": http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
				},
			
 			"http://xapi.jisc.ac.uk/sessionId":"32456891",
            "http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
			"http://xapi.jisc.ac.uk/recipeVersion" : "vle_assignment_submittedV1.3"
			}
		}
```

## Object
Depending on the recipe, different patterns apply to express the object of a statement.

### Object.A
Common entity identifier: Object.A

This object pattern describes the core attributes of Object as used in the Jisc profile.

<table>
	<tr><th>Property</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>Must be "Activity".</td>
		<td>object.objectType [1]</td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for the object of the xAPI statement. This is required and must be unique (within a given platform) across all object types.</td>
		<td>object.id [1]</td>
	</tr>
		<tr>
		<td>object.definition</td>
		<td>A JSON object comprising both standard xAPI attributes and the Jisc profile subType extension.<br/>
    The <b>type</b> indicates the type of the object of the statement. It is required and valid values are listed on the [vocabulary](vocabulary.md#31-activity-types) page.</br>
    The <b>name</b> is optional.</br>
    The <b>extensions</b> may be used to indicate the sub-type of this activity, if applicable for the recipe being used to create the statement. This qualifies the object.objectType, and is described on the [vocabularies](vocabulary.md#32-object-definition-extensions) page.</td>
	<td>object.definition.type [1]</td>
	<td>object.definition.name [0.1]</td>
	<td>object.definition.extensions.subType [0.1]</td>
	</tr>
	
</table>

#### Example:
``` javascript
"object": {
  "objectType": "Activity",
  "id": "https://courses.alpha.jisc.ac.uk/moodle",
  "definition": {
    "type": "http://activitystrea.ms/schema/1.0/application",
    "name": {
      "en": "University of Jisc VLE"
    },
    "extensions": {
      "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/lms"
    }
  }
}
```

### Object.B
Common entity identifier: Object.B

This object pattern describes he activity that has been completed.Examples of valid object.definition vocabulary  Activity object Types are listed on the [vocabularies](vocabulary.md) page.


<table>
	<tr><th>Property in Example</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>Must be "Activity".</td>
		<td>
		<ul><li>object.objectType [1]</li></ul>
		</td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for a single unique Activity</td>
		<ul><li>object.id [1]</li></ul>
	</tr>
	<tr>
		<td>object.instructor</td>
		<td>Not required, a JSON Object. "objectType": "Agent", with account.name giving the login id for the instructor who marked the assesment, account.homepage giving the URL of the home page of the application for which the login id applies. If included all account properties are required.</td>
		<td><ul>
			<li>object.instructor [0.1] </li>
		    <li>object.instructor.account.name [1] </li>
		    <li>object.instructor.account.homepage [1] </li>
			</ul>
		</td>
	</tr>
	<tr>
		<td>object.definition</td>
		<td>The <b>type</b> indicates the type of the object of the statement. It is required and valid values are listed on the [vocabulary](vocabulary.md#31-activity-types) page.</br>
		The <b>name</b> is optional.</br>
		The <b>description</b> is optional.</br>
		The <b>extensions</b> may be used to indicate the due date of this assignment. "http://xapi.jisc.ac.uk/dueDate" is a ISO 8601 date time that the assignment is due</td>
		</td>
		<td>
		<ul><li>object.definition.type [1]</li>
			<li>object.definition.name [0.1]</li>
			<li>object.definition.description [0.1]</li>
			<li>object.definition.extensions [0.1]</li>
		</ul>
		</td>
	</tr>
</table>

#### Example:
``` javascript
"object":{

		"objectType":"Activity",
		"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
		"definition":{
			"type":"http://adlnet.gov/expapi/activities/module",
			"name":{
				"en":"Course Assignment"
			},
			"description":{
				"en":"Course Assignment description"
				}
			},
			
		    "extensions":{
				"http://xapi.jisc.ac.uk/dueDate": "2016-02-05T17:59:45.000Z"
			}
			
		}
```

## Result
In the Jisc profile, the use of the result entity and any of its properties is optional.

### Result.A
Common entity identifier: Result.A

This result pattern describes completion and is optional.

<table>
	<tr><th>Property in Example</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>result.result.completion</td>
		<td>"true". Indicates the Activity was completed</td>
		<td><ul><li>result.result.completion [1]</li></ul></td>
	</tr>
</table>

#### Example:
``` javascript
 "result":{
        "completion":true
    }
```

### Result.B
Common entity identifier: Result.B

This result pattern describes completion and is usually optional. This result entity can include scaled, raw, min and max score, success, and response (the instructor's feedback). See [result](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#result). See the [vocabulary](../vocabulary.md) page for a definition of the http://xapi.jisc.ac.uk/grade extension.

<table>
	<tr><th>Property in Example</th><th>Description</th><th>Entity Obligations</th></tr>
	<tr>
		<td>result.score.raw</td>
		<td>Decimal number</td>
		<td><ul><li>result.score.raw [0.1]</li></ul></td>
	</tr>
		<tr>
		<td>result.extensions.http://xapi.jisc.ac.uk/grade</td>
		<td>A non-numerical assessment result. Data type is string (256)</td>
		<td><ul><li>result.extensions.grade [0.1] [0.1]</li></ul></td>
	</tr>
</table>

#### Example:
``` javascript
 "result":{
        "completion":true
    }
```



