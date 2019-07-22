# video_viewed Statement template

## For discussion

## Purpose

### Actor
The Actor entity is used to identify the individual viewing the video. It uses the Jisc Profile common entity [ActorA](/common_structures.md#actora).

### Example:

``` Javascript
"actor": {
  "objectType": "Agent",
  "name": "John Smith",
  "account": {
    "name": "jsmith12",
    "homePage": "https://video.jisc.ac.uk/"
  }
}
```

### Verb
The Verb used in view Statements is [viewed](../vocabulary.md#verbs). It denotes the action of the user accessing the video. It uses the Jisc Profile common entity [VerbA](../common_structures.md#verba). 

### Example:

``` javascript
"verb": {
  "id": "http://id.tincanapi.com/verb/viewed",
  "display": {
    "en" : "viewed"
  }
}
```

### Object

The Object for viewed Statements identifies what is being viewed. It is based on the the Jisc Profile common entity [ObjectA](../common_structures.md#objecta).

### Example

``` javascript

	"object": {
		"objectType": "Activity",
		"id": "http://streaming.jisc.ac.uk/video/54",
		"definition": {
			"type": "https://w3id.org/xapi/video/activity-type/video"
		}
	}

```

### Result
The result entity is used to record total time spent consuming the video in the result.duration property. Durations are strings representing the amount of time [using ISO 8601 format](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI-Data.md#durations).

#### Entity properties:
<table>
<tr><th>Property</th><th>Description</th></tr>
	<tr><td>result.duration [0..1]</td>
	<td>total time spent consuming the video</td></tr>
</table>



``` javascript
"result": {
       "duration": "PT1234S"
        }
    },

```


### Context
The Context entity can be used to describe any surrounding circumstances, including for example the device used and id of the module. If the device supports it, session Ids and ip-addresses can be recorded. Common entity identifier: [ContextA](/common_structures.md#contexta)   

### Example:

``` javascript
"context": {
    "platform": "Echo360",
    "extensions": {
	
    	"http://xapi.jisc.ac.uk/courseArea": {
			"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
			},
					
		"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
		"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
		"http://xapi.jisc.ac.uk/version" : "1.0.3"
			}
        }
```

### Full Example:

``` javascript
{
	"version": "1.0.0",
	"timestamp": "2018-09-18T01:54:51.484Z",
	"actor": {
		"objectType": "Agent",
		"name": "John Smith",
		"account": {
			"name": "js10",
			"homePage": "http://streaming.jisc.ac.uk/"
		}
	},
	"verb": {
		"id": "http://id.tincanapi.com/verb/viewed",
		"display": {
			"en": "viewed"
		},

	"object": {
		"objectType": "Activity",
		"id": "http://streaming.jisc.ac.uk/video/54",
		"definition": {
			"type": "https://w3id.org/xapi/video/activity-type/video"
		}
	},

	"result": {
         "duration": "PT1234S"
    },

	"context": {
        "platform": "Echo360",
        "extensions": {
	
      		"http://xapi.jisc.ac.uk/courseArea": {
				"http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
				"http://xapi.jisc.ac.uk/uddModInstanceID": "LA101-200-2016S1-0",
			},
					
			"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
			"http://id.tincanapi.com/extension/ip-address": "10.3.3.48"
			"http://xapi.jisc.ac.uk/version" : "1.0.3"
			}
        }
}
