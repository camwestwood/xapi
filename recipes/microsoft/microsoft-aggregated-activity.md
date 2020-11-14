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
		<td>An identifier for the aggregation set - indicating a single set of aggregations for the student on a day</td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.type [1]</td>
		<td>Indicates the type of the object of the statement. It is required and should be http://xapi.jisc.ac.uk/activities/microsoft_aggregations</a></td>
		<td>iri</td>
	</tr>
	<tr>
		<td>object.definition.name [0..1]</td>
		<td>Microsoft Activity Aggregations</td>
		<td>string</td>
	</tr>
</table>


### Example

``` javascript
{
  "object": {
    "objectType": "Activity",
    "id": "http://<DOMAIN>/<STUDENT_ID>/microsoft_aggregations_2020_10_20",
    "definition": {
      "name": {
        "en": "Microsoft Activity Aggregations"
      },
      "type": "http://xapi.jisc.ac.uk/activities/microsoft_aggregations"
    }
  }
}
```

## Timestamp
An ISO 8601 format timestamp that corresponds to the time of when the item was borrowed.

### Example:

``` javascript
{
   "timestamp": "2018-11-18T13:05:51.484Z"
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
    "id": "http://<DOMAIN>/<STUDENT_ID>/microsoft_aggregations_2020_10_20",
    "definition": {
      "name": {
        "en": "Microsoft Activity Aggregations"
      },
      "type": "http://xapi.jisc.ac.uk/activities/microsoft_aggregations"
    }
  },
  "context": {
    "platform": "Microsoft",
    "http://xapi.jisc.ac.uk/recipeCat": "Microsoft"
  },
  "result": {
    "extensions": {
      "http://jisc.ac.uk/microsoft/teams/teamchat": {"count": 16},
      "http://jisc.ac.uk/microsoft/teams/privatechat": {"count": 22},
      "http://jisc.ac.uk/microsoft/teams/call": {"count": 12},
      "http://jisc.ac.uk/microsoft/teams/meeting": {"count": 7},      
      "http://jisc.ac.uk/microsoft/teams/lastactivity": {"date": "2020-10-20"},
      "http://jisc.ac.uk/microsoft/onedrive/viewandedit": {"count": 76},
      "http://jisc.ac.uk/microsoft/onedrive/synced": {"count": 28},
      "http://jisc.ac.uk/microsoft/onedrive/sharedinternal": {"count": 1},
      "http://jisc.ac.uk/microsoft/onedrive/sharedexternal": {"count": 1},      
      "http://jisc.ac.uk/microsoft/onedrive/lastactivity": {"date": "2020-10-23"},
      "http://jisc.ac.uk/microsoft/sharepoint/viewandedit": {"count": 76},
      "http://jisc.ac.uk/microsoft/sharepoint/synced": {"count": 28},
      "http://jisc.ac.uk/microsoft/sharepoint/sharedinternal": {"count": 6},
      "http://jisc.ac.uk/microsoft/sharepoint/sharedexternal": {"count": 2}, 
      "http://jisc.ac.uk/microsoft/sharepoint/vistedpages": {"count": 2},        
      "http://jisc.ac.uk/microsoft/sharepoint/lastactivity": {"date": "2020-10-21"},
      "http://jisc.ac.uk/microsoft/yammer/user": {"status": "active","statuschangedate": "2020-10-18"},
      "http://jisc.ac.uk/microsoft/yammer/posted": {"count": 76},
      "http://jisc.ac.uk/microsoft/yammer/read": {"count": 28},
      "http://jisc.ac.uk/microsoft/yammer/liked": {"count": 6},
      "http://jisc.ac.uk/microsoft/yammer/lastactivity": {"date": "2020-10-18"},
      "http://jisc.ac.uk/microsoft/outlook/send": {"count": 41},
      "http://jisc.ac.uk/microsoft/outlook/receive": {"count": 39},      
      "http://jisc.ac.uk/microsoft/outlook/read": {"count": 26},
      "http://jisc.ac.uk/microsoft/outlook/lastactivity": {"date": "2020-10-18"},
      "http://jisc.ac.uk/microsoft/activedirectory/lastactivity": {"date": "2020-10-18"},
      "http://jisc.ac.uk/microsoft/activedirectory/signin": {
        "count": 41,
        "detail": {
          "Moodle": 37,
          "Panopto": 20
      }}
    }
  },
  "timestamp": "2020-10-24T09:00Z"
}
```
