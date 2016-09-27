# Jisc Learning Analytics Common Structures
The following sections describe common patterns used across several of the recipes.
Wherever a recipe refers to a "common entity identifier", the example given in the recipe follows one of the patterns given on this page.

## Actor.A
Common entity identifier:  Actor.A

This entity is required across all recipes in the Jisc profile.

The actor entity describes the individual that is the subject of the statement.

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>actor.objectType</td>
		<td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc profile.</td>
	</tr>
	<tr>
		<td>actor.name</td>
		<td>Full name of user, optional.</td>
	</tr>
	<tr>
		<td>actor.account</td>
		<td>JSON Object with account.name giving the login id for the subject of the statement and account.homepage giving the URL of the home page of the application for which the login id applies. Both are required.</td>
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
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>verb.id</td>
		<td>IRI corresponding to Verb. Valid IRIs depend on the recipe and are given on the relevant recipe page.  
    The verb.id is required.</td>
	</tr>
	<tr>
		<td>verb.display</td>
		<td>Human readable representation of Verb. Key is a RFC 5646 Language Tag.  
    The verb.display structure is optional\*.</td>
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

This pattern is used across all recipes in the Jisc profile, but there may be additional data elements required for some recipes.

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>context.platform</td>
		<td>The platform used in the experience of this learning activity. This is required. The value used should not change between platform upgrades and version changes and should typically be a concise name by which the application is commonly known, for example "Moodle" or "Blackboard"</td>
	</tr>
	<tr>
		<td>context.extensions</td>
		<td>Three extensions are provided for, with IRIs as defined on the [vocabularies](vocabulary.md#41-context-extensions) page.</br>
    The <b>sessionID</b> extension is the VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.</br>
    The <b>ip-address</b> is required and is used to identify the client's IP address. An IPv4 address is recommended.</br>
    The <b>recipeVersion</b> extension is recommended, and identifies the recipe (and its version) which was followed to create the xAPI statement.</td>
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

## Object
Depending on the recipe, different patterns apply to express the object of a statement.

### Object.A
Common entity identifier: Object.A

This object pattern describes the core attributes of Object as used in the Jisc profile.

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>object.objectType</td>
		<td>Must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id</td>
		<td>An identifier for the object of the xAPI statement. This is required and must be unique (within a given platform) across all object types.</td>
	</tr>
		<tr>
		<td>object.definition</td>
		<td>A JSON object comprising both standard xAPI attributes and the Jisc profile subType extension.   
    The <b>type</b> indicates the type of the object of the statement. It is required and valid values are listed on the [vocabulary](vocabulary.md#31-activity-types) page.</br>
    The <b>name</b> is optional.</br>
    The <b>extensions</b> may be used to indicate the sub-type of this activity, if applicable for the recipe being used to create the statement. This qualifies the object.objectType, and is described on the [vocabularies](vocabulary.md#32-object-definition-extensions) page.</td>
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
