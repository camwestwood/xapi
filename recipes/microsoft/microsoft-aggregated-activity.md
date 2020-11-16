# Microsoft Aggregated Activity Statement

## Purpose
This template defines the structure and terms to record the experience of interacting with Microsoft products and services.


## Actor
Common entity identifier: [ActorA](/common_structures.md#actora) 

The actor entity identifies the individual borrowing the object.

### Example:

``` Javascript
{
   "actor": {
      "objectType": "Agent",
      "name": "John Smith",
      "account": {
         "name": "jsmith20",
         "homePage": "http://library.universityofjisc.ac.uk/" 
      }
   }
}
```

## Verb
Common entity identifier: VerbA, as defined on the [common structures](/common_structures.md#verba) page.

The Verb [interacted](http://activitystrea.ms/schema/1.0/interact) indicates that the student has interacted with the object.

### Example:

``` javascript
{
  "verb": {
    "id": "http://activitystrea.ms/schema/1.0/interact",
    "display": {
      "en": "interacted"
    }
}
```

## Object

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>object.objectType [1]</td>
		<td>The value must be "Activity".</td>
		<td>String, value must be "Activity".</td>
	</tr>
	<tr>
		<td>object.id [1]</td>
		<td>An identifier for the activity set - indicating a collected  set of activity for the student on a day</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. It is required and should be http://xapi.jisc.ac.uk/activities/microsoft</a></td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Microsoft Activity</td>
		<td>string</td>
	</tr>
	<tr>
		<td>object.extension</td>
		<td>Microsoft activity collection - this will capture aggregated activity counts across products and services.  See full example below.</td>
		<td>JSON</td>
	</tr>
</table>

### Example

``` javascript
{
  "object": {
    "objectType": "Activity",
    "id": "http://<DOMAIN>/<STUDENT_ID>/microsoft_2020_10_20",
    "definition": {
      "name": {
        "en": "Microsoft Activity"
      },
      "type": "http://xapi.jisc.ac.uk/activities/microsoft"
    }
  }
}
```

## Timestamp

An ISO 8601 format timestamp that corresponds to the 24 hours that activity has been captured for.

If the "latest activity" for a service is in the past, the activity counts should be 0 for the timestamp day.

### Example

``` javascript
{
   "timestamp": "2020-10-24T00:00:00.000Z"
}
```

## Context

<table>
	<tr><th>Property [cardinality]</th><th>Description</th><th>Value information</</th></tr>
	<tr>
		<td>context.platform [0..1]</td>
		<td>The platform used in the experience of this learning activity. The value used should not change between platform upgrades and version changes, and should typically be a concise name by which the application is commonly known.</td>
		<td>Microsoft</td>
	</tr>
	<tr>
		<td><a href="vocabulary.md#recipe-category">context.extensions.https://xapi.jisc.ac.uk/recipeCat</a> [0..1]</td>
		<td>Recommended. For querying lookup. Set to "Microsoft" in Microsoft statements.<br/></td>
		<td>"Microsoft"</td>
	</tr>
</table>

### Example:

``` javascript
{
  "context": {
    "platform": "Microsoft",
    "http://xapi.jisc.ac.uk/recipeCat": "Microsoft"
  }
}
```

## Full Example:
``` javascript
{
    "actor": {
      "objectType": "Agent",
      "account": {
          "name": "STU_12345",
          "homePage": "https://jisc-demo.ac.uk"
      }
    },
    "verb": {
      "id": "http://activitystrea.ms/schema/1.0/interact",
      "display": {
        "en": "interacted"
      }
    },
    "object": {
      "objectType": "Activity",
      "id": "http://<DOMAIN>/<STUDENT_ID>/microsoft_2020_10_24",
      "definition": {
        "name": {
          "en": "Microsoft Activity"
        },
        "type": "http://xapi.jisc.ac.uk/activities/microsoft"
      },
      "extensions": {
        "http://jisc.ac.uk/microsoft/teams": {
          "teamchat": 16,
          "privatechat": 22,
          "call": 12,
          "meeting": 7,
          "lastactivity": "2020-10-24"
        },

        "http://jisc.ac.uk/microsoft/onedrive": {
          "viewandedit": 76,
          "synced": 28,
          "sharedinternal": 1,
          "sharedexternal": 1,
          "lastactivity": "2020-10-24"
        },

        "http://jisc.ac.uk/microsoft/sharepoint": {
          "viewandedit": 28,
          "synced": 21,
          "sharedinternal": 6,
          "sharedexternal": 2,
          "vistedpages": 4,
          "lastactivity": "2020-10-24"
        },

        "http://jisc.ac.uk/microsoft/yammer": {
          "status": {"status": "active","statuschangedate": "2020-10-18"},
          "posted": 23,
          "read": 34,
          "liked": 12,
          "lastactivity": "2020-10-24"
        },

        "http://jisc.ac.uk/microsoft/outlook": {
          "sent": 0,
          "receive": 0,
          "read": 0,
          "lastactivity": "2020-10-18"
        },

        "http://jisc.ac.uk/microsoft/activedirectory/signin": {
          "total_signin": 57,
          "lastactivity": "2020-10-24",
          "signins_by_service": {
            "Moodle": 37,
            "Panopto": 20
        }}
      }
    },
    "context": {
      "platform": "Microsoft",
      "http://xapi.jisc.ac.uk/recipeCat": "Microsoft"
    },
    "timestamp": "2020-10-24T00:00Z"
  }
```
