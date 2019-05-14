# mobile_app_logged_in Statement template

Based on generic Statement template: [Login](/generic/login.md)

[Statement Template Changes](/version_changes.md#logged-in)

## Purpose
This Statement template records a user logging in to the study app.

### Actor
Common entity identifier: [ActorA](/common_structures.md#actora)

#### Entity Example:
The Actor entity identifies the individual that is logging in to the system.

``` Javascript
"actor": {
  "objectType": "Agent",
  "account": {
    "name": "jsmith12",
    "homePage": "https://jisc.ac.uk/studygoal/"
  }
}
```

### Verb
Common entity identifier: [VerbA](/common_structures.md#verba)

#### Entity Example:
This Verb, [logged in](/vocabulary.md#logged-in), describes the action of logging into a platform.

``` javascript
"verb": {
  "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
  "display": {
    "en" : "logged in to"
  }
}
```

### Context
Common entity identifier: ContextA, as defined on the [common structures](/common_structures.md#contexta) page.

Since the logged-in action is not undertaken in respect of a particular learning activity or course, only the core attributes of the Context entity are applicable.

#### Example:
``` javascript
``` javascript
"context": {
        "platform": "Study-Goal",
        "extensions": {
					
		  	  "http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
		    	"http://xapi.jisc.ac.uk/recipeCat": "App",
		  	  "http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
		    	"http://xapi.jisc.ac.uk/version" : "1.0.3",
          "http://xapi.jisc.ac.uk/extensions/user-agent" : "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405"
			
			}
              
  }
```

### Object
Common entity identifier: ObjectA, as defined on the [common structures](/common_structures.md#objecta) page.

When logging in to a Mobile App the object.definition.type should be http://activitystrea.ms/schema/1.0/application. When the object.definition.type is "http://activitystrea.ms/schema/1.0/application", the subType (http://xapi.jisc.ac.uk/subType) extension should be used to identify the subType of the application that is being logged into, in this example a Mobile App, identified by  http://id.tincanapi.com/activitytype/mobile-app. Different application types should use the relevant subType, as defined on the [vocabularies](/vocabulary.md#activity-types) page.

#### Example:
``` javascript
"object": {
  "objectType": "Activity",
  "id": "https://jisc.ac.uk/studygoal/",
  "definition": {
    "type": "http://activitystrea.ms/schema/1.0/application",
    "name": {
      "en": "University of Jisc Study Goal"
    },
    "extensions": {
      "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/mobile-app"
    }
  }
}
```


### Timestamp

In logged in statements the timestamp property must be set to the date and time of logging in.

#### Example:

``` javascript
 "timestamp": "2016-02-05T10:00:00.000Z"
```

"context": {
        "platform": "Study-Goal",
        "extensions": {
					
		  	  "http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
		    	"http://xapi.jisc.ac.uk/recipeCat": "App",
		  	  "http://id.tincanapi.com/extension/ip-address": "10.3.3.48",
		    	"http://xapi.jisc.ac.uk/version" : "1.0.3",
          "http://xapi.jisc.ac.uk/extensions/user-agent" : "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405"
			
			}
              
  }

### Full Example

``` javascript
	"version": "1.0.0",
	"timestamp": "2016-02-05T10:00:00.000Z"
	"actor": {
		"objectType": "Agent",
		"account": {
			"name": "jsmith12",
			"homePage": "https://jisc.ac.uk/studygoal/"
		}
	},
	"verb": {
		"id": "https://brindlewaye.com/xAPITerms/verbs/loggedin",
		"display": {
			"en": "logged in to"
		}
	},
	"context": {
		"platform": "**PLATFORM**",
		"extensions": {
			"http://xapi.jisc.ac.uk/recipeCat": "APP",
			"http://xapi.jisc.ac.uk/sessionId": "32456891",
			"http://id.tincanapi.com/extensions/ip-address": "10.3.3.48",
			"http://xapi.jisc.ac.uk/version": "1.0.3",
			"http://xapi.jisc.ac.uk/extensions/user-agent": "Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405"
		}
	},
  "object": {
    "objectType": "Activity",
    "id": "https://jisc.ac.uk/studygoal/",
    "definition": {
      "type": "http://activitystrea.ms/schema/1.0/application",
      "name": {
        "en": "University of Jisc Study Goal"
      },
      "extensions": {
        "http://xapi.jisc.ac.uk/subType": "http://id.tincanapi.com/activitytype/mobile-app"
    }
  }
}
}
```